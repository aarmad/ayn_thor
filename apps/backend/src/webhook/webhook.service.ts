import { Injectable, BadRequestException } from '@nestjs/common';
import Stripe from 'stripe';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class WebhookService {
  private stripe: Stripe;

  constructor(private readonly ordersService: OrdersService) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
      apiVersion: '2026-02-25.clover' as any,
    });
  }

  async handleWebhook(payload: Buffer, signature: string): Promise<void> {
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const isMockMode = !process.env.STRIPE_SECRET_KEY;

    let event: Stripe.Event;

    try {
      if (!isMockMode && endpointSecret) {
        event = this.stripe.webhooks.constructEvent(payload, signature, endpointSecret);
      } else {
        event = JSON.parse(payload.toString()) as Stripe.Event;
      }
    } catch (err: any) {
      throw new BadRequestException(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      await this.handleCheckoutCompleted(session);
    }
  }

  private async handleCheckoutCompleted(session: Stripe.Checkout.Session) {
    try {
      const lineItems = await this.stripe.checkout.sessions.listLineItems(session.id);

      const items = lineItems.data.map((item) => ({
        productId: (item.price?.product as string) || 'unknown',
        name: item.description || '',
        price: (item.price?.unit_amount || 0) / 100,
        quantity: item.quantity || 1,
      }));

      await this.ordersService.create({
        stripeSessionId: session.id,
        customerEmail: session.customer_details?.email || 'unknown',
        customerName: session.customer_details?.name || 'unknown',
        amountTotal: (session.amount_total || 0) / 100,
        currency: session.currency || 'eur',
        paymentStatus: session.payment_status,
        items,
        fulfillmentStatus: 'pending',
      });

      console.log(`Order ${session.id} saved.`);
    } catch (err) {
      console.error('Database error on webhook:', err);
    }
  }
}

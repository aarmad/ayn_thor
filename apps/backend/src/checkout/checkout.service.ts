import { Injectable, BadRequestException } from '@nestjs/common';
import Stripe from 'stripe';
import { CartItemDto } from './dto/checkout.dto';

@Injectable()
export class CheckoutService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
  }

  async createSession(items: CartItemDto[], origin: string): Promise<string> {
    if (!items?.length) {
      throw new BadRequestException('No items to checkout');
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          images: item.image?.startsWith('http') ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart?canceled=true`,
    });

    return session.url!;
  }
}

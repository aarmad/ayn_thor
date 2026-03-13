import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import dbConnect from "@/lib/mongoose";
import Order from "@/models/Order";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2026-02-25.clover",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const sig = req.headers.get("stripe-signature") as string;

  let event;
  const isMockMode = !process.env.STRIPE_SECRET_KEY;

  try {
    if (!isMockMode && endpointSecret) {
       event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } else {
       // If no webhook secret is provided, we just trust the payload (Mock mode for development)
       event = JSON.parse(payload);
    }
  } catch (err: any) {
    console.warn(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;
      
      try {
        await dbConnect();

        // Retrieve the line items
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
        
        const dbItems = lineItems.data.map(item => ({
             productId: item.price?.product || "unknown",
             name: item.description,
             price: (item.price?.unit_amount || 0) / 100,
             quantity: item.quantity || 1,
        }));

        const newOrder = new Order({
          stripeSessionId: session.id,
          customerEmail: session.customer_details?.email || "unknown",
          customerName: session.customer_details?.name || "unknown",
          amountTotal: (session.amount_total || 0) / 100,
          currency: session.currency || "usd",
          paymentStatus: session.payment_status,
          items: dbItems,
          fulfillmentStatus: "pending",
        });

        await newOrder.save();
        console.log(`Order ${session.id} saved successfully!`);
        
        // TODO: Decrease product stock logic here
        // await Product.findOneAndUpdate({ _id: productId }, { $inc: { stock: -quantity } })
        
      } catch (dbError) {
         console.error("Database Error:", dbError);
         // Return 200 anyway so Stripe doesn't infinitely retry unless we want it to
      }
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

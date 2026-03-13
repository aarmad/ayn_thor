import mongoose, { Schema, model, models } from 'mongoose';

const OrderItemSchema = new Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const OrderSchema = new Schema(
  {
    stripeSessionId: { type: String, required: true, unique: true },
    customerEmail: { type: String },
    customerName: { type: String },
    amountTotal: { type: Number, required: true },
    currency: { type: String, required: true },
    paymentStatus: { type: String, required: true },
    items: [OrderItemSchema],
    fulfillmentStatus: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

const Order = models?.Order || model('Order', OrderSchema);

export default Order;

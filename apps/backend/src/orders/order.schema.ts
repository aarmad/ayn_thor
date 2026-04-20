import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
class OrderItem {
  @Prop({ required: true }) productId: string;
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) price: number;
  @Prop({ required: true }) quantity: number;
}

const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true, unique: true }) stripeSessionId: string;
  @Prop() customerEmail: string;
  @Prop() customerName: string;
  @Prop({ required: true }) amountTotal: number;
  @Prop({ required: true }) currency: string;
  @Prop({ required: true }) paymentStatus: string;
  @Prop({ type: [OrderItemSchema], default: [] }) items: OrderItem[];
  @Prop({ default: 'pending' }) fulfillmentStatus: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

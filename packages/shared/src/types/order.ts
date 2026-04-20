export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  stripeSessionId: string;
  customerEmail: string;
  customerName: string;
  amountTotal: number;
  currency: string;
  paymentStatus: string;
  items: OrderItem[];
  fulfillmentStatus: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

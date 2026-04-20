export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CheckoutRequest {
  items: CartItem[];
}

export interface CheckoutResponse {
  url: string;
}

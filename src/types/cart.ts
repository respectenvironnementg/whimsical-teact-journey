export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
  type_product?: string;
  itemgroup_product?: string;
  discount_product?: string;
  originalPrice?: number;
  personalization?: string;
  withBox?: boolean;
  fromPack?: boolean;
  pack?: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  hasNewsletterDiscount: boolean;
  applyNewsletterDiscount: () => void;
  removeNewsletterDiscount: () => void;
  calculateTotal: () => {
    subtotal: number;
    discount: number;
    total: number;
    boxTotal: number;
  };
}
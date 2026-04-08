export interface CartItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  updatedAt: number;
}

const CART_STORAGE_KEY = 'infinity_cart';

export function getCart(): Cart {
  if (typeof window === 'undefined') {
    return { items: [], updatedAt: Date.now() };
  }
  
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  if (!stored) {
    return { items: [], updatedAt: Date.now() };
  }
  
  try {
    return JSON.parse(stored);
  } catch {
    return { items: [], updatedAt: Date.now() };
  }
}

export function saveCart(cart: Cart): void {
  if (typeof window === 'undefined') return;
  
  cart.updatedAt = Date.now();
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }));
}

export function addToCart(item: Omit<CartItem, 'quantity'>): Cart {
  const cart = getCart();
  const existingIndex = cart.items.findIndex(i => i.id === item.id);
  
  if (existingIndex >= 0) {
    cart.items[existingIndex].quantity += 1;
  } else {
    cart.items.push({ ...item, quantity: 1 });
  }
  
  saveCart(cart);
  return cart;
}

export function removeFromCart(productId: number): Cart {
  const cart = getCart();
  cart.items = cart.items.filter(item => item.id !== productId);
  saveCart(cart);
  return cart;
}

export function updateQuantity(productId: number, quantity: number): Cart {
  const cart = getCart();
  const item = cart.items.find(i => i.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      cart.items = cart.items.filter(i => i.id !== productId);
    } else {
      item.quantity = quantity;
    }
  }
  
  saveCart(cart);
  return cart;
}

export function clearCart(): Cart {
  const cart = { items: [], updatedAt: Date.now() };
  saveCart(cart);
  return cart;
}

export function getCartTotal(): number {
  const cart = getCart();
  return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

export function getCartItemCount(): number {
  const cart = getCart();
  return cart.items.reduce((count, item) => count + item.quantity, 0);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
}

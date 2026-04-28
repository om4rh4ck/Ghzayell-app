import { createContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("ghzaiel-cart") || "[]"));

  useEffect(() => {
    localStorage.setItem("ghzaiel-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    setItems((current) => {
      const existing = current.find((item) => item.product === product._id);

      if (existing) {
        return current.map((item) =>
          item.product === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [
        ...current,
        {
          product: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }
      ];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setItems((current) =>
      current
        .map((item) => (item.product === productId ? { ...item, quantity: Math.max(quantity, 1) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setItems((current) => current.filter((item) => item.product !== productId));
  };

  const clearCart = () => setItems([]);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const value = useMemo(
    () => ({
      items,
      total,
      itemCount,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart
    }),
    [items, total, itemCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

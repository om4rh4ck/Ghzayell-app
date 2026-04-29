import { createContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext(null);

const resolveProductId = (product) => String(product?.id ?? product?._id ?? "");

const sanitizeCartItems = (items) =>
  (Array.isArray(items) ? items : [])
    .map((item) => {
      const productId = String(item?.product ?? item?.id ?? item?._id ?? "").trim();
      const quantity = Math.max(Number(item?.quantity) || 1, 1);
      const price = Number(item?.price);

      if (!productId || !Number.isFinite(price)) {
        return null;
      }

      return {
        product: productId,
        name: item?.name || "",
        price,
        image: item?.image || "",
        quantity
      };
    })
    .filter(Boolean);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("ghzaiel-cart") || "[]");
    return sanitizeCartItems(storedItems);
  });

  useEffect(() => {
    localStorage.setItem("ghzaiel-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    const productId = resolveProductId(product);

    if (!productId) {
      return;
    }

    setItems((current) => {
      const existing = current.find((item) => item.product === productId);

      if (existing) {
        return current.map((item) =>
          item.product === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [
        ...current,
        {
          product: productId,
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

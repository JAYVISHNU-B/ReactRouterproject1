// src/CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart-item">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>Increase</button>
      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>Decrease</button>
      <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;

// src/Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const finalPrice = totalPrice - totalPrice * 0.1; // Apply 10% discount

  return (
    <div className="cart">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      ))}
      <h2>Total Price: ${finalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;

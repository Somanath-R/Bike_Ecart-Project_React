import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                {item.type === "bike" ? (
                  <p>{item.cc} • {item.torque}</p>
                ) : (
                  <p>
                    {item.engine} • {item.fuelType} • {item.transmission}
                  </p>
                )}
                <p className="price">₹{item.price.toLocaleString()}</p>
              </div>

              {/* ✅ Cart actions */}
              <div className="cart-actions">
                <button className="cart-btn" onClick={() => decreaseQty(item.id)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button className="cart-btn" onClick={() => increaseQty(item.id)}>
                  +
                </button>
                <button
                  className="cart-btn remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">Total: ₹{totalPrice.toLocaleString()}</div>
        </>
      )}
    </div>
  );
}

export default Cart;

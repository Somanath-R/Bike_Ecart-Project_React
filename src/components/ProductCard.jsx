import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <div className="card">
      <h3>{product.name}</h3>

      {product.type === "bike" ? (
        <p>{product.cc} • {product.torque}</p>
      ) : (
        <p>
          {product.engine} • {product.fuelType} • {product.transmission}
        </p>
      )}

      <p>₹{product.price.toLocaleString()}</p>

      {/* ✅ Add to Cart Button */}
      <button
        className="add-btn"
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
      >
        🛒 Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

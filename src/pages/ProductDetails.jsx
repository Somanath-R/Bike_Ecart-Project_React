import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="p-6">
        <p className="text-red-600">Product not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-300 rounded-lg"
      >
        ⬅ Back
      </button>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <img
          src={product.image}
          alt={product.model}
          className="w-full h-60 object-cover rounded-lg"
        />
        <h1 className="text-2xl font-bold mt-4">
          {product.brand} {product.model}
        </h1>
        <p className="text-lg text-gray-600">Type: {product.type}</p>
        <p className="text-xl text-green-700 mt-2">
          Price: ₹{product.price.toLocaleString()}
        </p>

        <div className="mt-4 space-y-2">
          {product.engine && <p><b>Engine:</b> {product.engine}</p>}
          {product.cc && <p><b>CC:</b> {product.cc} cc</p>}
          {product.torque && <p><b>Torque:</b> {product.torque}</p>}
          {product.mileage && <p><b>Mileage:</b> {product.mileage} km/l</p>}
          {product.fuelType && <p><b>Fuel Type:</b> {product.fuelType}</p>}
          {product.transmission && <p><b>Transmission:</b> {product.transmission}</p>}
          {product.topSpeed && <p><b>Top Speed:</b> {product.topSpeed}</p>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

import React from "react";
import bikes from "../data/bikes.json";
import cars from "../data/cars.json";
import ProductCard from "../components/ProductCard";

function Home() {
  // Merge both into single array
  const products = [
    ...bikes.map((b) => ({ ...b, type: "Bike" })),
    ...cars.map((c) => ({ ...c, type: "Car" })),
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🚘 Bike & Car Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p, index) => (
          <ProductCard key={index} product={p} />
        ))}
      </div>
      console.log(bikes);
      
    </div>
  );
}

export default Home;

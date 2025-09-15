import { useState, useEffect } from "react";
import "./App.css"; // we'll create this for styling

function App() {
  const [products, setProducts] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setBikes(data.filter((item) => item.type === "bike"));
        setCars(data.filter((item) => item.type === "car"));
      });
  }, []);

  return (
    <div className="store">
      <h1 className="title">🚲 Bike & 🚗 Car Store</h1>

      <section>
        <h2>Bikes</h2>
        <div className="grid">
          {bikes.map((bike) => (
            <div key={bike.id} className="card">
              <h3>{bike.name}</h3>
              <p>{bike.cc} • {bike.torque}</p>
              <p className="price">₹{bike.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Cars</h2>
        <div className="grid">
          {cars.map((car) => (
            <div key={car.id} className="card">
              <h3>{car.name}</h3>
              <p>{car.engine} • {car.fuelType} • {car.transmission}</p>
              <p className="price">₹{car.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

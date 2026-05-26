import React, { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://api.app.local/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Dhanush E-Commerce Store</h1>

      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

import React, { useState } from "react";
function PlantCard(props) {
  const [inStock, setInStock] = useState(true);
  return (
    <li className="card" data-testid="plant-item">
      <img src={props.plant.image} alt={props.plant.name} />
      <h4>{props.plant.name}</h4>
      <p>Price: {props.plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(!inStock)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => setInStock (!inStock)}>Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;

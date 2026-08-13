import React from "react";

function NewPlantForm(props) {function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: e.target.elements.name.value,
      image: e.target.elements.image.value,
      price:e.target.elements.price.value,
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => props.addPlant(data));
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

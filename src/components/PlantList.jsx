import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {
  return (
    <ul className="cards">{props.plants.map((plant) =>
      <PlantCard key={plant.id} plant={plant} />
    )}
    </ul>
  );
}

export default PlantList;

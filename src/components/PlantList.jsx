import PlantCard from "./PlantCard.jsx";

function PlantList({ plants }) {
  return (
    <div id="plants" className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          type={plant.type}
          water={plant.water}
          emoji={plant.emoji}
        />
      ))}
    </div>
  );
}

export default PlantList;

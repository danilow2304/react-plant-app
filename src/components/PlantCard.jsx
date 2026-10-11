function PlantCard({ name, type, water, emoji }) {
  return (
    <div className="plant-card">
      <div className="emoji">{emoji}</div>
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Water: {water}</p>
    </div>
  );
}

export default PlantCard;

import CarCard from "./CarCard";

function CarList({ cars, onDelete }) {
  if (cars.length === 0) {
    return <p>No cars found</p>;
  }

  return (
    <div>
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default CarList;
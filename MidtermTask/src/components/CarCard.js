function CarCard({ car, onDelete }) {
  const { brand, price, year, image } = car;

  return (
    <div className="car-card">
      <div className="car-info">
        <h3>{brand}</h3>

        <p>💰 Price: ${price}</p>
        <p>📅 Year: {year}</p>
        {car.price > 30000 ? <p>Luxury</p> : <p>Standard</p>}
        <button
        className="delete-btn"
        onClick={() => onDelete(car.id)}
        >
        Delete
        </button>
        </div>
        
        <img
          src={image}
          alt={brand}
          className="car-image"
        />

    </div>
  );
}

export default CarCard;
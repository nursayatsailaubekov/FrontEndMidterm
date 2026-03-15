import { useState } from "react";

function AddCarForm({ addCar }) {

  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!brand || !price || !year || !image) {
      alert("Please fill all fields");
      return;
    }

    addCar({
      id: Date.now(),
      brand,
      price,
      year,
      image
    });

    setBrand("");
    setPrice("");
    setYear("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Post your car</h3>
      <input
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <p>Add car image</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      <button type="submit">
        Add Car
      </button>

    </form>
  );
}

export default AddCarForm;
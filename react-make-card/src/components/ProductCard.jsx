import React, { useState } from "react";

const ProductCard = ({ title, author, price, genre, rating, image }) => {

const [count, setCount] = useState(0);

const handleAddToCart = () => {
  setCount(count + 1);
};

  return (
    <div className="w-64 rounded-xl border">
      <img
        className="h-60 w-full object-cover"
        src={image}
        alt={title}
      />
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{genre}</p>
      <p>{rating}</p>
      <p>{price} AZN</p>

        <button 
onClick={handleAddToCart}
        className="mt-4 w-full bg-white px-4 py-2 text-black hover:bg-green-500">
        Add
        </button>
        <p>Cart: {count}</p>
    </div>
  );
};

export default ProductCard;
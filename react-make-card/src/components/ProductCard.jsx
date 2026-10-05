import React from "react";

const ProductCard = ({ title, author, price, genre, rating, image }) => {
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

      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
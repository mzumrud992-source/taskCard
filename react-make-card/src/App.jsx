import React from 'react'
import ProductCard from './components/ProductCard'

import murderOrient from "./assets/MurderOnTheOrientExpress_PB.avif";
import andThenThereWereNone from "./assets/Jacket_AndThenThereWereNoneUS.avif";
import bigSleep from "./assets/bigSleep.jpg";
import images from "./assets/images.jpg";
import baskervilles from "./assets/baskervilles.jpg";
import arthurConan from "./assets/arthurConan.jpg";

const App = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {books.map((book) => (
  <ProductCard
    key={book.id}
    title={book.title}
    author={book.author}
    price={book.price}
    genre={book.genre}
    rating={book.rating}
    image={book.image}
  />
))}
    </div>
  )
}
const books = [
  {
    id: 1,
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    price: 12,
    genre: "Detective",
    rating: 4.8,
    image: arthurConan
  },
  {
    id: 2,
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    price: 15,
    genre: "Mystery",
    rating: 4.9,
    image: murderOrient
  },
  {
    id: 3,
    title: "The Murder of Roger Ackroyd",
    author: "Agatha Christie",
    price: 14,
    genre: "Crime",
    rating: 4.7,
    image: images
  },
  {
    id: 4,
    title: "The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    price: 16,
    genre: "Mystery",
    rating: 4.8,
    image: baskervilles
  },
  {
    id: 5,
    title: "And Then There Were None",
    author: "Agatha Christie",
    price: 18,
    genre: "Thriller",
    rating: 4.9,
    image: andThenThereWereNone
  },
  {
    id: 6,
    title: "The Big Sleep",
    author: "Raymond Chandler",
    price: 13,
    genre: "Crime",
    rating: 4.6,
    image: bigSleep
  }
];

export default App;
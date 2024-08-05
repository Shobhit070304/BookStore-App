import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

const Course = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        setBooks(res.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    getBooks();
  }, []);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-blue-500">Here! :)</span>{" "}
        </h1>
        <p className="mt-12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit magni
          labore perspiciatis quae quis id, beatae natus quibusdam explicabo ut
          est quasi deserunt aut totam veritatis laborum ipsum harum at. Rem
          odit, placeat pariatur non optio tenetur temporibus alias ullam
          quisquam, saepe sed! Labore doloribus nesciunt repellendus. Pariatur,
          laboriosam aliquid!
        </p>
        <Link to={"/"}>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {books.map(function (book) {
          return <Card book={book} key={book.id} />;
        })}
      </div>
    </div>
  );
};

export default Course;

import React from "react";

const Card = ({ book }) => {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-92 shadow-lg hover:shadow-2xl hover:scale-105 duration-300 dark:bg-zinc-800 dark:text-white dark:border">
        <figure>
          <img
            src={book.image}
            alt="book"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {book.name}
            <div className="badge bg-blue-500">{book.category}</div>
          </h2>
          <p>{book.title}</p>
          <div className="card-actions justify-between items-center">
            <div className="rounded-full border border-zinc-200 py-0.5 px-2">
              ${book.price}
            </div>
            <div className="rounded-full border border-zinc-200 hover:bg-blue-500 py-0.5 px-2">
              Buy Now!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

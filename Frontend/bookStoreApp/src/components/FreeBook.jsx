import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";

const FreeBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        const data = res.data.filter((item) => item.category === "Free");
        setBooks(data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    getBooks();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex rem
            sequi reprehenderit dolores! Magnam necessitatibus minus repellat
            consequuntur? Repudiandae corrupti reiciendis, eligendi cumque nam
            cum quo molestias? Quibusdam, quo minima?
          </p>
        </div>
        <div>
          <Slider {...settings} className="text-black">
            {books.map(function (book) {
              return <Card book={book} key={book.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;

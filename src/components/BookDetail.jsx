import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import Loader from "./Loader";

const BookDetail = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://example-data.draftbit.com/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="p-5 m-5">
      {!loading && (
        <>
          <div>
            <h2 className="text-2xl font-bold p-2 m-2 shadow-lg w-fit">
              {book.title}
            </h2>
            <img src={book.image_url} alt="#" className="rounded-2xl" />
          </div>
          <div>
            <h2 className="text-xl font-semibold shadow w-fit">Description</h2>
            <p className="text-lg italic">{book.description}</p>
            <h2 className="text-xl font-semibold shadow w-fit">Authors</h2>
            <p className="text-lg italic">{book.authors}</p>
            <h2 className="text-xl font-semibold shadow w-fit">Genres</h2>
            <p className="text-lg italic">{book.genres}</p>
          </div>
        </>
      )}
      : {loading && <Loader />}
    </div>
  );
};

export default BookDetail;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import { useAppContext } from "./context/appContext";

const BookList = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://example-data.draftbit.com/books?_limit=84")
      .then((res) => {
        setBooks(res.data);
        // console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      {!loading && (
        <>
          <input
            type="text"
            placeholder="Filter your Search..."
            className="input border-opacity-70 w-full max-w-xs m-5 font-bold hover:shadow-lg"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="grid grid-cols-3 h-18 gap-4 mt-2">
            {books
              .filter((book) => {
                return search.toLowerCase() === ""
                  ? book
                  : book.title.toLowerCase().includes(search);
              })
              .map((book) => (
                <div key={book.id}>
                  <div className="h-10 m-6 flex justify-evenly ">
                    <h1
                      className="font-extrabold  text-xl shadow-lg rounded-3xl cursor-pointer"
                      onClick={() => navigate(`/books/${book.id}`)}
                      title="Click to see Details..."
                    >
                      {book.title}
                    </h1>
                  </div>
                  <div className="flex justify-evenly">
                    <img
                      src={book.image_url}
                      alt="#"
                      className="w-72 h-auto transition-all-ease shadow-lg  duration-500 hover:scale-110 cursor-pointer rounded-2xl "
                      onClick={() => navigate(`/books/${book.id}`)}
                      title="Click to see Details..."
                    />
                  </div>
                  <div className="flex justify-evenly p-4">
                    {favoritesChecker(book.id) ? (
                      <button
                        className="btn btn-outline w-auto m-3 shadow-lg shadow-blue-500/50 opacity-80"
                        onClick={() => removeFromFavorites(book.id)}
                      >
                        Remove from Favorites
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline w-auto m-3 shadow-lg shadow-blue-500/50 opacity-80"
                        onClick={() => addToFavorites(book)}
                      >
                        Add to Favorites
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </>
      )}{" "}
      : {loading && <Loader />}
    </div>
  );
};

export default BookList;

import React, { useEffect } from "react";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  return (
    <div className="grid grid-cols-3 h-18 gap-4 mt-2">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id}>
            <div className="h-10 m-6 flex justify-evenly ">
              <h1
                className="font-extrabold  text-xl shadow-lg rounded-3xl cursor-pointer"
                onClick={() => navigate(`/books/${book.id}`)}
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
        ))
      ) : (
        <div className="h-[65vh]">
          <h1 className="text-3xl font-semibold mt-10 p-10">
            You don't have any Favorites yet !
          </h1>
        </div>
      )}
    </div>
  );
};

export default Favorites;

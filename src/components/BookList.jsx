import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import { useAppContext } from "./context/appContext";
import { Pagination } from "react-bootstrap";

const itemsPerPage = 9; // Number of books to display per page

const BookList = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  // Fetching books

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://example-data.draftbit.com/books?_limit=63")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Paginate index
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to the top
  };

  // Search filter

  return (
    <div className="">
      {!loading && (
        <>
          <input
            type="text"
            placeholder="Filter your Search..."
            className="input border-opacity-70  m-5 max-w-xs font-bold  w-full hover:shadow-lg"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {currentBooks
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
                      title="Click to see Book Details..."
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

          {/* Pagination */}
          {search.toLowerCase() === "" && (
            <Pagination className="flex justify-center m-10 text-3xl gap-1">
              {Array.from({
                length: Math.ceil(books.length / itemsPerPage),
              }).map((item, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                  className={`mx-2 transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                    index + 1 === currentPage
                      ? "bg-gray-800 text-white text-4xl shadow-xl"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800 shadow-xl"
                  } border border-gray-300 rounded-lg px-3 py-1 cursor-pointer`}
                  activeLabel=""
                  style={{ margin: "0 5px" }}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          )}
        </>
      )}

      {loading && <Loader />}
    </div>
  );
};

export default BookList;

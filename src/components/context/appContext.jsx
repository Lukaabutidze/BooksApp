import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within appContextProvider");
  }

  return context;
};

// LocalStorage

const getInitialState = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (book) => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.concat(book);

    setFavorites(newFavorites);
  };

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];

    const newFavorites = oldFavorites.filter((book) => book.id !== id);

    setFavorites(newFavorites);
  };

  return (
    <AppContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

import AboutUs from "./components/AboutUs";
import BookDetail from "./components/BookDetail";
import BookList from "./components/BookList";
import ContactUs from "./components/ContactUs";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

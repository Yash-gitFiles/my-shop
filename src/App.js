import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import store from "./redux/store";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import ProcessToBuy from "./pages/ProcessToBuy";
import Wishlist from "./pages/Wishlist";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState(0);

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  const toggleClose = () => setIsOpen(!isOpen);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                toggleClose={toggleClose}
                isOpen={isOpen}
                query={query}
                setQuery={setQuery}
                setPrice={setPrice}
                price={price}
                handlePriceChange={handlePriceChange}
              />
            }
          >
            <Route
              index
              element={
                <Home
                  toggleClose={toggleClose}
                  isOpen={isOpen}
                  query={query}
                  setQuery={setQuery}
                  price={price}
                />
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="cart" element={<Cart />} />
            <Route path="processToBuy" element={<ProcessToBuy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

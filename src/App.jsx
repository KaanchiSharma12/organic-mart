import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Wishlist from "./components/Wishlist/Wishlist";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./context/CartContext";
import Checkout from "./pages/Checkout/Checkout";


function App() {

  return (

    <CartProvider>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route 
            path="/product/:id" 
            element={<ProductDetails />} 
          />

          <Route 
            path="/wishlist" 
            element={<Wishlist />} 
          />

          <Route 
            path="/cart" 
            element={<Cart />} 
          />

          <Route 
            path="/signup" 
            element={<Signup />} 
          />

          <Route 
            path="/login" 
            element={<Login />} 
          />

          <Route 
            path="/checkout" 
            element={<Checkout/>}
          />

        </Routes>

      </BrowserRouter>

    </CartProvider>

  );
}

export default App;
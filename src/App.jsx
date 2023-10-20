import Nav from "./Components/Nav";
import Footer from "./sections/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ScrollRouter from "./Components/ScrollRouter";
import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import WishList from "./pages/WishList";
import ProductDetails from "./pages/productDetails";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <main className="relative">
      <BrowserRouter scrollToTop={true}>
        <Nav />
        <ScrollRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/:id?" element={<ProductDetails />} />
          </Routes>
        </ScrollRouter>

        <Footer />
      </BrowserRouter>
    </main>
  );
}

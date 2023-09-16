import Nav from "./Components/Nav";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import SuperQuality from "./sections/SuperQuality";
import Suscribe from "./sections/Suscribe";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <div className="px-8 lg:px-24">
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
        <CustomerReviews />
        <Suscribe />
      </div>
      <Footer />
    </main>
  );
}

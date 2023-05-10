import "./App.css";
import Blog from "./Components/Blogs/Blog";
import Testimonial from "./Components/Testimonials/Testimonial";
import Map from "./Components/Map/Map";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import Bussiness from "./Components/Bussiness/Bussiness";
import WhyUs from "./Components/whyUs/WhyUs";
import Research from "./Components/research/Research";

import Header from "./Components/header/Header";
import Main from "./Components/main/Main";

function App() {
  return (

    <div class="theFirm">
      <Header />
      <Main />
      <Bussiness />
      <WhyUs />
      <Research />
      <Blog />
      <Testimonial />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

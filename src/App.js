import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.min.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
// import AppLoader from "./components/AppLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Homepage/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import ServiceDetails from "./pages/Services/ServiceDetailsPage/ServiceDetails";

function App() {
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    window.pageYOffset > 70 ? setSticky(true) : setSticky(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      {/* <React.Suspense fallback={<AppLoader />}> */}
      <ScrollToTop />
      <Header sticky={isSticky} />
      <Helmet>
        <title>DigiSurf | Australia</title>
        <meta name="description" content="Get all your IT related work done" />
        <meta
          name="keywords"
          content="IT Services, Web Development, Graphic Designing, ERP Development, Digital Marketing, Mobile App Development, DevOps"
        />
        <link rel="canonical" href="https://digisurfaustralia.com.au/" />
      </Helmet>
      {/* <ToastContainer theme="colored" /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:slug" element={<ServiceDetails />} />
      </Routes>
      <Footer />
      {/* </React.Suspense> */}
    </div>
  );
}

export default App;

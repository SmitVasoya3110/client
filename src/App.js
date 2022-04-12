import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
// import AppLoader from "./components/AppLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Homepage/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import ServiceDetails from "./pages/Services/ServiceDetailsPage/ServiceDetails";
import BlogsList from "./pages/Blogs/BlogsList";
import My404Component from "./components/My404Component";
import './accordian.css';

function App() {

  useEffect(() => {
    return () => {
    };
  }, []);

  const [isSticky, setSticky] = useState(false);
  
  const handleScroll = () => {
    window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      {/* <React.Suspense fallback={<AppLoader />}> */}
      <ScrollToTop />
      <Header sticky={isSticky}/>
      <Helmet>
        <title>DigiSurf | Australia</title>
        <meta name="description" content="Integrating Technology With Strategies | We Design a unique brand identity| Web Development , ERP/CRM Development, Mobile App Development, DevOps, Graphic Designing, Digital Maketing" />
        <meta
          name="keywords"
          content="IT Services, Web Development, Graphic Designing, ERP Development, Digital Marketing, Mobile App Development, DevOps"
        />
        <link rel="canonical" href="https://digisurfaustralia.com.au/" />
      <meta property="og:url"                content="https://digisurfaustralia.com.au" />
      <meta property="og:type"               content="Website" />
      <meta property="og:title"              content="DIGISURF | AUSTRALIA" />
      <meta property="og:description"        content="Integrating Technology With Strategies | We Design a unique brand identity" />
      <meta property="og:image"              content="https://digisurfaustralia.com.au/assets/Images/WEB-DEVPT-SERVICE.png" />
      
      <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" max-age = "3600" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:site" content="@DIGISURF | AUSTRALIA"/>
      <meta name="twitter:title" content="DIGISURF | AUSTRALIA"></meta>
      <meta name="twitter:description" content="Integrating Technology With Strategies | We Design a unique brand identity| Web Development , ERP/CRM Development, Mobile App Development, DevOps, Graphic Designing, Digital Maketing"/>
      <meta name="twitter:creator" content="@DIGISURF | AUSTRALIA"/>
      <meta name="twitter:image" content="%PUBLIC_URL%/assets/Images/WEB-DEVPT-SERVICE.png"></meta>   
      </Helmet>
      {/* <ToastContainer theme="colored" /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogsList />} />
        <Route path="/:slug" element={<ServiceDetails />} />
        <Route path="/blogs/:slug" />
        <Route path='*' exact={true} element={My404Component} /> 
      </Routes>
      <Footer />
      {/* </React.Suspense> */}
    </div>
  );
}
export default App;



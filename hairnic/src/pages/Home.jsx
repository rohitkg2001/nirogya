import React, { useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import Hero from "../components/Hero";
import Product from "../components/Product";
import HowToUse from "../components/HowToUse";
import CartProduct from "../components/CartProduct";
import Testimonial from "../components/Testimonial";
import BlogArticle from "../components/BlogArticle";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import DealsOfTheDay from "../components/DealsOfTheDay";
import Features from "../components/Features";
import About from "../components/About";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/actions";

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchProds = async () => {
      await dispatch(getProducts())
    }
    fetchProds()
  }, [])

  return (
    <>
      <MyNavbar />
      <Hero />
      <Features />
      <About />
      <DealsOfTheDay />
      <Product />
      <HowToUse />
      <CartProduct />
      <Testimonial />
      <BlogArticle />
      <Contact />
      <Footer />
    </>
  );
}

import React from 'react';

// Importing main components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>

    {/* LOADER */}
    <Loader/>

    {/* HEADER */}
    <Header/>
      {/*<div className="overlay-noise"></div>*/}
      {children}
    <Footer/>
    </div>
    );
  };
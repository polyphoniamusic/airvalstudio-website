// Importing Dependencies //
import React from 'react';
import Head from "next/head";


// Importing components
import Hero from "./components/Hero";
import Réalisations from "./components/Réalisations";
import Services from "./components/Services";
import Matériel from "./components/Matériel";

export function Home() {

  return (
        <div className="main">
            <Head>
                <title>Airval Studio — Studio d'enregistrement à côté d'Angers</title>
                <meta name="description" content="Le airval studio est un studio d'enregistrement basé à Rochefort-sur-Loire, à côté d'Angers dans le maine et loire."></meta>
                <link rel="icon" href="/favicon.ico" />
                <meta name="facebook-domain-verification" content="" />
            </Head>

            {/* COMPONENTS */}
            <Hero/>
            <Réalisations/>
            <Services/>
            <Matériel/>
            {/*<Contact/>*/}
        </div>
  )
}

export default Home;
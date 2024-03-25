// Importing Dependencies //
import React from 'react';
import Head from "next/head";

// Importing components
import Legal from "./components/Legal";

export function Home() {

  return (
        <div className="main">
            <Head>
                <title>Airval Studio — CGV</title>
                <meta name="description" content="Le airval studio est un studio d'enregistrement basé à Rochefort-sur-Loire."></meta>
                <link rel="icon" href="/favicon.ico" />
                <meta name="facebook-domain-verification" content="" />
            </Head>
            <Legal/>
        </div>
  )
}

export default Home;
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
                <meta name="description" content="This is blurblur's official website. blurblur is a french singer, songwriter and record producer renowned for his sensual and captivating voice. His music is a blend of pop, electronic, and R&B influences."></meta>
                <link rel="icon" href="/favicon.ico" />
                <meta name="facebook-domain-verification" content="" />
            </Head>
            <Legal/>
        </div>
  )
}

export default Home;
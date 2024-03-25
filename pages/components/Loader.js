// Importing Dependencies //
import React from "react";
import Image from 'next/image';

// Importing Images SRC
import AirvalLogoWhite from '../../content/images/logos/airval-logo-white.svg';

export function Loader() {;

  return (
    <section className="loader" id="loader">
        <Image className="loader-logo" alt="Airval Logo White" src={AirvalLogoWhite}/>
    </section>
  );
}

export default Loader;
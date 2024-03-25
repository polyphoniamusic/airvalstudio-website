import React from 'react';

// Importing Google Fonts
import {  Cormorant_Garamond  } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-main',
  weight: ['500']
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cormorant.variable}`}>
      <div className="overlay-noise"></div>
      {children}
    </div>
    );
  };
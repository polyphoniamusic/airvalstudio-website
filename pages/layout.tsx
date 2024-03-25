import React from 'react';

// Importing Google Fonts
import {  Space_Grotesk  } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
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
    <div className={`${spaceGrotesk.className}`}>
      <div className="overlay-noise"></div>
      {children}
    </div>
    );
  };
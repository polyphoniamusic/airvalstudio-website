import React from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="overlay-noise"></div>
      {children}
    </div>
    );
  };
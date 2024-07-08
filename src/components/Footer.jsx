import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 text-center">
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-white text-lg font-semibold">Developed by Belicks</h1>
      </div>
      <p className="text-white text-sm">&copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;

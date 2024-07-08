import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 text-center">
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-white text-sm text-tighter ">Developed by Belicks  &copy; {currentYear}</h1>
      </div>
     
      
    </footer>
  );
};

export default Footer;

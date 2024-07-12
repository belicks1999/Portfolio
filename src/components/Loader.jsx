// components/Loader.js
import React from 'react';
import Loader from 'react-js-loader';

const Loaders = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50">
      <Loader
        type="bubble-top"
        bgColor="#f1f1f1"
        size={100}
      />
    </div>
  );
};

export default Loaders;

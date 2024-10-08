// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Download from './components/Download';
import Loaders from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after some time (replace with your actual loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 z-[-10] h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-16">
        {loading ? (
          
          <Loaders className="justify-center items-center" /> 
         
        ) : (
          <>
            <Navbar />
            <Hero />
            <About />
            <Technology />
            <Project />
            <Contact />
            <Download />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;

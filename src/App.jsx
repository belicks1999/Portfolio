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
      {/* Background elements */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[-10]"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      
      {/* Main content */}
      <div className="relative h-full">
        {loading ? (
          <Loaders />
        ) : (
          <div className="container mx-auto px-16  h-full">
            <Navbar />
            <Hero />
            <About />
            <Technology />
            <Project />
            <Contact />
            <Download />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

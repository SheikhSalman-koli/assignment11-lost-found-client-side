import React, { useEffect, useState } from 'react';
import notFound from '../assets/404-landing-page-free-vector.jpg'
import { Link } from 'react-router';

const NotFound = () => {

    useEffect(() => {
        document.title = "404 page";
    }, []);
      
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

    return (
      <div
      className={`min-h-screen flex flex-col justify-between  mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900
        transition-opacity duration-700 ease-in-out
        ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-12 flex-grow">
        {/* Text block */}
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-6xl font-extrabold text-red-600 mb-6 select-none animate-bounce">
            Oops!
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">
            We can't seem to find the page you are looking for.
          </h2>
        </div>

        {/* Image block */}
        <div className="max-w-[450px] w-full flex justify-center md:justify-end">
          <img
            src={notFound}
            alt="Page not found"
            className="w-full h-[280px] object-contain drop-shadow-lg rounded-lg
              transition-transform duration-700 ease-in-out
              hover:scale-105"
          />
        </div>
      </div>

      {/* Button fixed below content */}
      <div className="mt-14 flex justify-center">
        <Link
          to="/"
          className="btn bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-10 py-3 rounded-full shadow-lg
            transform transition-transform duration-300 hover:scale-105"
        >
          Go Home
        </Link>
      </div>
    </div>
    );
};

export default NotFound;
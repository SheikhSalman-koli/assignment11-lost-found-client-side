import React, { useEffect } from 'react';
import notFound from '../assets/404-landing-page-free-vector.jpg'
import { Link } from 'react-router';

const NotFound = () => {

    useEffect(() => {
        document.title = "404 page";
    }, []);

    return (
        <div className="min-h-screen flex flex-col px-6 py-16 bg-gray-50 dark:bg-gray-900">
      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-12 flex-grow">
        {/* Text block */}
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-6xl font-extrabold text-red-600 mb-6 select-none">
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
            className="w-full h-[280px] object-contain drop-shadow-lg rounded-lg"
          />
        </div>
      </div>

      {/* Button fixed below content */}
      <div className="mt-14 flex justify-center">
        <Link
          to="/"
          className="btn bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-10 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Go Home
        </Link>
      </div>
    </div>
    );
};

export default NotFound;
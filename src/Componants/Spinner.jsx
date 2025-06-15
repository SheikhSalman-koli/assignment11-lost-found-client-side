import React from 'react';

const Spinner = () => {
    return (
        <div className='text-center my-10'>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default Spinner;
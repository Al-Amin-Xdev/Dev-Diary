import React from 'react';

const Title = ({ children }) => {
    return (
        <div className="my-6 text-center">
            <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
                {children}
            </h1>
        </div>
    );
};

export default Title;
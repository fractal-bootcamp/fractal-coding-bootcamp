import React from 'react';

const Jaron = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Jaron's Personal Page</h1>
        <p className="text-lg text-gray-800">
          Welcome to my personal page! Here's what's keeping me busy nowadays.
        </p>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Current Interests</h2>
          <ul className="list-disc pl-4">
            <li>Learning to Code</li>
            <li>Triathlon training</li>
            <li>Strength training</li>
            <li>Learning how to learn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jaron;

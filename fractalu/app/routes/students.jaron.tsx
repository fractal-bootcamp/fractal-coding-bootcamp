import React from 'react';
const ThemeToggle = () => {
  return <label className="cursor-pointer grid place-items-center">
    <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
  </label>
}

const Jaron = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <ThemeToggle />
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
          <h2 className="text-xl font-semibold mb-2">Favorite Books</h2>
          <ul className="list-disc pl-4">
            <li>Man's Search for Meaning</li>
            <li>Meditations</li>
            <li>3 Body Problem</li>
            <li>Atomic Habits</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jaron;

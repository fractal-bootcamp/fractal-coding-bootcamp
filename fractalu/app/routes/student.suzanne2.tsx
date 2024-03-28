import React from 'react';
import 'daisyui/dist/full.css'; // Import the full CSS file including all themes
// or import specific themes like 'daisyui/dist/...'

const MyComponent: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <button className="btn btn-primary">Primary Button</button>
      <button className="btn btn-secondary">Secondary Button</button>
    </div>
  );
};

export default MyComponent;
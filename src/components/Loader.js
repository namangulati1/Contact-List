import React from 'react';
import '../styles/loader.css'; // Create a separate CSS file for styling the loader (Loader.css)

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
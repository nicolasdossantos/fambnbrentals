import React from 'react';
import '../style/ComingSoon.css'; // Assuming you have an external CSS for styling
import FamBnbLogo from '../photos/general/fambnb.png';

const ComingSoon = () => {
  return (
    <div className="coming-soon">
        <img src={FamBnbLogo} alt="logo" className="logo" />
        <div className="description-font text">Coming Soon!</div>
        </div>
  );
};

export default ComingSoon;

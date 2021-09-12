import React from 'react';

const Button = ({ onClick }) => {
  return (
    <div className="d-grid col-6 mx-auto p-4">
      <button onClick={onClick} 
              className="btn btn-info text-uppercase text-white">
                Get meal 🍔
      </button>
    </div>
  );
};

export default Button;


 
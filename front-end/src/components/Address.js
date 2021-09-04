import React from "react";
import './address.css'
function Address({ street, postNumber, city }) {
  return (
    <div className='card'>
      <p>Street: <strong>{street}</strong></p>
      <p>Post Number: <strong>{postNumber}</strong></p>
      <p>City: <strong>{city}</strong></p>
    </div>
  );
}

export default Address;

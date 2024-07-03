
import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessComponent = () => {
  const { state } = useLocation();
  const formData = state || {};

  return (
    <div>
      <h1>Form Submitted Successfully!</h1>
      <h2>Submitted Details:</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Phone No: {formData.phoneNo}</p>
      <p>Country: {formData.country}</p>
      <p>City: {formData.city}</p>
      <p>PAN No: {formData.panNo}</p>
      <p>Aadhar No: {formData.aadharNo}</p>
    </div>
  );
};

export default SuccessComponent;

import React from 'react';

const InvisibleComponent = ({ formData }) => {
  return (
    <div style={{ width: '210mm', height: '297mm' }}> {/* A4 size */}
      {/* Format your form data for the PDF here */}
      <h1>{formData.guestFirstName}</h1>
      {/* ... more fields */}
    </div>
  );
};

export default InvisibleComponent;
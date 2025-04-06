import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const CenteredSpinner = () => {
  const spinnerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
    <div></div>
    <div style={spinnerContainerStyle}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
    </>
  );
}

export default CenteredSpinner;

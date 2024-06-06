import React from 'react';

const CurrentDate = () => {
  const today = new Date();
  const date = today.toDateString();

  return (
    <div>
      <h2>Today's Date:</h2>
      <p>{date}</p>
    </div>
  );
};

export default CurrentDate;

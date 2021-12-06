import React from 'react';

const RandomList = ({ counter }) => {
  function generateNumbers() {
    return Math.trunc(Math.random() * 100);
  }

  if (counter === 0) {
    return null;
  }

  let newArray1 = new Array(counter).fill(0);

  //   let newArray2 = Array.from({ length: counter }, (v, k) => (k = 0));

  return (
    <ul>
      {newArray1.map((el, index) => (
        <li key={index}>{el + generateNumbers()}</li>
      ))}
    </ul>
  );
};

export default RandomList;

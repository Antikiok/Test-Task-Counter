import React from 'react';

const Counter = ({ counter, resetCounter }) => {
  return (
    <div className="counter">
      <span className="counter__value">{counter}</span>
      <button onClick={() => resetCounter()}>Сброс</button>
    </div>
  );
};

export default Counter;

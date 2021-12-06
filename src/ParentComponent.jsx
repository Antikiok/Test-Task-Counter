import React, { useState } from 'react';
import Counter from './Counter.jsx';
import RandomList from './RandomList.jsx';

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);

  const resetCounter = () => {
    return setCounter(0);
  };

  console.log();

  return (
    <div>
      <button onClick={increaseCounter}>Инкрементировать</button>
      <Counter counter={counter} resetCounter={resetCounter} />
      <RandomList counter={counter} />
    </div>
  );
};

export default ParentComponent;

import React, { useState } from 'react';

const MAX_LIFE = 100;

const Battle = ({ icone, name, strength, parade }) => {
  const [life, setLife] = useState(MAX_LIFE);

  const handleFight = () => {
    const attPoints = getRandomInt(strength);
    const impact = Math.max(attPoints - parade, 0);
    setLife(prevLife => prevLife - impact);
  }

  const getRandomInt = (force) => {
    return 1 + Math.floor(Math.random() * force);
  }

  return (
    <div>
      <div>{icone}</div>
      <div>{name}</div>
      <div>{strength}</div>
      <div>{parade}</div>
      <div>{life}</div>
      <button onClick={handleFight}>Fight</button>
    </div>
  );
}

export default Battle;
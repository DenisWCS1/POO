import React, { useState } from 'react';
import Fighters from './Fighters';

const Battle = () => {
  const [fighter1, setFighter1] = useState(Fighters[0]);
  const [fighter2, setFighter2] = useState(Fighters[1]);
  const [rounds, setRounds] = useState([]);
  const [round, setRound] = useState(1);
  const [isFight, setIsFight] = useState(false);

  {/********récupération de la selection des combattants*******/ }
  // selection fighter1
  const handleSelectFighter1 = (e) => {
    console.log("fighter1", fighter1)
    console.log("fighter target", Fighters[e.target.value])
    console.log("target", e.target.value)
    setFighter1(Fighters[e.target.value]);
  }

  // selection fighter2
  const handleSelectFighter2 = (e) => {
    const fighter2select = Fighters[e.target.value];
    setFighter2(fighter2select);
  }

  /******** Combat *******/
  const handleFight = () => {
    setIsFight(true);

    // Impact aléatoire
    const getRandomInt = (force) => {
      return 1 + Math.floor(Math.random() * force);
    }
    // combat avec fighter1
    const attPoints1 = getRandomInt(fighter1.strength);
    const impact1 = Math.max(attPoints1 - fighter1.parade, 0);
    // combat avec fighter2
    const attPoints2 = getRandomInt(fighter2.strength);
    const impact2 = Math.max(attPoints2 - fighter2.parade, 0);
    const variable = {
      round: round,
      fighter1: {
        ...fighter1,
        impact: impact1,
      },
      fighter2: {
        ...fighter2,
        impact: impact2,
      }
    }

    // tableau avec les fighters selectionnés
    setRounds([...rounds, variable])
    setRound(round + 1)
  }
  // console.log("fighter1", fighter1)
  // console.log("fighter2", fighter2)
  console.log(rounds)
  return (
    <div>
      {/********selection des combattants*******/}
      <div>
        <select value={fighter1.name} onChange={handleSelectFighter1} >
          {Fighters.map((fighter, i) => (
            <option key={i} value={i}>{fighter.icone}{fighter.name}</option>
          ))}
        </select>
      </div>
      <div>
        <select value={fighter2.name} onChange={handleSelectFighter2} >
          {Fighters.map((fighter, i) => (
            <option key={i} value={i}>{fighter.icone}{fighter.name}</option>
          ))}
        </select>
      </div>
      {/********rendu*******/}
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Combattant 1</th>
            <th>Dégâts infligés</th>
            <th>PV restants</th>
            <th>Combattant 2</th>
            <th>Dégâts infligés</th>
            <th>PV restants</th>
          </tr>
        </thead>
        <tbody>
          {isFight && rounds.length > 0 && rounds.map((round, i) => (
            <tr key={i}>
              <td>{round.round}</td>
              <td>{round.figther1.icone}{round.figther1.name}</td>
              <td>{round.figther1.impact}</td>
              <td>{round.figther1.life}</td>
              <td>{round.figther2.icone}{round.figther2.name}</td>
              <td>{round.figther2.impact}</td>
              <td>{round.figther2.life}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleFight}>Fight</button>
      </div>
    </div >
  );
}

export default Battle;
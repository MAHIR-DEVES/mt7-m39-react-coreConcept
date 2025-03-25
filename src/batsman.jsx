import { useState } from 'react';

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const hendelSingle = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };
  const hendelSix = () => {
    const updateRuns = runs + 6;
    const updateSixs = sixes + 1;
    setSixes(updateSixs);
    setRuns(updateRuns);
  };
  return (
    <div>
      <h3>Player:Bangladeshi Batsman</h3>
      {runs > 50 && <p>Congratulation Your Score 50++ </p>}
      <p>
        <small>Six : {sixes}</small>
      </p>
      <h1>Score: {runs}</h1>
      <button onClick={hendelSingle}>Singles</button>
      <button>Fure</button>
      <button onClick={hendelSix}>Six</button>
    </div>
  );
}

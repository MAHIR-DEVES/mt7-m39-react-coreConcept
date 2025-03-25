import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const hendelAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const counterStyle = {
    border: '4px solid red',
  };
  return (
    <div style={counterStyle}>
      <h3>Count:{count}</h3>
      <button onClick={hendelAdd}>Add</button>
    </div>
  );
}

import './App.css';
import Counter from './counter';
import Batsman from './batsman';

function App() {
  function hendelClick() {
    alert('im clicked');
  }

  const hendelClick3 = () => {
    alert('clicked3');
  };

  const hendelAdd5 = num => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h2>Vite + React</h2>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={hendelClick}>Click Me</button>
      <button
        onClick={function hendelClick2() {
          alert('clicked 22');
        }}
      >
        Click Me 2
      </button>
      <button onClick={hendelClick3}>Click Me 3</button>
      <button onClick={() => alert('click 4')}>Click Me 4</button>
      {/* <button onClick={hendelAdd5(4)}>click add 5</button> */}
      <button onClick={() => hendelAdd5(20)}>click add 5</button>
    </>
  );
}

export default App;

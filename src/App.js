import './App.css';
import { useState } from 'react';

function App() {

  const [ oneScore, setOneScore ] = useState(0);
  const [ twoScore, setTwoScore ] = useState(0);

  return (
    <div className="App">
      <h1>
        react-score
      </h1>
      <main>
        <div>          
          <p class="score">{oneScore}</p>
          <h2>Team 1</h2>
          <button class="btn inc" name="1" onClick={() => setOneScore(oneScore + 1)}> ++ </button>
          <button class="btn dec" name="1" onClick={() => setOneScore(oneScore - 1)}> -- </button>
        </div>
        <div>
          <p class="score">{twoScore}</p>
          <h2>Team 2</h2>
          <button class="btn inc" name="2" onClick={() => setTwoScore(twoScore + 1)}> ++ </button>
          <button class="btn dec" name="2" onClick={() => setTwoScore(twoScore - 1)}> -- </button>
        </div>     
      </main>
    </div>
  );
}

export default App;

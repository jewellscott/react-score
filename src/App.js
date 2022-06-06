import './App.css';
import { useState } from 'react';

function App() {

  const [ score, setScore ] = useState(0);
  
  return (
    <div className="App">
      <h1>
        react-score
      </h1>
      <main>
        <div>          
          <p class="score">{ score }</p>
          <h2>Team 1</h2>
          <button class="btn inc" name="1" onClick={setScore}> ++ </button>
        </div>
        <div>
          <p class="score">{ score }</p>
          <h2>Team 2</h2>
          <button class="btn inc" name="2" onClick={setScore}> ++ </button>
        </div>     
      </main>
    </div>
  );
}

export default App;

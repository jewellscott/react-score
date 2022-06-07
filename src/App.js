import './App.css';
import Team from './components/Team';

function App() {

  return (
    <div className="App">
      <h1>
        react-score
      </h1>
      <main>
        <Team name="Team 1"></Team>
        <Team name="Team 2"></Team>
      </main>
    </div>
  );
}

export default App;

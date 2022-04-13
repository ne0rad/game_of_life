import { GameBox, Title, Controls, GameGrid } from './components';
import './styles/App.css';

function App() {
  return (
    <div id="main">
      <Title />
      <Controls />
      <GameBox>
        <GameGrid />
      </GameBox>
    </div>
  );
}

export default App;

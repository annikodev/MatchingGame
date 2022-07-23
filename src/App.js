import './components/globalcss.module/global.scss'
import MyBlock from "./components/UI/MyBlock/MyBlock";
import GameField from "./components/UI/GameField/GameField";

function App() {
  return (
    <div className="App">
        <MyBlock>Matching Game</MyBlock>
        <MyBlock>Settings</MyBlock>
        <GameField></GameField>
    </div>
  );
}

export default App;

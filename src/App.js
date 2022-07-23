import './components/globalcss.module/global.scss'
import MyBlock from "./components/UI/MyBlock/MyBlock";
import GameField from "./components/UI/GameField/GameField";

function App() {
    const randomArray= (arr) => {
        return arr.sort(()=>Math.random()-0.5)
    }
    let gameArray = randomArray([
        {item:'+', visible: false},
        {item:'+', visible: false},
        {item:'-', visible: false},
        {item:'-', visible: false},
        {item:'*', visible: false},
        {item:'*', visible: false},
        {item:'@', visible: false},
        {item:'@', visible: false},
        {item:'$', visible: false},
        {item:'$', visible: false},
        {item:'~', visible: false},
        {item:'~', visible: false},
        {item:'=', visible: false},
        {item:'=', visible: false},
        {item:'#', visible: false},
        {item:'#', visible: false},
    ])

  return (
    <div className="App">
        <MyBlock>Matching Game</MyBlock>
        <MyBlock>Settings</MyBlock>
        <GameField gamearray={gameArray}></GameField>
    </div>
  );
}

export default App;

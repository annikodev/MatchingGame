import './components/globalcss.module/global.scss'
import MyBlock from "./components/UI/MyBlock/MyBlock";
import GameField from "./components/UI/GameField/GameField";
import {Checkbox} from "@mui/material";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import {LightMode} from "@mui/icons-material";
import {useTheme} from "./components/hooks/useTheme";

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

    const {theme, setTheme} = useTheme()

  return (
    <div className="App">
        <MyBlock>Matching Game</MyBlock>

        <GameField gamearray={gameArray}></GameField>
    </div>
  );
}

export default App;

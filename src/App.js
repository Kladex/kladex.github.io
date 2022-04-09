import "./App.css";
import "./navigator/navigator-box.css";
import "./main/main.css";
import NavigatorBox from "./navigator/navigator-box";
import useMatchInfo from "./Hooks/useMatchinfo";
import Main from "./main/main";

function App() {
  const { showInfo, clicked } = useMatchInfo();
  return (
    <div className="App">
      <NavigatorBox clicked={clicked} />
      <Main showInfo={showInfo} />
    </div>
  );
}

export default App;

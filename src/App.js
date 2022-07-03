import Canvas from "./components/Canvas";
import SettingBar from "./components/SettingBar";
import Toolbar from "./components/Toolbar";
import "./styles/app.scss"

function App() {
  return (
    <div className="App">
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
}

export default App;

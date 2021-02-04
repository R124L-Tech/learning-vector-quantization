import './App.css';
import Header from './components/Header'
import { train, test } from './components/lvq'
import FullWidthTabs from "./components/Tabs";

function App() {

  const inputs = [
    [[1, 1, 0, 0, 1, 0], 1],
    [[0, 1, 1, 0, 1, 0], 1],
    [[0, 0, 1, 0, 0, 1], 2],
    [[0, 0, 1, 1, 1, 0], 1],
    [[0, 1, 0, 0, 0, 1], 2],
    [[1, 0, 1, 0, 1, 1], 2],
    [[0, 0, 1, 1, 0, 0], 1],
    [[1, 1, 0, 1, 0, 0], 1],
    [[1, 0, 0, 1, 0, 1], 2],
    [[0, 1, 1, 1, 1, 1], 1],
  ]
  const a = 0.04

  return (
    <div className="App">
      <Header title="LVQ-Rizal Iswandy" />
      <FullWidthTabs />
    </div>
  );
}

export default App;

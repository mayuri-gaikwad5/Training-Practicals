import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Coin from './features/coin/Coin';
import Theme from './features/theme/Theme';
function App() {
  
  return (
    <div className="App">
      <Counter />
      <Coin />
      <Theme />
    </div>
  );
}

export default App;

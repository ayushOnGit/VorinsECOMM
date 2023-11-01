import logo from './logo.svg';
import './App.css';
import NAV from './Customer/Navigations/Nav';

import Home from './Customer/Pages/HomePage/Home';

function App() {
  return (
    <div className="App">
      <NAV/>
      <div>
        <Home/>
      </div>
    </div>
  );
}

export default App;

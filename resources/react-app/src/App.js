import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Rotate from './routing/Rotate'
function App() {
    return ( <>
    <div className="App">
    <BrowserRouter>
      <Rotate />
    </BrowserRouter>
    </div></>
  );
}

export default App;

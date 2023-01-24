import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header';
import Rotate from './routing/Rotate'
function App() {
  return (<>
    <BrowserRouter>
      <Rotate />
    </BrowserRouter>
  </>
  );
}

export default App;

import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import login from './components/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route path='/' Component={login} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

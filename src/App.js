import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import login from './components/Login'
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route path='/Login' Component={login} />
        <Route path='/' Component={HomePage} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './pages/sidebar';
import Home from './pages/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/sidebar" element={ <Sidebar /> }/>
          <Route path="*" element={ (<p>Path not found</p>) }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './pages/sidebars/sidebar';
import Home from './pages/home';
import Accordion from './pages/accordions/accordion';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/sidebar" element={ <Sidebar /> }/>
          <Route path="/accordion" element={ <Accordion /> }/>
          <Route path="*" element={ (<p>Path not found</p>) }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

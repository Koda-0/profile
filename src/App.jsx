
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Index.jsx';
import Login from './Login.jsx';
import Dash from './Dash.jsx';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<Login />} />
        <Route path='/Index' element={<Index/>}></Route>
        <Route path='/Dash' element={<Dash/>}></Route>
      </Routes>
    </Router>
  );
}

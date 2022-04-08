import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
    <Route path="/Home" element={<Home></Home>}></Route>
    <Route path="/LOgin" element={<Login></Login>}></Route>
  
    </Routes>
    </div>
  );
}

export default App;

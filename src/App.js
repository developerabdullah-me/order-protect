import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
    <Route path="/Home" element={<Home></Home>}></Route>
    <Route path="/LOgin" element={<Login></Login>}></Route>
    <Route path="/Register" element={<Register></Register>}></Route>
  
    </Routes>
    </div>
  );
}

export default App;

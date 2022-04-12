import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Order from './Component/Order.jsx/Order';
import Requir from './Component/Requir';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
    <Route path="/Home" element={<Home></Home>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/Register" element={<Register></Register>}></Route>
    <Route path="/order" element={
   <Requir> <Order></Order></Requir>
    }></Route>
  
    </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Home from './screen/Home/Home'
import Contact from'./screen/Contact/contact'
import Statistics from './screen/Statistics/statistics'
import "./components/Navbar/navbar.css"
import Temperature from './components/Temperature/Temperature';
import CO2 from './components/CO2/Co2'
import Methane from './components/Methane/Methane'
import NO2 from './components/NO2/No2'
import Glacier from './components/Glacier/Glacier'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"



function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/statistics' element={<Statistics></Statistics>}></Route>
        <Route path='/temperature' element={<Temperature></Temperature>}></Route>
        <Route path='/co2' element={<CO2></CO2>}></Route>
        <Route path='/methane' element={<Methane></Methane>}></Route>
        <Route path='/no2' element={<NO2></NO2>}></Route>
        <Route path='/glacier' element={<Glacier></Glacier>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

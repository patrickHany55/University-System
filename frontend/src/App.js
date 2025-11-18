import logo from './logo.svg';
import './App.css';
import Navbar from './navbarcomponent/navbar';
import { Route,Routes } from 'react-router-dom';
import Homepage from './homepagecomponent/homepage'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './navbarcomponent/navbar';
import { Route,Routes } from 'react-router-dom';
import Homepage from './homepagecomponent/homepage'
import Curriculum from './curriculumcomponent/curriculumpage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Homepage/>} />
        <Route path='curriculum' element={<Curriculum/>}/>
      </Routes>
    </div>
  );
}

export default App;

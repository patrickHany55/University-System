import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './navbarcomponent/navbar';
import Login from './loginpagecomponent/loginpages';
import HomePage from './homepagecomponent/homepage';

function App() {
  const location = useLocation();

  // Show Navbar on all pages except login
  const showNavbar = location.pathname !== "/";

  return (
    <div className="App">
      {showNavbar && <Navbar />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Login />} />

        {/* Home page for all roles */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;




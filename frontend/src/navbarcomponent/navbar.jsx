import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="container">
            <div className='top-header'>
                <h1>Fox University</h1>
                <button className='applybutton'>Apply now</button>
            </div>

            <div className='nav-bar'>
                <NavLink 
                    to='/' 
                    style={({ isActive }) => ({
                        color: isActive ? '#ff6b35' : '#ffffff',
                        borderBottom: isActive ? '3px solid #ff6b35' : 'none',
                        paddingBottom: isActive ? '20px' : '0'
                    })}
                >
                    Home
                </NavLink>
                <NavLink 
                    to='/curriculum'
                    style={({ isActive }) => ({
                        color: isActive ? '#ff6b35' : '#ffffff',
                        borderBottom: isActive ? '3px solid #ff6b35' : 'none',
                        paddingBottom: isActive ? '20px' : '0'
                    })}
                >
                    Curriculum
                </NavLink> 
                <NavLink 
                    to='/facilities'
                    style={({ isActive }) => ({
                        color: isActive ? '#ff6b35' : '#ffffff',
                        borderBottom: isActive ? '3px solid #ff6b35' : 'none',
                        paddingBottom: isActive ? '20px' : '0'
                    })}
                >
                   Facilities
                </NavLink>
                <NavLink 
                    to='/staff'
                    style={({ isActive }) => ({
                        color: isActive ? '#ff6b35' : '#ffffff',
                        borderBottom: isActive ? '3px solid #ff6b35' : 'none',
                        paddingBottom: isActive ? '20px' : '0'
                    })}
                >
                    Staff
                </NavLink>
                  <NavLink 
                    to='/community'
                    style={({ isActive }) => ({
                        color: isActive ? '#ff6b35' : '#ffffff',
                        borderBottom: isActive ? '3px solid #ff6b35' : 'none',
                        paddingBottom: isActive ? '20px' : '0'
                    })}
                >
                    Community
                </NavLink>
            </div>
       
        </nav>
    );
};

export default Navbar;
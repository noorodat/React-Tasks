import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    const styles = {
        'display' : 'flex',
        'gap' : '10px',
        'listStyle': 'none',
    }

    return(
        <nav>
            <ul style={styles}>
                <li>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/register'}>
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar;
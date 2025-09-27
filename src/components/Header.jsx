import Logo from '../assets/images/logo.png';
import './Header.css';
import { NavLink } from 'react-router'

export function Header() {
  return (
    <div className="header">
      <img src={Logo} className="logo-img" />
      <div className='header-middle-section'>
        <NavLink to="/" end
          className={({ isActive }) => (
            isActive ? "active" : ""
          )} >
          <div className="header-link">About amid</div>
        </NavLink>

        <NavLink to="/features"
          className={({ isActive }) => (
            isActive ? "active" : ""
          )}>
          <div className="header-link">Features</div>
        </NavLink>

        <NavLink to="/portfolio"
          className={({ isActive }) => (
            isActive ? "active" : ""
          )}>
          <div className="header-link">Portfolio</div>
        </NavLink>

        <NavLink to="/reviews"
          className={({ isActive }) => (
            isActive ? "active" : ""
          )}>
          <div className="header-link">Reviews</div>
        </NavLink>
      </div>

      <NavLink to="/login"
        className={({ isActive }) => (
          isActive ? "active-button" : ""
        )}>
        <button className="login-button">Login</button>
      </NavLink>

    </div>
  );
}
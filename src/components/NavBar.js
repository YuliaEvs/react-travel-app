import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { logOut } from '../utilities/users-service';
import './NavBar.css';

export default function NavBar ({ user, setUser }) {

    function handleLogOut() {
      logOut();
      setUser(null);
      // navigate('/');
    } localStorage.removeItem('token');

  return (

    <nav className='nav'>
      <div className='logo-container'>
        <img className='logo'src="/Images/logo.png" alt='logo'></img>
        <p>Best Trip</p>
      </div>
      <ul>
      <li><Link to="/home">Home</Link></li>
        <li>
          <Link to="/trips/history">Trips History</Link>
        </li>
        <li>
          <Link to="/trips/new">New Trip</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>

          <p>{`Hello ` + user?.name}</p>

        <li>
          <button className='out' onClick={handleLogOut}>Log Out</button>
        </li>
      </ul>
    </nav>
  )
}
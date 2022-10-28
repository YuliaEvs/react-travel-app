import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';

export default function NavBar (props) {
// const [show, setShow] = useState (true)
  return (

    <nav className='nav'>
      <div className='logo-container'>
        <img className='logo'src="/Images/logo.png" alt='logo'></img>
        <p>Best Trip</p>
      </div>
      <ul>
      <li><Link to="/home">Home</Link></li>
        <li>
          <Link to="/trips">Trips History</Link>
        </li>
        <li>
          <Link to="/trips/new">New Trip</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>

          <p>{`Hello ` + props?.user?.name}</p>

        <li>
          <button className='out' onClick={() => {
          localStorage.removeItem('token');
          props.setUser(null);
          }}>Log Out</button>
        </li>
      </ul>
    </nav>
  )
}
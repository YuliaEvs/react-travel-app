import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { Link, useNavigate  } from 'react-router-dom';
import './LoginForm.css';

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');
const navigate = useNavigate();

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    setUser(user);

  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div className='login-container'>
    <div className="form-container" onSubmit={handleSubmit}>
      <form className='form-login'autoComplete="off" >
        <label>Email</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button className='loginbtn' type="submit">LOG IN</button>
      </form>
      <p>
        Need an Account ?<br/>
          <Link to='/signup'>Create New Account</Link>
        </p>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  </div>
);
}
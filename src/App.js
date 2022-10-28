import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import { Routes, Route  } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import Home from './components/Home/Home';
import TripList from './components/TripsHistory/TripsHistory';
import NewTrip from './components/NewTrip/NewTrip';
import Explore from './components/Explore/Explore';
import SignUpForm from './components/SingUpForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  // eslint-disable-next-line 
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        user ?
        <>         
           <NavBar setUser={setUser} user={user}  />
             <Routes>
              <Route path="/home" element={<Home setUser={setUser} />} />
              <Route path="/trips" element={<TripList />} />
              <Route path="/trips/new" element={<NewTrip />} />
              <Route path="/explore" element={<Explore />} />
             </Routes>     
       </>
      :
  
        <Routes>
              <Route path="/" element={<LoginForm setUser={setUser} />} />
              <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
        </Routes>
      }
    </main>
  );
}

export default App;

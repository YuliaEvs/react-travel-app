// This is the base path of the Express route we'll define
import axios from 'axios';
const BASE_URL = '/api/users';

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData)
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT
    return res.json();
  } else {
    throw new Error('Invalid Sign Up');
  }
}


export async function login(userData) {
  const response = await axios.post(`${BASE_URL}/login`, userData)
  if (response.status === 200) {
    return response.data
  } else {
    throw new Error('Invalid Sign Up!')
  }
}





















// import axios from 'axios';
// const BASE_URL = '/api/users';

// export async function register(userData) {

//   const response = await axios.post(BASE_URL, userData)
//   if (response.status === 201) {
//     return response.data
//   } else {
//     throw new Error('Invalid Register!')
//   }
// }

// export async function logIn(userData) {
//   const response = await axios.post(BASE_URL + '/login', userData)
//   if (response.status === 200) {
//     return response.data
//   } else {
//     throw new Error('Invalid Log In!')
//   }
// }

// export async function getTrips(userData) {
//   const response = await axios.get(BASE_URL + '/trips', userData)
//   return response.data
// }
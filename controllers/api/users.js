const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const createJWT = (user) => {
  return jwt.sign(
    { user },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  )
}
  

// const create = (req, res) => {
//   User.create(req.body, (error, createdUser) => {
//     if (error) {
//       console.error(error);
//       res.status(400).json(error)
//     } else {
//       const token = createJWT(createdUser);
//       res.status(201).json({
//         jwt_token: token
//       })
//     }
//   });
// }
  async function create(req, res) {
    // Baby step...
    // res.json({
    //   user: {
    //     name: req.body.name,
    //     email: req.body.email
    //   }
    // });
    try {
      // Add the user to the database
      const user = await User.create(req.body);
       // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  
    } catch (err) {
      // Client will check for non-2xx status code
      // 400 = Bad Request
      res.status(400).json(err);
    }
  }

  const login = (req, res) => {
    User.findOne({ email: req.body.email }, async (error, foundUser) => {
      if (foundUser) {
        const result = await bcrypt.compare(req.body.password, foundUser.password)
        if (result) {
          const token = createJWT(foundUser);
          res.status(200).json({
            jwt_token: token
          })
        } else {
          res.status(401).json({
            error: 'incorrect password'
          })
        }
      } else {
        res.status(404).json({
          error: 'User Not Found!'
        })
      }
    })
  }

  module.exports = {
    create,
    login    
  };
const jwt = require('jsonwebtoken')

// Middleware to protect routes
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]

  if (!token) return res.status(401).json({ message: 'Access denied' })

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log('Error:', err)
    if (err) return res.status(403).json({ message: 'Invalid token' })
    console.log('User:', user)
    next()
  })
}

module.exports = {
  jwt,
  authenticateJWT,
}

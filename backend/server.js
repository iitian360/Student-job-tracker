const express = require('express')
const cors = require('cors')
require('dotenv').config()

const connectDB = require('./db/connect')
const jobRoutes = require('./routes/jobs')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/jobs', jobRoutes)

// Connect DB and start server
const PORT = process.env.PORT || 5000

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
})
  
    .catch(err => {
      console.error('❌ Failed to connect to MongoDB:', err.message)
      process.exit(1) // Exit process with failure
    })
const express = require('express')
const app = express()
const port = process.env.PORT || 3000  // This line uses the PORT environment variable

app.get('/', (req, res) => {
  res.send('Hello World from App Runner!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

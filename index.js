const express = require('express')
const app = express()
const port = 8080
const posts = require('./routes/posts')

app.use('/posts', posts);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
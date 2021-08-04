const express = require('express')
const app = express()
const port = 8080
const posts_comments = require('./routes/posts_comments')

app.use('/posts', posts_comments);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
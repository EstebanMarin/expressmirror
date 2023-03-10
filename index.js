const express = require('express')
const app = express()
const port = 3000


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded0

app.post('/', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

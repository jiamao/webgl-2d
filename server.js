const express = require('express')
const app = express()
const port = 8808
console.log(__dirname);
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
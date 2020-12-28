const express = require('express')
const app = express()

// Landing page
app.get('/', (req, res) => res.send('Hello World!'))

// About us page
app.get('/about', (req, res) => res.send('Yet another about us page!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

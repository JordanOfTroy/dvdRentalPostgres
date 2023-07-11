const express = require('express')
const app = express()
const PORT = process.env.PORT || 5050
const db = require('./queries')

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('sup bitches!')
})
app.get('/getActors', db.getActors)
app.get('/getRental', db.getRental)
app.post('/updateActors', db.updateActor)

app.listen(PORT, () => {
    console.log(`Master has given Dobby a port: ${PORT}`)
})
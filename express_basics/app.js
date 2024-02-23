const express = require('express')

const app = express()

// app.use((req, res) => { 
//     console.log('I am listening')
// })

app.get('/cats', (req, res) => {
    res.send('<h1>This is the cats page</h1>')
})

app.get('/dogs', (req, res) => { 
    res.send('<h1>This is the dogs page</h1>')
})

// path parameters
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    res.send(`<h1 style = "color : #234232;">Welcome to the ${subreddit} subreddit</h1>`)
})

app.get('/chickens', (req, res) => {
    const {name} = req.query
    res.send(`<h1>Welcome user :${name} to the chickens page</h1>`)
})

app.get('*', (req, res) => { 
    res.send('<h1>This route has not been specified</h1>')
})



app.listen(3000, () => { 
    console.log('Started the server')
})
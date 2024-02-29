const express = require('express')
const path = require('path')
const reddit = require('./data.json') //  we do not need to export json file in order to import it. we can directly import them
const app = express()

// app.use((req, res) => {
//     console.log('I am listening')
// })
app.use(express.static(path.join(__dirname, 'public')))
// app.set is used to set the configuration for our app
app.set('view engine', 'ejs')

/* 
    This is used so that if we run our app.js from outside this folder it still runs
    and __dirname gives us the absolute location of the index.js.
*/
app.set('views', path.join(__dirname, 'views'))

app.get('/data/:subreddit', (req, res) => { 
    const { subreddit } = req.params
    const data = reddit[subreddit]
    // console.log(data)
    res.render('subreddit', data)
})

app.get('/racoons/:name/:age', (req, res) => {
    const { name, age } = req.params
    res.render('racoons.ejs', {name, age : age})
})

app.get('/home', (req, res) => {
    // console.log(__dirname)
    res.render('home.ejs')
})

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


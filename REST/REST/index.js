const express = require('express');
const path = require('path');
const { v4: uuid } = require('uuid')
const methodOverride = require('method-override')

//##################### DEFINING THE PATHS ##########################

const STATIC_FILE_PATH = path.join(__dirname, 'static')
const VIEWS_PATH = path.join(__dirname, 'views')
const PORT = 3000
const app = express();
// Our fake database:
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

//###################################################################

//##################### SETTING THE MIDDLEWARES #####################

app.use(express.static(STATIC_FILE_PATH))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// app.use(methodOverride('_method'))
//###################################################################

app.set('view engine', 'ejs')
app.set('views', VIEWS_PATH)



// ########################## SHOW ALL THE COMMENTS #################
app.get('/comments', (req, res) => { 
    res.render('home.ejs', {comments})
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({id : uuid(), username, comment})
    res.render('home.ejs', {comments})
})

// ######################### NEW COMMENT ############################
app.get('/comments/new', (req, res) => {
    res.render('form.ejs',)
})


// ########################## SINGLE COMMENT ########################
app.get('/comments/:id', (req, res) => {
    const { id } = req.params

    const comment = comments.find(comment => comment.id === id)
    res.render('comment.ejs', {...comment})
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    
    const { newComment } = req.body
    
    // Now replace the current comment of the user with this id with the newComment.
    const user = comments.find(comment => comment.id === id)

    user.comment = newComment

    // Now again render the comments page
    res.render('home.ejs', { comments })
})

// ########################## EDIT THE COMMENT ######################
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find(comment => comment.id === id)
    res.render('edit.ejs', {comment})
})

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})



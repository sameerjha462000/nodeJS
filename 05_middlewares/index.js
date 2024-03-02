const express = require("express")
const path = require("path")
const morgan = require("morgan")

const PORT = 3000;
app = express()

// using morgan middleware
// app.use(morgan("tiny"))
app.use(express.urlencoded({ extended: true }))
app.use(morgan(':method :url :status - :response-time ms'))

/*
    We can also have a custom middleware of our own which would run on every incoming request.
    They have full access to the incoming request and response object which are coming on any route on our server.
    
    It is necessary that we call the next() inside the custom middleware because if not called would make our
    request hanging.
*/

app.use((req, res, next) => { 
    console.log("Inside the first middleware...")
    next(); // This step is very necessary as not calling the next() would let the request hanging
})

app.use((req, res, next) => { 
    console.log("Inside the second middleware...")
    next();
})

// This middleware will run only if the request is for the route starting with /dogs, otherwise it wont run...
app.use("/dogs", (req, res, next) => { 
    console.log("Inside the middleware which has been made for all the routes starting with /dogs...");
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query; // although this does not happen in real life that we pass password in the query string.
    if (password === "chickennuggets") {
        next(); // allow the user to know the secret
    } else {
        res.send("Enter the correct password...")
    }
}


app.get("/", (req, res) => { 
    res.send("This is home page...")
})

app.get("/dogs", (req, res) => { 
    res.send("This is dogs page...")
})

app.get("/dogs/:id", (req, res) => { 
    const { id } = req.params;
    res.send(`This is the dog with id : ${id}`)
})

app.get("/secret", verifyPassword, (req, res) => {
    res.send("My secret is that I have never been loved and my father had a pre marital affair and not mother married someone else.")
})

app.listen(PORT, () => { 
    console.log(`port started at ${PORT}`)
})
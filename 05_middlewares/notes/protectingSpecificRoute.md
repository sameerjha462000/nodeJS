# Protecting a single route

We can also protect a single route. Express gives us the facility to protect a route by passing in the middleware function in that route path.

```Javascript
    
    const verifyPassword = (req, res, next) => {
        const { password } = req.body

        if(password === "chickennuggets"){
            next()
        }else {
            res.render("404") //  render the 404.ejs page
        }
    }

    app.get("/secret", verifyPassword, (req, res, next) => {
        // Do some task
        res.send("My secret is that I still love her and I want her to come back without going to some guy. I love her...")
    });
```
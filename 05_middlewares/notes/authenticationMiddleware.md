# Fake Authentication Middleware

We can also protect our certain set of routes from being used by setting in a middleware on those paths.

For example, we may want that any request on any path starting with `/auth` should be first validated(as this is the super user). We can achieve this by setting in a middleware in between.

```Javascript
    app.use("/auth", (res, req, next) => {
        const { password } = req.body;

        // we now need to validate the password
        if(password !== "chickennuggets") {
            // the user is not authenticated
            res.render("404"); // render the 404 response page
        }else {
            // the user is authenticated
            next();
        }
    })
```
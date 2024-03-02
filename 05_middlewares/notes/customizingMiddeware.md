# Customizing Middlewares

We can customize our own middleware. I mean we can set specifc mdiddlwares for specific paths. This can be done by passing the pattern as the first parameter inside the `app.use()` function

```Javascript
    app.use("/dogs", (req, res, next) => {
        req.class = "DOG"
        next();
    })
```

This middleware will run for every verb whenever we will pass in a request to a path starting with `/dogs`.
# Middlewares

Express middlewares are functions that run during the request/response lifecycle. Each middleware has access to the request and response objects. They can end the HTTP request by sending back a response with methods like `res.send()` or we can pass the request to the next middleware or route using `next()`.

Middleware functions can perform the following tasks:

+ Execute any code.
+ Make changes to the request and the response objects.
+ End the request-response cycle.
+ Call the next middleware or route in the stack.

If the current middleware does not end the request-response cycle, it must pass the `next()` to pass the control to next middleware function or route, otherwise the request will be left hanging.

## Example of custom middleware

```Javascript
    app.use((res, req) => {
        res.send("Hijacked by my app.use!!!")
    })
```

This middleware will run everytime a request is send to the server and would end it before the request reaches to any route.

If we want that the request goes to the next middleware or to the next route, we must use the `next()` function inside this function.

```Javascript
    app.use((res, req, next) => {
        res.send("Hijacked by my app.use!!!")
        next()
    })
```

This shall pass the request to the next middleware(if we have any), otherwise redirected to the next matching route.

# Example of multiple middlewares
```Javascript
    app.use((req, res, next) => {
        console.log("This is my first middleware...")
        next();
    })

    app.use((req, res, next) => {
        console.log("This is my second middleware...")
        next()
    })

    app.get("/", (req, res) => {
        res.send("Home page!!!")
    })

    app.get("/dogs", (req, res) => {
        res.send("woof woof!!!")
    })
```

Now if we send a request to `localhost:8000/`, then the first middleware will run and then second middleware will run and then we will go to the matching route and hence the req-res cycle would end.

If we send a request to `localhost:800/asdjs`, then also the two middlewares would run and request would be left hanging.

# Adding data during the execution of middleware

We can also add our own data or modify the existing data during the execution of a middleware.

```Javascript
    app.use((req, res, next) => {
        req.firstName = "Abhishek"
        next();
    })

    app.use((req, res, next) => {
        req.secondName = "Jha"
        next()
    })

    app.get("/", (req, res) => {
        const { firstName, secondName } = req;
        res.send(`Welcome to the home page, ${ firstName } ${ secondName }`)
    })

    app.get("/dogs", (req, res) => {
        const { firstName, secondName } = req;
        res.send(`Welcome to the dogs page, Woof woof 🐶, ${ firstName } ${ secondName }`)
    })
```

In this we can see that we added our own data `firstName` and `secondName` during the execution of first and the second middleware respectively and then used this data to render our view.

# Changing the request type of all request to GET

We can change the request type of each and every request that comes on our server to a GET request by making a middleware for this.

```Javascript
    app.use((req, res, next) => {
        req.method = "GET";
        next();
    })
```

This middlewares changes all the incoming request into a GET request no matter what was the request method initially. So all the POST, PUT, PATCH, and DELETE handlers are wasted...
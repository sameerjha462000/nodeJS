1. Models are javascript classes that we make with assistance of mongoose which are used to interact with the mongoDb collection.

2. Understand the below code ...
    ```JavaScript
        const mongoose = require('mongoose')

        mongoose.connect('mongodb://127.0.0.1:27017/movieApp').then(() => { 
            console.log('Connection made successfully')
        }).catch(err => { 
            console.log('Error')
        })

        
        const movieSchema = new mongoose.Schema({
        title : String,
        year : Number,
        score : Number,
        rating : String
        })
    ```
3. Creating a schema is just the JS side of the equation, it has nothing to do with models at this point of time.

    ```Javascript

        const Movie = mongoose.Model("Movie", movieSchema)
        // Mongoose would pluralize this "Movie" into 'movies' collection which is in the Mongo database.

        const amadeus = new Movie({title : "Amadeus", year : 1984, score : 9.2, rating : "R"})

        // we can now save this amadeus movie into the database using the .save() method
        // The .save() method is a thenable which means that it returns us a promise.
        amadeus.save()
        .then((data) => {
                console.log(data)
            })
        .catch((err) => {
            console.log("could not save to the database")
            console.log(err.message)
        })
    ```

4. We can also update the movie in the database using the same 
    ```JavaScript
        amadeus.year = 1986

        amadeus.save() // This will update the year to 1986
    ```

5. We can also add multiple movies at the same time.
    ```JavaScript
        Movie.insertMany(
            {title : "Amelie", year : 2001, score : 8.3, rating : "R"},
            {title : "Alien", year : 1979, score : 8.1, rating : "R"},
            {title : "The Iron Giant", year : 1999, score : 7.5, rating : "PG"},
            {title : "Stand By Me", year : 1986, score : 8.6, rating : "R"},
            {title : "Moonrise Kingdom", year : 2012, score : 7.3, rating : "PG-13"},
        )
        .then(data => {
            console.log("It worked!!!")
            console.log(data)
        }) 
    ```

6. Finding with mongoose
    Finding takes time, so it is a time taking operation. They do not return a promise as they are not fully-fledged promises. Although they are thenable.
    ```Javascript
        Movie.find({}).then(data => {console.log(data)})

        Movie.find({rating : "PG-13"}).then(data => console.log(data))

        Movie.find({year : {$gt : 2015}}).then(data => console.log(data))

        Movie.find({year : {$lt : 2010}})

        Movie.findOne({}).then(m => console.log(m))

        Movie.fingById("5f3e0c2d838e3725b55202c7").then(m => console.log(m))
    ```





    
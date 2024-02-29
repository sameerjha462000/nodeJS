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

        amadeus.save()
    ```
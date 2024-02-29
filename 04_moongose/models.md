1. Models are javascript classes that we make with assistance of mongoose which are used to interact with the mongoDb collection.

2. The first thing we need to do is to create a schema. 
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

        //  Creating a schema is just the JS side of the equation, it has nothing to do with
        // models at this point of time.

        const Movie = mongoose.Model("Movie", movieSchema) // Mongoose would pluralize this "Movie" into 'movies' collection which is in the Mongo database.

        const amadeus = new Movie({title : "Amadeus", year : 1984, score : 9.2, rating : "R"})
    ```
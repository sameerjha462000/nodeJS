# Models

Models are javascript classes that we make with assistance of mongoose which are used to interact with the mongoDb collection. Before creating the Model we first need to define the schema which is done using the `mongoose.Schema()` constructor.

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
Creating a schema is just the JS side of the equation, it has nothing to do with models at this point of time. We then need to pass in that schema and the name of the collection into the `mongoose.Model()` method which would then return us a Model to interact with Mongo Database.

#### Look at this code snippet

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

Now in order to update a Movie, we just need to make changes in the model of that movie and then call the .save() method on that.

```JavaScript
    amadeus.year = 1986

    amadeus.save() // This will update the year to 1986
```
    

## Insertion

We can also add multiple movies at the same time.

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

## Reading/Finding

Finding with mongoose takes time as it is a time taking operation. They do not return a promise as they are not fully-fledged promises. Although they are thenable.

```Javascript
    Movie.find({}).then(data => {console.log(data)})

    Movie.find({rating : "PG-13"}).then(data => console.log(data))

    Movie.find({year : {$gt : 2015}}).then(data => console.log(data))

    Movie.find({year : {$lt : 2010}})

    Movie.findOne({}).then(m => console.log(m))

    Movie.fingById("5f3e0c2d838e3725b55202c7").then(m => console.log(m))
```

## Updating

Updating with mongoose

```Javascript
    Movie.updateOne({title : "Amadeus"}, {year : 1984})
            .then(res => console.log(res)) // does not give us the updated movie, instead it gives us a weird object

    
    Movie.updateMany({title : {$in : ["Amadeus", "Stand By Me"]}}, {score: 10})
            .then(res => console.log(res)) // again a weird object 
```

We also have other update methods which actually return the updated object which we can get by using .then() method. Although, technically it is not a promise but still it is a thenable.

```Javascript
    Movie.findOneAndUpdate({title : "Amadeus"}, {year : 1986})
    .then(m => console.log(m)) // returns the object before updation

    // To get the updated object, we need to pass in the options object as the 3rd argument.
    Movie.findOneAndUpdate({title : "Amadeus"}, {year : 1996}, {new : true})
    .then(m => console.log(m)) //  returns us the updated object
    // Now the deprecation warning is gone
```

## Deletion

We also have findOneAndDelete() method.

```JavaScript
    Movie.remove({title : "Amelie"}) // returns us a weird object

    Movie.deleteMany({year : {$gt : 1999}}) // returns us a weird object

    // If we want to get the deleted item, we use findOneAndDelete() methods.
    Movie.findOneAndDelete({title : "Alien"})
        .then(m => console.log(m)) // returns us the deleted movie

    Movie.findByIdAndDelete("5f3e0c2d838e3725b55202c7")
        .then(m => console.log(m))
```





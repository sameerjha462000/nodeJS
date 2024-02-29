const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/movieApp').then(() => { 
    console.log('Connection made successfully')
}).catch(err => { 
    console.log('Error')
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating : String
})

// This will create a new Model
const Movie = mongoose.model('Movie', movieSchema) // movies

const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' })

amadeus.save()
        .then((data) => {
                console.log(data)
            })
        .catch((err) => {
            console.log("could not save to the database")
            console.log(err.message)
        })

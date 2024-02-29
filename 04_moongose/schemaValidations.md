# Schema Validations

1. We can apply validations to the fields of our schema.
    ```Javascript
        const mongoose = require('mongoose')

        mongoose.connect('mongodb://127.0.0.1:27017/movieApp').then(() => { 
            console.log('Connection made successfully')
        }).catch(err => { 
            console.log('Error')
        })

        // ###############################################
        const productSchema = new mongoose.Schema({
            name : {
                type : String,
                required : true // validation
            },
            price : {
                type : Number
            }
        })
        // ################################################

        const Product = mongoose.Model("Product", productSchema)

        const bike = new Product({name : "Mountain Bike", price : 599})

        bike.save()
            .then(data => {
                console.log("It worked")
                console.log(data)
            })
            .catch(err => {
                console.log("Oh no, we have an error")
                console.log(err.message)
            }) 
    ```
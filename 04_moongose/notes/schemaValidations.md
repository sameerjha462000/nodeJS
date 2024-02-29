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

2. If we do not pass the validation then we will get the validation error.
    ```Javascript
        const bike = new Product({price : 599})

        bike.save()
            .then(data => {
                console.log("IT WORKED!")
                console.log(data)
            })
            .catch(err => {
                console.log("OH NO ERROR!")
            })
    ```

3. If we pass a string into the Number field, it tries to cast it into the integer.
    ```Javascript
        const bike = new Product({name : "Mountain Bike", price : "599"}) // "599" will be converted into 599

        bike.save()
            .then(data => {
                console.log("IT WORKED!")
                console.log(data)
            })
            .catch(err => {
                console.log("OH NO ERROR!")
            })

        const bike2 = new Product({name : "Greenfield Bike", price : "Hundred"}) // This will not work as mongoose would not be able to typecast "Hundred" into a 

        bike2.save()
            .then(data => {
                console.log("IT WORKED!")
                console.log(data)
            })
            .catch(err => {
                console.log("OH NO ERROR!")
            })
    ```

# Additional Schema Validations

We can also add additional schema validations inside our model.
```Javascript

    const productSchema = new mongoose.Schema({
        name : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        onSale : {
            type : Boolean,
            default : false
        }
    })
```

However, we also have specific constraints for each specific type.
For example, on strings we can set `lowercase` to  `true`. This would automatically lower case the value before inserting it into the collection.

#### Example
```Javascript
    const personSchema = new mongoose.Schema({
        name : {
            type: String,
            required : true,
            lowercase : true
        },
        age : {
            type : Number,
            required : true,
            min : 0,
            max : 100
        }
    })

    const Person = mongoose.Model("Person", personSchema)

    const galois = new Person({name : "Galois", age : 20})

    galois.save()
        .then(data => {
            console.log(data) // {name : "galois", age : 20} # Name was automatically lower cased
        })
        .catch(err => {
            console.log("OH NO I COULD SAVE GALOIS")
        })
```
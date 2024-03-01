# Methods on Models

We can add methods on models, we can have instance methods as well as static methods. Instance methods are the one which are available to each individual instance of the Model. Static methods are class level methods i.e. they are applicable on the class.

Let us first create a person schema

```Javascript
    const personSchema = new mongoose.Schema({
        name : {
            type : String,
            required : true,
            maxLength : [15, "Name cannot exceed 15 characters..."]
        },
        dob : {
            type : Number,
            required : true,
            min : [2000, "We need only genZ's"]
        }
    })

    const Person = mongoose.Model("Person", personSchema)
```

We can define our instance methods by adding the name of the method in the `personSchema.methods`

```JavaScript
    PersonSchema.methods.greet = function () {
        const {name} = this;
        return `Hi, My name is ${name}`
    }

    PersonSchema.methods.age = function () {
        const { dob } = this;
        return `My age is ${2024 - dob}` // since ye 2024 chl rha he
    }

    // Schema should be connected to the Model after all the instance and static methods have been defined.
    const Person = mongoose.Model("Person", personSchema)
```

### Let us take the exampe of the product schema

```Javascript
    const productSchema = new mongoose.Schema({
        name : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true,
            min : [0, "Price cannot be negative "]
        },
        onSale : {
            type : Boolean,
            default : false
        },
        categories : [String],
        qty : {
            online : {
                type : Number, 
                default : 0
            },
            inStore : {
                type : Number,
                default : 0
            }
        },
        size : {
            type : String,
            enum : ["S", "M", "L"] // enum
        }
    })
```

We can define instance methods on the product schema

```JavaScript
    productSchema.methods.toggleOnSale = function () {
        this.onSale = !this.onSale
    }

    productSchema.methods.addCategories = async function (newCat) {
        this.categories.push(newCat)
        return this.save()
    }
```

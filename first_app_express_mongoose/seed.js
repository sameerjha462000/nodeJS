const mongoose = require("mongoose")
const Product = require("./models/product")
mongoose.connect("mongodb://localhost:27017/farmApp")
    .then((data) => { 
        console.log("It worked!!!")
    })
    .catch((err) => { 
        console.log("Oh no, it did not start!!!")
        console.log(err)
    })

const cheese = new Product({ name: "Cheese", price: 10, category: "dairy" })

cheese.save()

Product.insertMany([
    {name : "Apple", price : 50, category : "fruit"},
    {name : "Paneer", price : 92, category : "dairy"},
    {name : "Gobhi", price : 40, category : "vegetable"},
    {name : "Aloo", price : 35, category : "vegetable"}
])
    .then(data => { 
        console.log(data)
    })
    .catch(err => { 
        console.log("Sorry, I could not insert...")
        console.log(err)
    })
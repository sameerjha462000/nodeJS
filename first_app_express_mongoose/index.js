const express = require("express")
const path = require("path")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const Product = require("./models/product")

const PORT = 3000;
const app = express()

mongoose.connect("mongodb://localhost:27017/farmApp")
    .then(() => { 
        console.log("It worked!!!")
    })
    .catch(() => { 
        console.log("Oh no, it did not start!!!")
    })

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/products", async (req, res) => {
    const products = await Product.find({}) // will return all the products
    res.render("products", {products})
})

app.get("/products/new", (req, res) => {
    res.render("productNew")
})

app.get("/products/:id", async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id);
    res.render("product", { product })
})

app.post("/products", async (req, res) => {
    // console.log(req.body)
    const { product_name: name, product_price: price, product_category: category } = req.body;
    // console.log({name, price, category})
    const product = new Product({ name, price, category });
    await product.save()
    res.redirect("/products")
})

app.get("/products/:id/edit", async (req, res) => { 
    const { id } = req.params;
    // Now find the product
    const product = await Product.findById(id);
    res.render("edit", {product})
})

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const { product_name: name, product_price: price, product_category: category } = req.body;
    
    // now find the product and update it
    const product = await Product.findByIdAndUpdate(id, { name, price, category }, { new: true })
    res.render("product", { product })
})

app.delete("/products/:id", async (req, res) => { 
    const { id } = req.params;

    await Product.findByIdAndDelete(id)

    res.redirect("/products")
})

app.listen(PORT, () => {
    console.log(`server started successfully on port ${PORT}`)
})
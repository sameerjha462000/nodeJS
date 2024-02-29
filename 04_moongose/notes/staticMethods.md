# static methods

We can also set static methods on a schema, We just need to add them in `schema.statics`

```Javascript
    productSchema.statics.fireSale = function () {
        this.updateMany({}, {onSale : true, price : 0})
    }
```
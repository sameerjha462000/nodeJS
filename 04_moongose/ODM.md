1. Mongoose is an ODM(Object Data Mapper ? Object Document Mapper?)

2. ODMs like Mongoose map documents coming from a database into usable JavaScript objects.

3. Mongoose provides ways for us to model out our application data and define a schema. It offers wasy ways to validate data and build complex queries from the comfort of JS.

4. For SQL databases, we use the term ORM(Object Relational Mapper).

5. How to make a mongoose connection?
    -- First we install mongoose
        npm install mongoose
    
    --  const mongoose = require('mongoose')
        mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser : true. unifiedToplogy : true})
    
    -- unifiedTopology must be set to true otherwise it would give deprecation warning.
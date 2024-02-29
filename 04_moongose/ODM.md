1. Mongoose is an ODM(Object Data Mapper ? Object Document Mapper?)

2. ODMs like Mongoose map documents coming from a database into usable JavaScript objects.

3. Mongoose provides ways for us to model out our application data and define a schema. It offers wasy ways to validate data and build complex queries from the comfort of JS.

4. For SQL databases, we use the term ORM(Object Relational Mapper).

5. Installing mongoose => `npm install mongoose`

6. Making a connection
    ```JavaScript
        const mongoose = require('mongoose')

        mongoose.connect("mongodb://localhost:27017/test",
                            {
                                useNewUrlParser : true,
                                unifiedToplogy : true // unified topology must be set to true otherwise we would get deprecation warning.
                            }
                        )
    ```

7. 
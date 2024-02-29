/*
    C -- Create

    -- We have insertOne(), insertMany() methods. As the name suggest insertOne() is used to insert a single document into the
       collection whereas insertMany() expects us to pass in an array of documents to be inserted into the collection.

    -- The insert() method can be used to insert either a single document into the collection or multiple documents into the collection.

    1. db.dogs.insertOne( // used to insert a single document into the collection.
                            {
                                name : "Charlie",
                                age : 3,
                                breed : "corgi",
                                catFriendly : true
                            }
                        )
    
    2. db.dogs.insert( // a single document or an array of documents
                        [
                            // document 1
                            {
                                name : "Wyatt",
                                breed : "Golden",
                                age : 14,
                                catFriendly : false
                            },
                            {
                                name : "Tonya",
                                breed : "Chihuahua",
                                age : 17,
                                catFriendly : true
                            }
                        ]
                     )
*/




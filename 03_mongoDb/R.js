/*

    R -- stands for Read

    -- The findOne() method returns us a single document if it gets one.
    -- The find() method returns us a cursor to the result as this operation is a bit expensive.

    1. db.dogs.find() // finds all the documents inside the dogs.

    2. db.dogs.find({breed : "Corgi"}) // returns us all the dogs which have the "Corgi" breed.

    3. db.dogs.find({catFriendly : true}) // returns us all the dogs which are cat friendly.

    4. db.dogs.find({age : 7}) // returns us all the dogs which have age equal to 7

    5. db.dogs.find({catFriendly : true, age : 17}) //  returns us all dogs who are cat friendly and are 17 years old. 

    We have another method called findOne which returns us a single document.

    1. db.dogs.findOne() // returns us the first dog of the collection
    
    2. db.dogs.findOne({breed : "Corgi"}) //  returns us the first corgi dog.

*/





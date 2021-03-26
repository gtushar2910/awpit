var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";


mongoClient.connect(url, function(err, databases) {
    if (err) {
        throw err;
    }
    var nodeDB = databases.db("practicemongo"); //here  
    var myquery = { address: /Harvansh nagar/ };
    var newvalues = { $set: { name: "Shivani" } };
    nodeDB.collection("pract").updateMany(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        databases.close();
    });


});
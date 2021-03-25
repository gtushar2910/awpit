var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function(error, databases) {
    if (error) {
        throw error;

    }
    var nodtst = databases.db("navigcollection");
    var pract = [
        { _id: 11, name: "Chaman Gautam", address: "Harvansh nagar Ghaziabad", orderdata: "Jeans" },
        { _id: 12, name: "Shivani", address: "Harvansh nagar Ghaziabad", orderdata: "Jeans" },
        { _id: 13, name: "Menu", address: "Harvansh nagar Ghaziabad", orderdata: "Top" },
        { _id: 14, name: "Brajbala", address: "Harvansh nagar Ghaziabad", orderdata: "Dinig table" },
        { _id: 15, name: "Ramsaran", address: "Harvansh nagar Ghaziabad", orderdata: "Washing machine" },
        { _id: 16, name: "Dheeraj", address: "Harvansh nagar Ghaziabad", orderdata: "Jeans" }
    ]
    nodtst.collection('pract').insertMany(pract, function(error, response) {
        if (error) {
            throw error;

        }
        console.log("Numnber of document is inserted.........");
    })
})
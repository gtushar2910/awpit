var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function(error, databases) {
    if (error) {
        throw error;

    }
    var nodtst = databases.db('navigcollection');
    var deleteQuery = {};
    nodtst.collection('pract').deleteMany(deleteQuery, function(error, response) {
        if (error) {
            throw error;

        }
        console.log(response.result.n + "document(s) deleted successfully .....");
        databases.close();



    })
})
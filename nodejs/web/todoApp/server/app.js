var express = require('express')
var app = express()

app.use('/', express.static('../app'));

// requiring and calling express.
app.get('/', function(req, res) {
    res.send('Hello world');
});
app.listen(3000, function() {
    console.log('Sample app lsitining on 3000')
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!")
});
var TodoSchema = mongoose.Schema({
    thingsToDo: String,
    done: Boolean
});
var Todo = mongoose.model('todo', TodoSchema);
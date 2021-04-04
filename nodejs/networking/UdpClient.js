var buffer = require('buffer');
var udp = require('dgram');
// creating a client socket
var client = udp.createSocket('udp4');


client.on('message', function(msg, info) {
    console.log('Data received from server : ' + msg.toString());
    console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);
});
//sending msg
var data = Buffer.from('TusharGohil');
client.send(data, 2222, 'localhost', function(error) {
    if (error) {
        client.close();
    } else {
        console.log('Data sent !!!');
    }
});

var data1 = Buffer.from('hello');
var data2 = Buffer.from('world');
//sending multiple msg
client.send([data1, data2], 2222, 'localhost', function(error) {
    if (error) {
        client.close();
    } else {
        console.log('Data sent !!!');
    }
});

client.on('close', function() {
    console.log('Client Socket is closed !');
});

setTimeout(function() {
    client.close();
}, 18000);
var http = require('http');
//const url = process.argv[2];
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
})


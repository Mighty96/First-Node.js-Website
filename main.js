var http = require("http");
var url = require("url");
var qs = require("querystring");
var template = require("./lib/template.js");
var db = require("./lib/db");
var topic = require("./lib/topic");

var app = http.createServer(function (request, response) {
    var url_ = request.url;
    var pathname = url.parse(url_, true).pathname;
    var queryData = url.parse(url_, true).query;

    if (pathname === "/") {
        if (queryData.id === undefined) {
            topic.home(request, response);
        } else {
            topic.page(request, response);
        }
    } else if (pathname === "/create") {
        topic.create(request, response);
    } else if (pathname === "/create_process") {
        topic.create_process(request, response);
    } else if (pathname === "/update") {
        topic.update(request, response);
    } else if (pathname === "/update_process") {
        topic.update_process(request, response);
    } else if (pathname === "/delete_process") {
        topic.delete_process(request, response);
    } else {
        response.writeHead(404);
        response.end("Not found");
    }
});
app.listen(3000);

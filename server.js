// // Dependencies:

// // Snatches HTML from URLs
// var request = require("request");
// // Scrapes our HTML
var cheerio = require("cheerio");
// var express = require("express");
// var bodyParser = require("body-parser");
var mongojs = require("mongojs");
// var mongoose = require('mongoose');
// var path = require('path');
// var app = express();


// // Mongojs configuration
var databaseUrl = "mongodb://heroku_jcjhxvx7:lqsfg22shtl09e8vbn1igrke2p@ds127878.mlab.com:27878/heroku_jcjhxvx7";
var collections = ["newsStories"];


// // Hook our mongojs config to the db var


var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});



// // Configure Mongoose Database and Schema
// // mongoose.connect('mongodb://heroku_jcjhxvx7:lqsfg22shtl09e8vbn1igrke2p@ds127878.mlab.com:27878/heroku_jcjhxvx7');

// // var Schema = mongoose.Schema,
// //     ObjectId = Schema.ObjectId;
 
// // var BlogPost = new Schema({
// //     author    : ObjectId,
// //     title     : String,
// //     body      : String,
// //     date      : Date
// // });

// // // retrieve my model 
// // var BlogPost = mongoose.model('BlogPost');
 
// // // create a blog post 
// // var post = new BlogPost();
 
// // // create a comment 
// // post.comments.push({ title: 'My comment' });
 
// // post.save(function (err) {
// //   if (!err) console.log('Success!');
// // });
// // Routes
// // ================================================

// app.get('/', function(req, res) {	
// 	res.sendFile(path.join(__dirname, '/public/index.html'));
// })

// app.get('/headlines', function(req, res) {
// 	db.newsStories.find(function(err, docs) {
// 		res.json(docs);
// 		console.log(docs);
// 	});
// })

// // Scraping Headlines
// // ================================================

// // Run request to grab the HTML from google news
/*******

request("https://news.google.com/", function(error, response, html) {

  // Load the HTML into cheerio
  var $ = cheerio.load(html);

  // Make an empty array for saving our scraped info
  var result = [];

  // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
  $("span.titletext").each(function(i, element) {

    // Cheerio's find method will "find" the first matching child element in a parent.
    //    We start at the current element, then "find" its first child a-tag.
    //    Then, we "find" the lone child img-tag in that a-tag.
    //    Then, .attr grabs the imgs src value.
    // So: <figure>  ->  <a>  ->  <img src="link">  ->  "link"  
    var headline = $(element).text();//.find("a").attr("href")//.find("a")//.find("span").find("img")//.attr("src");//.attr("class").find("img").attr("src");

    // Push the image's URL (saved to the imgLink var) into the result array
    // result.push({ Link: headline });
    // db.newsStories.save({Headline: headline})
  });

  // With each link scraped, log the result to the console
  // console.log(result);
  
}); 

******/

module.exports = db;

// app.listen(3001, function() {
// 	console.log("App running on port: 3001!");
// });
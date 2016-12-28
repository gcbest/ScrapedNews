var React = require("react");
var db = require("../../server.js");

var titles;

db.newsStories.find(function(err, docs) {
			// res.json(docs);
			titles = JSON.stringify(docs);
			// return titles.map(function(title) {
			// 	title;
			// });
			console.log(docs);
		});

// var Headline = React.createClass({
// 	_getheadlines: function() {
// 		db.newsStories.find(function(err, docs) {
// 			// res.json(docs);
// 			titles = docs;
// 			return titles.map(function(title) {
// 				title;
// 			});
// 			console.log(docs);
// 		});
// 	},
// 	render: function() {
// 		return (
// 			<div>
// 				<p className="main-section"> Yowdy</p>
// 			</div>
// 		);
// 	}
// });

class Headline extends React.Component {
	constructor(props) {
      super(props);
		
      this.state = {
         header: titles,
         content: "Content from state..."
      }
   }

   

   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
         </div>
      );
   }
}

module.exports = Headline;
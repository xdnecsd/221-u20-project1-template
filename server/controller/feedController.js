const feedPost = require('/model/feedItem')

let feedPosts = [];
let feedPost1 = feedPost.createfeedPost("Marist College Gets New Food Provider", "Marist Gets New Pizza And Different Types Of Food", "https://www.marist.edu/", "/images/news_pic.jpg");
let feedPost2 = feedPost.createfeedPost("The New York Knicks Finally Make The PlayOffs", "The New York Knicks made the playoffs then lost in the Eastern Conference Semifinals", "https://champsorchumps.us/team/nba/new-york-knicks#:~:text=The%20New%20York%20Knicks%20last,times%20in%20their%2074%20seasons.", "/images/newyorkknicks.jpg");
let feedPost3 = feedPost.createfeedPost("This New Travel Baskebtall Team Is Taking Over New York And Texas", "A Person named Cam Wilder made a team of amazing players and they keep winning the championship back to back", "https://www.ballertv.com/streams/rod-wave-elite-vs-tf-elite-20220903010631-jfcdng8", "/images/travelteam.jpg");
feedPosts.push(feedPost1);
feedPosts.push(feedPost2);
feedPosts.push(feedPost3);

exports.getfeedPosts = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	console.log(feedPosts);
	res.send(JSON.stringify(feedPosts));
}

exports.savefeedPost = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let newfeedPost = feedPost.createfeedPost(req.body.Title, req.body.Body, req.body.linkurl, req.body.imageurl);
    feedPosts.push(newfeedPost);
    res.send(JSON.stringify(feedPosts));
}

/*exports.savefeedPost = function(req, res) {
	let newfeedPost = feedPost.createfeedPost(req.body.Title, req.body.Body, req.body.linkurl, req.body.imageurl);
	feedPosts.push(newfeedPost);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedPosts);
}*/

exports.getfeedPost = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feedPosts[req.params.feedPostId]);
}

exports.deletefeedPost = function(req, res) {
	feedPosts.splice(req.params.feedPostId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedPosts);
}

exports.updatefeedPost = function(req, res) {
	// get the existing feedPost from the array
	var updatedfeedPost = feedPosts[req.params.feedPostId];
	//console.log(updatedfeedPost);
	// check to see what has been passed and update the local copy
	console.log(req.body);
	if(req.body.Title)
		updatedfeedPost.Title = req.body.Title;
	if(req.body.Body)
		updatedfeedPost.Body = req.body.Body;
	if(req.body.linkurl)
		updatedfeedPost.linkurl = req.body.linkurl;
	if(req.body.imageurl)
		updatedfeedPost.imageurl = req.body.imageurl;

	// save the local copy of the feedPost back into the array
	feedPosts[req.params.feedPostId] = updatedfeedPost;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedPosts[req.params.feedPostId]);
}
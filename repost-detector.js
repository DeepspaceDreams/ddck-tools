#!/usr/bin/env node

const fs = require('fs');

//	Provided by @jeffreypriebe
function youtube_parser(url){
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    let match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

if(process.argv.length != 3){
	console.log("repost-detector : Detects links that have been posted twice.");
	console.log("Usage : repost-detector [DATA_PATH]");
	console.log("NB : This might not detect them all, but it does detects only reposts and not the original ones.");
	return;
}

//	Retreiving args
const datapath = process.argv[2];

const rawJson = fs.readFileSync(datapath);
const parsedJson = JSON.parse(rawJson);

let linklist = new Array();

parsedJson
.filter(post => post.link)
.forEach(post => {
	let parsedLink = youtube_parser(post.link);
	if(!parsedLink) parsedLink = post.link;
	
	let foundElmt = linklist.find(elmt => elmt.link == parsedLink);

	if(foundElmt)
		console.log("Original\t: http://facebook.com/" + foundElmt.id +
		"\nRepost\t\t: http://facebook.com/" + post.id + '\n');
	else linklist.push({id : post.id, link : parsedLink, user : post.from});
})

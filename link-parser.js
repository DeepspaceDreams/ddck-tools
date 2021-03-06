#!/usr/bin/env node

const fs = require('fs');

//	Provided by @jeffreypriebe
function youtube_parser(url){
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    let match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

//	Checking for args being filled
if(process.argv.length != 4){
	console.log("link-parser : Parses links that got tagged with a given string in your Facebook Group's posts.");
	console.log("Usage : link-parser [DATA_PATH] [TAG]");
	return;
}

//	Retreiving args
const datapath = process.argv[2];
const tag = process.argv[3].toLowerCase();

//	Reading files
const rawJson = fs.readFileSync(datapath);
const parsedJson = JSON.parse(rawJson);

//	Work
parsedJson
.filter(post => post.link && (post.message && post.message.toLowerCase().search(tag) != -1) ||
	post.comments && post.comments.data.find(dat => dat.message.toLowerCase().search(tag) != -1))
.forEach(post => {
	//	Retreive link from post
	console.log(post.link);

	//	Also retreive YT links in comments
	if(post.comments)
		post.comments.data.forEach(comm => {
			let lnk = youtube_parser(comm.message);
			if(lnk)
				console.log("https://www.youtube.com/watch?v=" + lnk);
		});
});

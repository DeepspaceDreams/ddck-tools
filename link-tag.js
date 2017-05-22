const fs = require('fs');

const rawJson = fs.readFileSync('data.json');
const parsedJson = JSON.parse(rawJson);

//	Can't get it to work but very powerful so I keep it safe...
const ytRegex = "http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?";

//	Put your tag here
const tag = "LD5SEM";

//console.log(parsedJson[1]);

//	Looks at the comments then returns the links
function searchTagInComments(comments){
	for(let j = 0; j < comments.length; j++)
		if(comments[j].message.search(tag) != -1)
			return true;
	return false;
}

//	Getting it all !

for(let i = 0; i < parsedJson.length; i++){
	//	Doesn't consider posts with no link
	if(parsedJson[i].link == undefined || parsedJson[i].message == undefined)
		continue;

	post = parsedJson[i];
	link = post.link;
	
	//	Check for the tag
	if(post.message.search(tag) != -1 || (post.comments != undefined && searchTagInComments(post.comments.data)))
		console.log(link);	
}
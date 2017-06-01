const fs = require('fs');

//	Checking for args being filled
if(process.argv.length != 4){
	console.log("Usage : node link-tag.js [DATA_PATH] [TAG]");
	return;
}

//	Retreiving args
const datapath = process.argv[2];
const tag = process.argv[3];

//	Reading files
const rawJson = fs.readFileSync(datapath);
const parsedJson = JSON.parse(rawJson);

//	Work
parsedJson.filter(post => post.link && (post.message && post.message.search(tag) != -1) ||
	post.comments && post.comments.data.find(dat => dat.message.search(tag) != -1))
.forEach(post => console.log(post.link));

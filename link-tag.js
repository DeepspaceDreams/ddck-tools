const fs = require('fs');

const rawJson = fs.readFileSync('data.json');
const parsedJson = JSON.parse(rawJson);

//	Can't get it to work but very powerful so I keep it safe...
const ytRegex = "http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?";

//	Put your tag here
const tag = "LD5SEM";

//	Getting it all !
parsedJson.filter(post => post.link && (post.message && post.message.search(tag) != -1) ||
	post.comments && post.comments.data.find(dat => dat.message.search(tag) != -1))
.forEach(post => console.log(post.link));

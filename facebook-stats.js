const fs = require('fs');

const rawJson = fs.readFileSync('data.json');
const parsedJson = JSON.parse(rawJson);

var dtCnt = new Array();
var lkCnt = new Array();

//	INIT

for(i = 0; i < 7; i++){
	dtCnt.push(0);
	lkCnt.push(0);
}

//	POSTS PER DAY

console.log("POSTS / DAY\n");

for(i = 0; i < parsedJson.length; i++){
	var dt = new Date(parsedJson[i].created_time);
	dtCnt[dt.getDay()]++;
}

for(i = 0; i < dtCnt.length; i++){
	console.log(dtCnt[i]);
}

//	LIKES PER DAY

console.log("\nLIKES / DAY\n");

for(i = 0; i < parsedJson.length; i++){
	//console.log(i);
	var dt = new Date(parsedJson[i].created_time);
	if(parsedJson[i].likes != undefined){
		var lk = parsedJson[i].likes.data.length;
		lkCnt[dt.getDay()]+= lk;
	}
}

for(i = 0; i < dtCnt.length; i++){
	console.log(lkCnt[i]);
}

//	LIKE/POST PER DAY

console.log("\nLIKES / POST / DAY\n");

for(i = 0; i < dtCnt.length; i++){
	console.log(lkCnt[i] / dtCnt[i]);
}
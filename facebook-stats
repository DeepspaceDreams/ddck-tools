#!/usr/bin/env node

const fs = require('fs');

if(process.argv.length != 3){
	console.log("facebook-stats : Calculates stats about your group.");
	console.log("Usage : facebook-stats [DATA_PATH]");
	return;
}

//	Retreiving args
const datapath = process.argv[2];

const rawJson = fs.readFileSync(datapath);
const parsedJson = JSON.parse(rawJson);

var dtCnt = new Array();
var lkCnt = new Array();

for(let i = 7; i; i--){ dtCnt.push(0); lkCnt.push(0); }

console.log("POSTS / DAY");

parsedJson.forEach(post => {
	let dt = new Date(post.created_time);
	dtCnt[dt.getDay()]++;
});

console.log(dtCnt);

console.log("\nLIKES / DAY");

parsedJson.filter(post => post.likes).forEach(post => {
	let dt = new Date(post.created_time);
	lkCnt[dt.getDay()]+= post.likes.data.length;
});

console.log(lkCnt);

console.log("\nLIKES / POST / DAY");

for(i = 0; i < dtCnt.length; i++) console.log(lkCnt[i] / dtCnt[i]);
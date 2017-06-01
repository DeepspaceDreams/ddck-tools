# DDCK-tools

This is a set of tools we use to gather data exported using [facebook-export](https://www.npmjs.com/package/facebook-export). Feel free to use it for your own social digging group.

## Overview

### facebook-stats.js

Gathers day-to-day data to get a good estimate of the reach of your posts for each day of the week.

### link-tag.js

Analyzes data exported using facebook-export to gather posts tagged with a given keyword.

### run_link_tag

Simple Bash script you can use to automatize the post gathering and data analyzis. Just provide a Facebook UAT in fbtoken and a group ID in groupid once and put a tag as an argument, then you're done.

## Usage

You first have to export data using [facebook-export](https://www.npmjs.com/package/facebook-export) and output it in a json format using facebook-analyze (Provided with facebook-export).

### Using run_link_tag

Put your Facebook User Access Token in ```fbtoken``` and the Facebook group ID (You can list them using ```facebook-export```) in groupid, then simply run ```run_link_tag [TAG]```.

### Using link-tag.js

You must export your group's data manually in a file then run ```node link-tag.js [DATA_PATH] [TAG]```.


---

Ｄｅｅｐｓｐａｃｅ Ｍｕｓｉｃ ＞ ａｌｌ
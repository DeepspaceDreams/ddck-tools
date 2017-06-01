# DDCK-tools

This is a set of tools we use to gather data exported using [facebook-export](https://www.npmjs.com/package/facebook-export). Feel free to use it for your own social digging group.

## Overview

### facebook-stats

Gathers day-to-day data to get a good estimate of the reach of your posts for each day of the week.

### link-tag

Exports posts using facebook-export then analizes it with link-parser to gather posts tagged with a given keyword.

### link-parser

JS program that parses data from facebook-export but doesn't do the export automatically.

### Extracting links

You can either use link-tag that will help you store your Facebook API token and group ID to extract links faster next time, or extract your posts manually and use link-parser to just get them from a given file.

### Using link-tag

Put your Facebook User Access Token in ```fbtoken``` and the Facebook group ID (You can list them using ```facebook-export```) in groupid, then simply run ```link-tag [TAG]```.

Make sure your API key is up-to-date and avoid using it repeatedly and everything should be OK.

### Using link-parser

You must export your group's data manually in a file then run ```link-parser [DATA_PATH] [TAG]```.

## Nota bene

No error is triggered if your API key got too old, if the script runs instantly or the posts aren't fresh, just get a new one from the Graph Explorer and it should be good.

---

Ｄｅｅｐｓｐａｃｅ Ｍｕｓｉｃ ＞ ａｌｌ
# DDCK-tools

This is a set of tools we use to gather data exported using [facebook-export](https://www.npmjs.com/package/facebook-export). Feel free to use it for your own social digging group or whatever.

## Overview

The tools have been re-designed with the end user in mind

### facebook-stats

Gathers day-to-day data to get a good estimate of the reach of your posts for each day of the week.

### link-tag

Exports posts using facebook-export then analizes it with link-parser to gather posts tagged with a given keyword.

### link-parser

JS program that parses data from facebook-export but doesn't do the export automatically.

### repost-detector

Looks for links that have been posted twice. YouTube links are parsed to get the specific ID to get a smarter matching, however other links (SoundCloud, BandCamp, etc.) won't benefit the same degree of accuracy.

### Extracting links

You can either use link-tag that will help you store your Facebook API token and group ID to extract links faster next time, or extract your posts manually and use link-parser to just get them from a given file.

### Using link-tag

Put your Facebook User Access Token in ```fbtoken``` and the Facebook group ID (You can list them using ```facebook-export```) in groupid, then simply run ```link-tag [TAG]```.

Make sure your API key is up-to-date and avoid using it repeatedly and everything should be OK.

### Using link-parser

You must export your group's data manually in a file then run ```link-parser [DATA_PATH] [TAG]```.

## Nota bene

facebook-export won't always trigger an error if the key got too old or is invalid, make sure it's fresh and not too used before running the script.

---

Ｄｅｅｐｓｐａｃｅ Ｍｕｓｉｃ ＞ ａｌｌ
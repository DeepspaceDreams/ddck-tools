# DDCK-tools

This is a set of tools we use to gather data exported using [facebook-export](https://www.npmjs.com/package/facebook-export). Feel free to use it for your own social digging group.

## Overview

### facebook-stats.js

Gathers day-to-day data to get a good estimate of the reach of your posts for each day of the week.

### link-tag.js

Gathers all links where a given tag was put in the post or in the comments, very useful for label days, etc.

## Usage

You first have to export data using [facebook-export](https://www.npmjs.com/package/facebook-export) and output it in a json format using facebook-analyze (Provided with facebook-export).

```bash
facebook-export -d -g [GROUP_ID] -a [ACCESS_TOKEN]
facebook-analyze -g [GROUP_ID] -s > data.json
```

Once done, simply run ```node facebook-stats.js``` to get your daily stats.

To use link-tag you must first specify the tag you're looking for into link-tag.js then simply run ```node link-tag.js```.

## Notes

I'm open to any contribution, I'm far from being a JS guru.

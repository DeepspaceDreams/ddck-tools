#!/bin/bash

# Retreive facebook token and group id

FBTOKEN=$(cat fbtoken)
GROUPID=$(cat groupid)
DATA_PATH=$1

# Check for empty strings

if [ -z "$FBTOKEN" ] || [ -z "$GROUPID" ]; then
	touch fbtoken
	touch groupid

	echo "Please fill fbtoken and groupid to run the script."
	echo "You can get a Facebook User Access Token here : https://developers.facebook.com/tools/explorer"
	echo "Make sure it has permissions on user managed groups."
	
	exit -1
fi

if [ -z "$DATA_PATH" ]; then
	echo "run_link_tag : Retreives your Facebook data using your token and group ID stored in fbtoken and groupid."
	echo "Usage : $0 [PATH]"
	echo "Downloading all your group's data might take a minute, be patient !"
	
	exit -2
fi

# Stuff being done

facebook-export -g ${GROUPID} -a ${FBTOKEN} -d #&> /dev/null

if [ $? != 0 ]; then
	echo "Something went wrong while trying to get your posts."
	echo "Try re-running the script using a fresh API key :"
	echo "https://developers.facebook.com/tools/explorer"
	echo "Also make sure the group ID is valid."
	
	exit -3
fi

facebook-analyze -g ${GROUPID} -s > $DATA_PATH

if [ $? != 0 ]; then
	echo "Something went wrong while trying to export your posts in a file,"
	echo "maybe something went wrong while trying to dump them."

	exit -4
fi

echo "Data collected and stored at $DATA_PATH"
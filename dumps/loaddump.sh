#!/bin/bash

#A script to automatically load a postgresql dump into the database.
#Usage bash dumps/loaddump.sh dumpPath or bash dumps/loaddump.sh
#If no argument is provided, it will load the latest dump. Otherwise, it will try to load the file pass as argument.

if [ -z "$1" ]
then
  #Get last dump
  dumpFile=`find . -type f -name "*.sql" -o -name "*.bak" -printf '%T@ %p\n' | sort -n | tail -1 | cut -f2- -d" "`
else
  dumpFile=$1
fi

if [ -z "$dumpFile" ] || [ ! -f "$dumpFile" ]
then
    echo "File '$dumpFile' does not exist."
    exit 1
fi

read -p "The dump $dumpFile is going to be restored into your database. Are you sure? (Type 'y' to continue) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi

sudo -u postgres dropdb escapp_prod
sudo -u postgres createdb escapp_prod
sudo -u postgres psql escapp_prod < $dumpFile
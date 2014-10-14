#!/bin/bash

#start mongod service
/usr/bin/mongod --config ~/www/EA/mongodb.config --dbpath ~/www/db/ --fork --logpath ~/www/EA/log/mongod.log
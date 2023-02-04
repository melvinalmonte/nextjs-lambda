#!/bin/bash

BUILD_FOLDER=.dist

echo "Building Next.js app"
npm run build

echo "removing $BUILD_FOLDER"
rm -rf $BUILD_FOLDER

echo "creating $BUILD_FOLDER"
mkdir $BUILD_FOLDER

echo "copying files from .next/standalone/ to $BUILD_FOLDER"
cp -r .next/standalone/ $BUILD_FOLDER/

echo "copying .next/static to $BUILD_FOLDER/.next"
cp -r .next/static $BUILD_FOLDER/.next

echo "Removing standalone server.js"
rm $BUILD_FOLDER/server.js

echo "Repacing server.js with server.ts to $BUILD_FOLDER"
cp server.ts $BUILD_FOLDER/

echo "copying next config to $BUILD_FOLDER"
cp -r next.config.js $BUILD_FOLDER/

echo "copying serverless config to $BUILD_FOLDER"
cp serverless.yaml $BUILD_FOLDER/

echo "copying public to $BUILD_FOLDER"
cp -r public $BUILD_FOLDER/

echo "changing directory to $BUILD_FOLDER"
cd $BUILD_FOLDER

echo "deploying app to serverless"
sls deploy

# echo "Packaging app for lambda"
# sls package

# NOTE TO SELF: Until you learn how the serverless packaging works, you can just stop at line number 38
# comment out sls deploy and replace it with sls package instead, then take the generated zip and upload it to AWS Lambda
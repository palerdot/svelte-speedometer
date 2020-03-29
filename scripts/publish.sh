#!/bin/bash

# IMPORTANT
# ---------
# This is an auto generated file with React CDK.
# Do not modify this file.
# Use `.scripts/user/prepublish.sh instead`.

echo "=> Running tests"
npm run test
echo "=> Finishing tests"

echo "=> Bundling package"
echo ""
rm -rf ./dist
npm run build

echo ""
echo "copying typescript definition file (index.d.ts)"
cp ./src/index.d.ts ./dist/
echo "copied !!! typescript definition file (index.d.ts)"

echo ""
echo "=> Bundling completed."

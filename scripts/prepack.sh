#!/bin/bash

### npm does not copy symlinks
### force copy the core files and then once done reset the stuffs in postpack.sh
echo "=> removing existing core files"
rm -rf src/core
echo "=> Copying CORE files and replacing SYMLINKS"
cp -Rfv lib/d3-speedometer/src/core src/
echo "=> Copied CORE files and replacing SYMLINKS"

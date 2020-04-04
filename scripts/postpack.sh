#!/bin/bash

### resetting the freshly copied CORE files
echo "=> removing freshly copied CORE files and replacing SYMLINKS"
rm -rf src/core
echo "=> and restoring SYMLINKS"
ln -s lib/d3-speedometer/src/core src/
echo "=> Restored symlinked CORE"
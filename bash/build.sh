#!/usr/bin/env bash

set -eu

cd "$(dirname "${0}")"

cd ..

yarn

mkdir -p dist
rm -rf modules
mkdir -p modules/nested-list/dist

find ./dist -type f -delete
find ./dist -type d -not -path . | xargs -I {} rm -rf ./dist/{}

npm run build

cp dist/* modules/nested-list/dist
cp package.json modules/nested-list

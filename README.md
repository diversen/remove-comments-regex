# remove-comments

Remove comments from a string using a regex

This means comments are removed in a primitive way

## Install

    npm install --save remove-comments

## Usage

    var removeComments = require('remove-comments')
    var noComments = removeComments(someStr)

## Usage CLI

    npm install -g remove-comments
    remove-comments test.txt > test-no-comments.txt

## See 

Uses this regex: https://stackoverflow.com/a/15123777/464549

## License

MIT © [Dennis Iversen](https://github.com/diversen)
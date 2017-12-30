# remove-comments

Remove comments from a string using a regex

This means comments are removed in a primitive way

## Install

    npm install --save remove-comments-regex

## Usage

    var removeComments = require('remove-comments-regex')
    var noComments = removeComments(someStr)

## Usage CLI

    npm install -g remove-comments-regex
    remove-comments-regex test.txt > test-no-comments.txt

## See 

Uses this regex: https://stackoverflow.com/a/15123777/464549

## License

MIT © [Dennis Iversen](https://github.com/diversen)

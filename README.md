# Read-first-line

Read first line of the file. Works fine with LF and CRLF line endings.

## Install

```sh
npm install read-first-line
```

## Usage

```js
const readFirstLine = require("read-first-line");

readFirstLine("./file.txt").then((result) => {
  console.log("first line is: " + result);
});
```

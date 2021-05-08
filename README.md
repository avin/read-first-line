# Read-first-line

Read first line of the file

## Install

```bazaar
npm install read-first-line
```

## Usage

```js
const { readFirstLine } = require("read-first-line");

readFirstLine("./file.txt").then((result) => {
  console.log("first line is: " + result);
});
```

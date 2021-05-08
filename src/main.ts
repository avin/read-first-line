import * as fs from "fs";

function readFirstLine(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const rs = fs.createReadStream(filePath, { encoding: "utf8" });
    let acc = "";
    let pos = 0;
    let index: number;
    rs.on("data", function (chunk: string) {
      index = chunk.indexOf("\r\n");
      if (index === -1) {
        index = chunk.indexOf("\n");
      }
      acc += chunk;
      index !== -1 ? rs.close() : (pos += chunk.length);
    })
      .on("close", function () {
        resolve(acc.slice(0, pos + index));
      })
      .on("error", function (err: Error) {
        reject(err);
      });
  });
}

export = readFirstLine;

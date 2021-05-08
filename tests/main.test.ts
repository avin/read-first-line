import * as path from "path";
import readFirstLine = require("../src/main");

test("success read", async () => {
  const firstLine = await readFirstLine(path.join(__dirname, "test-file.txt"));
  expect(firstLine).toBe("first line");
});

test("success read empty file", async () => {
  const firstLine = await readFirstLine(
    path.join(__dirname, "test-empty-file.txt")
  );
  expect(firstLine).toBe("");
});

test("file not exists", async () => {
  expect.assertions(1);
  try {
    await readFirstLine(path.join(__dirname, "invalid-file.txt"));
  } catch (e) {
    expect(e.message).not.toBeUndefined();
  }
});

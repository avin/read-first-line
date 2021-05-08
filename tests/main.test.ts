import * as path from "path";
import readFirstLine = require("../src/main");

test("success read", async () => {
  const firstLine = await readFirstLine(path.join(__dirname, "test-lf.txt"));
  expect(firstLine).toBe("first line");
});

test("success CRLF read", async () => {
  const firstLine = await readFirstLine(path.join(__dirname, "test-crlf.txt"));
  expect(firstLine).toBe("first line");
});

test("success windows-1251 read", async () => {
  const firstLine = await readFirstLine(path.join(__dirname, "test-windows-1251.txt"));
  expect(firstLine).toBe("first line");
});

test("success read empty file", async () => {
  const firstLine = await readFirstLine(
    path.join(__dirname, "test-empty.txt")
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

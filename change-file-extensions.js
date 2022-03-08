#!/usr/bin/env node

const glob = require("glob");
const path = require("path");
const fs = require("fs/promises");

async function renameFileExtension(cwd, from, to) {
  try {
    const matches = await new Promise((resolve, reject) =>
      glob(`**/*${from}`, { cwd, nodir: true }, (err, matches) =>
        err ? reject(err) : resolve(matches)
      )
    );
    await matches.reduce(async (last, match) => {
      await last;
      const newPath = match.substr(0, match.length - from.length) + to;
      return fs.rename(match, newPath);
    }, null);
  } catch (e) {
    console.log("Could not rename: " + e);
  }
}

if (!process.argv[2] || !process.argv[3]) {
  throw new Error(`Not enough arguments!`);
}
renameFileExtension(process.cwd(), process.argv[2], process.argv[3]);

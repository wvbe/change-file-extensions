A tiny tool to rename all files in a directory (and subdirectories) from one file extension to another.

I wrote this code because it is easier to install than other tools, that may depend on `find`, `mmv`
and other non-cross-platform software.

```sh
# Change the file extension of **/*.ts files to .js
npx wvbe/change-file-extensions .js .ts
```

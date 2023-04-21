# Interacting with the File system

Node uses FS and Path to manage file system.


# FS

A module to reading, writing, file system meta-data and file system watching.

example in file_system.js


Writefile flags:

| Flag | Description |
|------|-------------|
| r    | Open file for reading. An exception occurs if the file does not exist. |
| r+   | Open file for reading and writing. An exception occurs if the file does not exist. |
| rs   | Open file for reading in synchronous mode. |
| rs+  | Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution. |
| w    | Open file for writing. The file is created (if it does not exist) or truncated (if it exists). |
| wx   | Like 'w' but fails if the path exists. |
| w+   | Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists). |
| wx+  | Like 'w+' but fails if path exists. |
| a	   | Open file for appending. The file is created if it does not exist.
| ax   | Like 'a' but fails if the path exists.
| a+   | Open file for reading and appending. The file is created if it does not exist.
| ax+  | Like 'a+' but fails if the the path exists.



# File stream

The fs module has fs.createReadStream and fs.createWriteStream methods which allow us to read and write files in chunks. Streams are ideal when handling very large files that can be processed incrementally.


When an fs module function name ends with the word Sync, what does this signify?
That the operation will block the process from executing any more code until the operation has completed
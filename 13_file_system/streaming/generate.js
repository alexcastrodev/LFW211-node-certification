const fs = require('fs');

const fileSizeInBytes = 1024 * 1024 * 1024 * 8; // 1GB
const chunkSize = 1024 * 64; // 64KB (adjust this value as per your requirements)
const iterations = Math.ceil(fileSizeInBytes / chunkSize);
const buffer = Buffer.alloc(chunkSize);

const filePath = './files/bigger.txt';

function writeChunk(fd, position, remainingIterations) {
  if (remainingIterations === 0) {
    fs.closeSync(fd);
    console.log('File created successfully.');
    return;
  }

  fs.write(fd, buffer, 0, buffer.length, position, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      const nextPosition = position + chunkSize;
      writeChunk(fd, nextPosition, remainingIterations - 1);
    }
  });
}

fs.open(filePath, 'w', (err, fd) => {
  if (err) {
    console.error('Error opening file:', err);
  } else {
    writeChunk(fd, 0, iterations);
  }
});
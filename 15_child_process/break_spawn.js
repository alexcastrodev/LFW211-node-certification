const { exec, spawn } = require('child_process');
const fs = require('fs');

const filePath = '6mb_file_test.csv';
let bytesRead = 0;

const child = spawn('cat', [filePath]);
// child.stdout.pipe(process.stdout)

// const filePath = 'small_file_test.csv';
// const fileSize = fs.statSync(filePath).size;

// exec(`cat ${filePath}`, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.error(`stderr: ${stderr}`);
// });

child.stdout.on('data', (data) => {
    bytesRead += data.length;
    console.log(data)
})

// child.stdout.on('end', () => {
//   console.log(`Read ${bytesRead} bytes from ${fileSize} byte file`);
// });
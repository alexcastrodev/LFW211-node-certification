import { execFile } from "child_process";

execFile("node", ["-e", "console.log('subprocess stdio output')"], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  setTimeout(() => {
    console.log(stdout);
  }, 10000);
})


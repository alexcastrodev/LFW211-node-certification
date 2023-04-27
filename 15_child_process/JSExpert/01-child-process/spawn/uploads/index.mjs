import { spawn } from "child_process"

const url = "http://localhost:3000"
const filePath = "data.csv"
const pythonFile = "index.py"
const pythonCommand = "python3"
const pythonArgs = [pythonFile, JSON.stringify({ url, filePath })]

const py = spawn(pythonCommand, pythonArgs, {
    cwd: "uploads",
})

const dataString = []
for await(const data of py.stdout) {
    dataString.push(data)
}

dataString.join("").toString()
console.log(dataString)
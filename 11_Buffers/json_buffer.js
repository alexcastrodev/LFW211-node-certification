
const data = { type: "Buffer", data: [240, 159, 145, 128 ] }

const json_encoded = JSON.stringify(data)
console.log(json_encoded)

const json_decoded = JSON.parse(json_encoded)
console.log(json_decoded)

const buffer = Buffer.from(json_decoded.data)
console.log("buffer:", buffer)
console.log(buffer.toString())

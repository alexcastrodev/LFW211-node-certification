import { randomUUID } from 'crypto';
import { createWriteStream } from 'fs';
import { createServer } from 'http';
import { pipeline } from 'stream/promises';

createServer(async (req, res) => {
    const filename = `./file/${randomUUID()}.csv`

    await pipeline(
        req,
        createWriteStream(filename)
    )

    res.end('ok')
}).listen(3000)
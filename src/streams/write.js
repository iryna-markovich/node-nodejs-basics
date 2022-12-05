import { Writable } from 'stream'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const write = async () => {
  const pathToFile = path.resolve(__dirname, 'files/fileToWrite.txt')

  const outStream = new Writable({
    write(chunk, encoding, callback) {
      fs.appendFile(pathToFile, chunk, encoding, callback)
    },
  })

  process.stdin.pipe(outStream)
}

await write()

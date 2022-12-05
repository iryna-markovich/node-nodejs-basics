import { Readable } from 'stream'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
  const pathToFile = path.resolve(__dirname, 'files/fileToRead.txt')

  const inStream = new Readable({
    read() {},
  })
  
  fs.readFile(pathToFile, 'utf-8', (err, data) => {
    inStream.push(data)
  })

  inStream.pipe(process.stdout)
}

await read()

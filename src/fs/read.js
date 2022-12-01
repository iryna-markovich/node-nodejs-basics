import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
  const pathToFile = path.resolve(__dirname, 'files/fileToRead.txt')

  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if (err) {
      throw Error('FS operation failed')
    }

    console.log(data)
  })
}

await read()

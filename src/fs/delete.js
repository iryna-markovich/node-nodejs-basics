import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const remove = async () => {
  const pathToFile = path.resolve(__dirname, 'files/fileToRead.txt')

  fs.unlink(pathToFile, (err) => {
    if (err) throw Error('FS operation failed')
  })
}

await remove()

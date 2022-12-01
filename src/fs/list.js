import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const list = async () => {
  const pathToDir = path.resolve(__dirname, 'files')

  fs.stat(pathToDir, (err, stats) => {
    if (err) {
      throw Error('FS operation failed')
    }

    fs.readdir(pathToDir, (err, files) => {
      files.forEach((file) => {
        console.log(file)
      })
    })
  })
}

await list()

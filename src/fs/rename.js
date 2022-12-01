import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rename = async () => {
  const oldPathToFile = path.resolve(__dirname, './files/wrongFilename.txt')
  const newPathToFile = path.resolve(__dirname, './files/properFilename.md')

  fs.stat(newPathToFile, (err, stats) => {
    if (stats) {
      throw new Error('FS operation failed')
    }

    fs.rename(oldPathToFile, newPathToFile, (err) => {
      if (err) throw Error('FS operation failed')
    })
  })
}

await rename()

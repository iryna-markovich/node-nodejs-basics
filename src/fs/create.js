import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const create = async () => {
  const pathToFile = path.resolve(__dirname, 'files/fresh.txt')

  fs.stat(pathToFile, (err, stats) => {
    if (stats) {
      throw new Error('FS operation failed')
    }

    fs.writeFile(pathToFile, 'I am fresh and young', 'utf8', (err) => {})
  })
}

await create()

import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const copy = async () => {
  const pathToSourceDir = path.resolve(__dirname, 'files')
  const pathToDestinationDir = path.resolve(__dirname, 'files_copy')

  fs.stat(pathToSourceDir, (err, stats) => {
    if (err) {
      throw Error('FS operation failed')
    }

    fs.stat(pathToDestinationDir, (err, stats) => {
      if (stats) {
        throw Error('FS operation failed')
      }

      fs.cp(
        pathToSourceDir,
        pathToDestinationDir,
        { recursive: true },
        (err) => {}
      )
    })
  })
}

copy()

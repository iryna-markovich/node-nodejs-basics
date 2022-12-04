import { createUnzip } from 'zlib'
import path from 'path'
import { fileURLToPath } from 'url'
import { createReadStream, createWriteStream, unlink } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const decompress = async () => {
  const pathToFile = path.resolve(__dirname, 'files/archive.gz')
  const pathToDestination = path.resolve(__dirname, 'files/fileToCompress.txt')

  const inStream = createReadStream(pathToFile)
  const outStream = createWriteStream(pathToDestination)
  const unzip = createUnzip()

  const deleteFile = () => {
    unlink(pathToFile, () => {})
  }

  inStream.pipe(unzip).pipe(outStream).on('finish', deleteFile)
}

await decompress()

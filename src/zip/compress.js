import { createGzip } from 'zlib'
import path from 'path'
import { fileURLToPath } from 'url'
import { createReadStream, createWriteStream, unlink } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compress = async () => {
  const pathToFile = path.resolve(__dirname, 'files/fileToCompress.txt')
  const pathToDestination = path.resolve(__dirname, 'files/archive.gz')

  const inStream = createReadStream(pathToFile)
  const outStream = createWriteStream(pathToDestination)
  const zip = createGzip()

  const deleteFile = () => {
    unlink(pathToFile, () => {})
  }

  inStream.pipe(zip).pipe(outStream).on('finish', deleteFile)
}

await compress()

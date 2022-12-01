import crypto from 'crypto'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const calculateHash = async () => {
  const pathToFile = path.resolve(__dirname, 'files/fileToCalculateHashFor.txt')

  fs.readFile(pathToFile, 'utf-8', (e, data) => {
    const hmac = crypto.createHmac('sha256', data)

    console.log(hmac.digest('hex'))
  })
}

await calculateHash()

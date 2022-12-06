import { fork } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const spawnChildProcess = async (args) => {
  const pathToFile = path.resolve(__dirname, 'files/script.js')

  fork(pathToFile, args)
}

await spawnChildProcess()

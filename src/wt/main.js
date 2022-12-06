import { Worker } from 'node:worker_threads'
import os from 'os'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const createWorker = (counter) => {
  const pathToFile = path.resolve(__dirname, 'worker.js')

  return new Promise((resolve, reject) => {
    const worker = new Worker(pathToFile, {
      workerData: { counter },
    })

    worker.on('message', (data) => {
      resolve({ status: 'resolved', data })
    })
    worker.on('error', (err) => {
      reject({ status: 'error', data: null })
    })
  })
}

const performCalculations = async () => {
  const cpuCoresQty = os.cpus().length
  const promisies = []

  let counter = 10

  for (let i = 0; i < cpuCoresQty; i++) {
    const worker = createWorker(counter)
    counter++

    promisies.push(worker)
  }

  const result = await Promise.all(promisies)

  console.log(result)
}

await performCalculations()

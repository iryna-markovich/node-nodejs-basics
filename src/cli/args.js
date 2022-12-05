const args = process.argv.slice(2)

const parseArgs = () => {
  const result = args
    .map((arg, index) => {
      const start = `${arg.slice(2)} is `
      const end = args.length - 1 === index ? arg : `${arg}, `

      return index % 2 ? end : start
    })
    .join('')

  console.log(result)
}

parseArgs()

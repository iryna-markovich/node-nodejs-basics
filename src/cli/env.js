const parseEnv = () => {
  return Object.entries(process.env).map(([key, value]) =>
    console.log(`RSS_${key}=${value};`)
  )
}

parseEnv()

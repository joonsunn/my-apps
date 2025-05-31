import { readAndPrintFile } from './1-read-and-print-file/readAndPrintFile'

async function main() {
  readAndPrintFile()
}

main().catch((error) => {
  console.error('Unhandled error in main():', error)
  process.exit(1)
})

// Graceful shutdown
function handleExit(signal: string) {
  console.log(`\nReceived ${signal}. Cleaning up and exiting...`)
  // Perform any cleanup here (e.g., closing DB connections, files, etc.)
  process.exit(0)
}

process.on('SIGINT', () => handleExit('SIGINT')) // Ctrl+C
process.on('SIGTERM', () => handleExit('SIGTERM')) // kill command or docker stop
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err)
  process.exit(1)
})
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason)
  process.exit(1)
})

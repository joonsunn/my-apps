import { writeFile } from 'fs/promises'

/**
 *
 * @param outputFilePath
 * @param data
 */

async function writeFileAsync<T>(outputFilePath: string, data: T) {
  await writeFile(outputFilePath, JSON.stringify(data, null, 2))
}

export { writeFileAsync }

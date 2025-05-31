import { readFile } from 'fs/promises'
import { resolve } from 'path'

/**
 * Read file async
 * @param filepath The path to the file. If using relative path (e.g. './data.json'), pass in `__dirname` for the `dirname` param
 * @param dirname Defaults to 'src', if not specified.
 * @returns
 */

async function readFileAsync<T>(filepath: string, dirname: string = 'src') {
  const absoluteFilePath = resolve(dirname, filepath)
  const fileContent = await readFile(absoluteFilePath, 'utf8')
  const data = JSON.parse(fileContent) as T
  return data
}

export { readFileAsync }

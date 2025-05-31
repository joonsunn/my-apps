import { Person } from '@/1-read-and-print-file/types'
import { getRandomInt, readFileAsync } from '@packages/utils'

export async function readAndPrintFile() {
  const data = await readFileAsync<Person[]>('./data.json', __dirname)

  console.dir(data)
  console.table(data)

  const randomInt = getRandomInt(0, 100)
  console.log(randomInt)
}

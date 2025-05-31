import { describe, expect, test } from 'vitest'
import { sleep } from '../sleep'

describe('sleep utils', () => {
  const marginOfError = 0.999

  test('should sleep for exactly 100ms', async () => {
    const sleepTime = 100
    const expectedSleepTime = Math.floor(sleepTime * marginOfError)
    const start = Date.now()
    await sleep(sleepTime)
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(expectedSleepTime)
  })
})

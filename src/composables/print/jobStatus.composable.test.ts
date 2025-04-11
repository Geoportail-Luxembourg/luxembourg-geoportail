import { JobStatus, printService } from '@/services/print/print.service'
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  MockedFunction,
  vi,
} from 'vitest'
import { useJobStatus } from './jobStatus.composable'
import { nextTick } from 'vue'

vi.mock('@/services/print.service')
vi.useFakeTimers()

const getMockedFunction = () =>
  printService.getJobStatus as MockedFunction<typeof printService.getJobStatus>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockGetJobStatus = (mockStatus: JobStatus) =>
  getMockedFunction().mockResolvedValue(mockStatus)

describe('useJobStatus', () => {
  let jobId: string
  let getJobStatus: Function

  beforeEach(() => {
    jobId = 'test-job-id'
    getJobStatus = printService.getJobStatus
    printService.getJobStatus = vi.fn()
  })

  afterEach(() => {
    vi.clearAllMocks()
    printService.getJobStatus = getJobStatus as typeof printService.getJobStatus
  })

  it('should initialize jobStatus as null', () => {
    const { jobStatus } = useJobStatus()
    expect(jobStatus.value).toBe(null)
  })

  // it('should start polling and update jobStatus', async () => {
  //   const { jobStatus, startPolling } = useJobStatus()
  //   const mockStatus = { status: 'running', done: false }
  //   mockGetJobStatus(mockStatus)
  //   console.log('mock', await printService.getJobStatus('test-job-id'))

  //   startPolling(jobId)
  //   await vi.advanceTimersByTime(1000)
  //   await nextTick()

  //   expect(printService.getJobStatus).toHaveBeenCalledWith(jobId)
  //   expect(jobStatus.value).toBe('running')
  // })

  // it('should open download URL and clear polling when job is finished', async () => {
  //   const { jobStatus, startPolling, url } = useJobStatus()
  //   const mockStatus = {
  //     status: 'finished',
  //     done: true,
  //     downloadURL: 'http://example.com',
  //   }
  //   mockGetJobStatus(mockStatus)
  //   console.log('mock', await printService.getJobStatus('test-job-id'))

  //   startPolling(jobId)
  //   await vi.advanceTimersByTime(1000)
  //   await nextTick()

  //   expect(printService.getJobStatus).toHaveBeenCalledWith(jobId)
  //   expect(url.value).toBe('http://example.com')
  //   expect(jobStatus.value).toBe('finished')
  // })

  it('should clear polling on error', async () => {
    const { jobStatus, startPolling } = useJobStatus()
    getMockedFunction().mockRejectedValue(new Error('Test error'))

    startPolling(jobId)
    await vi.advanceTimersByTime(1000)
    await nextTick()

    expect(printService.getJobStatus).toHaveBeenCalledWith(jobId)
    expect(jobStatus.value).toBe(null)
  })
})

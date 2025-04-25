import { printService } from '@/services/print/print.service'
import {
  JobStatus,
  MapFishPrintStatusResponse,
} from '@/services/print/print.model'
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

  it('should start polling and update jobStatus', async () => {
    const { jobStatus, startPolling } = useJobStatus()
    const mockStatus = {
      status: <MapFishPrintStatusResponse>'running',
      done: false,
    }

    mockGetJobStatus(mockStatus)
    startPolling(jobId)
    vi.advanceTimersByTime(1000)
    await nextTick()

    expect(printService.getJobStatus).toHaveBeenCalledWith(jobId)
    expect(jobStatus.value).toBe('running')
  })

  it('should open download URL and clear polling when job is finished', async () => {
    const { jobStatus, startPolling, url } = useJobStatus()
    const mockStatus = {
      status: <MapFishPrintStatusResponse>'finished',
      done: true,
      downloadURL: 'http://example.com',
    }

    mockGetJobStatus(mockStatus)
    startPolling(jobId)
    vi.advanceTimersByTime(1000)
    await nextTick()

    expect(printService.getJobStatus).toHaveBeenCalledWith(jobId)
    expect(url.value).toBe('http://example.com')
    expect(jobStatus.value).toBe(null) // null because we clear polling
  })

  it('should clear polling on error', async () => {
    const { jobStatus, startPolling } = useJobStatus()
    getMockedFunction().mockRejectedValue(new Error('Test error'))

    startPolling(jobId)
    vi.advanceTimersByTime(1000)
    await nextTick()

    expect(printService.getJobStatus).toHaveBeenCalledWith(jobId)
    expect(jobStatus.value).toBe(null)
  })
})

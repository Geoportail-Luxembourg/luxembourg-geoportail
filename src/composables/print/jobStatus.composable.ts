import { printService } from '@/services/print.service'
import { onUnmounted, ref, Ref } from 'vue'

const POLLING_INTERVAL = 1000

export function useJobStatus() {
  const jobStatus: Ref<string | null> = ref(null)
  const url: Ref<string | null> = ref(null)
  const error: Ref<boolean> = ref(false)
  let intervalId: number | null = null

  const pollJobStatus = async (jobId: string) => {
    try {
      const { status, done, downloadURL } = await printService.getJobStatus(
        jobId
      )
      jobStatus.value = status
      if (status === 'error') {
        error.value = true
        clearPolling()
      }
      if (status === 'finished' && done && downloadURL) {
        url.value = downloadURL
        clearPolling()
      }
    } catch (_error) {
      clearPolling()
    }
  }

  const startPolling = (jobId: string, interval = POLLING_INTERVAL) => {
    error.value = false
    clearPolling() // Ensure no previous polling is running
    intervalId = window.setInterval(() => pollJobStatus(jobId), interval)
  }

  const clearPolling = () => {
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
    jobStatus.value = null
  }

  onUnmounted(() => clearPolling())

  return { jobStatus, url, startPolling, error }
}

import { printService } from '@/services/print/print.service'
import { onUnmounted, ref, Ref } from 'vue'

const POLLING_INTERVAL = 1000

function jobInError(status: string | number) {
  return (
    (typeof status === 'number' && status >= 400 && status <= 500) ||
    status === 'error'
  )
}

export function useJobStatus() {
  const jobStatus: Ref<string | null> = ref(null)
  const url: Ref<string | null> = ref(null)
  const error: Ref<boolean> = ref(false)
  const loading = ref(false)
  let intervalId: number | null = null

  const pollJobStatus = async (jobId: string) => {
    try {
      const { status, done, downloadURL } = await printService.getJobStatus(
        jobId
      )
      jobStatus.value = status
      if (jobInError(status)) {
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
    loading.value = true
    intervalId = window.setInterval(() => pollJobStatus(jobId), interval)
  }

  const clearPolling = () => {
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
    jobStatus.value = null
    loading.value = false
    error.value = false
  }

  onUnmounted(() => clearPolling())

  return { jobStatus, url, startPolling, clearPolling, error, loading }
}

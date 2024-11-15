import { printService } from '@/services/print.service'
import { onUnmounted, ref, Ref } from 'vue'

const POLLING_INTERVAL = 1000

export function useJobStatus() {
  const jobStatus: Ref<string | null> = ref(null)
  let intervalId: number | null = null

  const pollJobStatus = async (jobId: string) => {
    try {
      const { status, done, downloadURL } = await printService.getJobStatus(
        jobId
      )
      jobStatus.value = status
      if (status === 'finished' && done && downloadURL) {
        window.open(downloadURL, '_blank')
        clearPolling()
      }
    } catch (_error) {
      clearPolling()
    }
  }

  const startPolling = (jobId: string, interval = POLLING_INTERVAL) => {
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

  return { jobStatus, startPolling }
}

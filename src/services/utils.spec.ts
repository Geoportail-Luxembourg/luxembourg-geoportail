import { debounce } from './utils'

const mock = vi.fn(() => 'function to be debounced')

describe('#debounce', () => {
  let debouncedFn: Function

  beforeEach(() => {
    vi.useFakeTimers()
    debouncedFn = debounce(mock, 100)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('execute given function just once, with delay', () => {
    for (let i = 0; i < 42; i++) {
      debouncedFn()
    }

    vi.runAllTimers()
    expect(mock).toHaveBeenCalledTimes(1)
  })

  it('execute every 100ms', () => {
    for (let i = 0; i < 5; i++) {
      debouncedFn()
      vi.advanceTimersByTime(100)
    }

    expect(mock).toHaveBeenCalledTimes(5)
  })
})

/**
 * Build entry: adds the Tailwind sheet on top of `./index`. Source consumers
 * import `./index` directly and so get no duplicate utility layer.
 */
import './tailwind.css'

export * from './index'

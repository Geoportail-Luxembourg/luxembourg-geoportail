/**
 * Build entry for the published package.
 *
 * It exists only to pull the Tailwind directives into the bundle's stylesheet;
 * everything else comes from `./index`. Source consumers (the geoportail app,
 * which runs its own Tailwind pass over these files) import `./index` directly
 * and so never see a second copy of the utility layer.
 */
import './tailwind.css'

export * from './index'
export { default } from './index'

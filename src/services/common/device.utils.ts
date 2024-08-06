// tailwind breakpoints
const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export function screenSizeIsAtLeast(size: keyof typeof breakpoints): boolean {
  return window.innerWidth >= breakpoints[size]
}

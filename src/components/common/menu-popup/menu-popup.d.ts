export type MenuPopupItem = {
  label: string
  action?: (event?: MouseEvent) => void
  separator?: boolean
}

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('default').format(date)
}

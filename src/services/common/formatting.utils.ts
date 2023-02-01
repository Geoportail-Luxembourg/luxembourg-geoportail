export function formatDate(dateString: string, language: string = 'fr-FR') {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(language).format(date)
}

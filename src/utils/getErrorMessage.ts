export default function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  if (error instanceof Object) return `${error.status} ${error.statusText}`
  return String(error)
}

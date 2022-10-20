export const readStorageInitialValue = (
  storage: Storage,
  key: string,
) => {
  const rawValue = storage.getItem(key)
  if (rawValue) {
    try {
      return JSON.parse(rawValue)
    } catch (error) {
      return null
    }
  }
  return null
}

import { useState, useEffect } from 'react'

import { readStorageInitialValue } from './helpers'

const defaultValidator = () => true

type TArgs<T> = {
  clearOnUnmount?: boolean,
  defaultValue: T,
  key: string,

  /**
   * функция для валидации полученного значения из стора,
   * если значение не валидно то используется defaultValue.
   * Если не передан валидатор, то полученное значение из storage
   * считается валидным.
   */
  validator?: (value: T) => boolean,
}

/**
 * Хук высшего порядка, получает storage
 * и возвращает хук работающий с данным storage
 * Хук считывает значение из стора и использует как начальное значение стейта,
 * при вызове сеттера обновляется storage и реакт стейт
 */
const createHook = (storage: Storage) => (
  <T extends any>({
    clearOnUnmount,
    defaultValue,
    key,
    validator = defaultValidator,
  }: TArgs<T>) => {
    const getInitialState = () => {
      const storeValue = readStorageInitialValue(storage, key)
      const isValid = validator(storeValue)

      return isValid ? storeValue : defaultValue
    }

    const [state, setState] = useState<T>(getInitialState())

    useEffect(() => {
      const storeValue = readStorageInitialValue(storage, key)
      const isValid = validator(storeValue)
      if (!isValid) {
        storage.removeItem(key)
      }
    }, [key, validator])

    useEffect(() => {
      storage.setItem(key, JSON.stringify(state))
    }, [key, state])

    useEffect(() => {
      if (clearOnUnmount) return () => storage.removeItem(key)
      return undefined
    }, [key, clearOnUnmount])

    return [state, setState] as const
  }
)

export const useLocalStore = createHook(localStorage)

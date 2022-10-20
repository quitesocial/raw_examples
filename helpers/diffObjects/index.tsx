import transform from 'lodash/transform'
import isEqual from 'lodash/isEqual'

type TObj = {
  [key: string]: any,
}

/**
 * Сравнивает объекты с одинаковыми ключами и возвращает объект с измененными полями
 * @param targetObj Целевой объект, в котором ищутся измененные поля
 * @param sourceObj Объект, с которым сравнивается целевой объект
 * @returns Объект с измененными полями
 */
export const diffObjects = <T extends TObj>(
  targetObj: T,
  sourceObj: T,
) => transform<any, Partial<T>>(
  targetObj,
  (
    result,
    value,
    key,
  ) => {
    if (!isEqual(value, sourceObj[key])) {
    // eslint-disable-next-line no-param-reassign
      result[key as keyof T] = value
    }
  },
  {} as Partial<T>,
)

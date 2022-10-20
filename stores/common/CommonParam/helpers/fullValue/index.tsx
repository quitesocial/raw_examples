import isNil from 'lodash/isNil'

import { MDASH } from 'config/emptyValue'
import { formatTimeMMSS } from 'helpers/formatTimeMMSS'

type TFullValue = {
  data_type?: string,
  id?: number,
  roundedVal: number | null,
}

type TValueToStringOrDash = {
  data_type?: string,
  value: number | null,
}

const valueToStringOrDash = ({
  data_type,
  value,
}: TValueToStringOrDash) => {
  const formattedValue = data_type === 'mm:ss'
    ? formatTimeMMSS(Number(value))
    : value
  return (
    value ? String(formattedValue) : MDASH
  )
}

export const fullValue = ({
  data_type,
  roundedVal,
}: TFullValue) => (
  data_type === 'pct' && !isNil(roundedVal)
    ? `${roundedVal}%`
    : valueToStringOrDash({
      data_type,
      value: roundedVal,
    })
)

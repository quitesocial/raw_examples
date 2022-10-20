import React, {
  Fragment,
  useMemo,
} from 'react'
import { observer } from 'mobx-react-lite'

import { useCountUp } from 'react-countup'

import round from 'lodash/round'
import isNull from 'lodash/isNull'

import { isBasketOrFootball } from 'config/routes'

import { T9n } from 'features/T9n'
import { WrappedLoader } from 'features/Loader'

import { useFetchingHandler } from 'hooks/useFetching'

import { TeamVideoCutsUI } from 'layout/TeamVideoCutsUI'
import { PlayerSkillsUI } from 'layout/PlayerSkillsUI'

import { useButton } from './hooks'

const {
  ButtonTitle,
  ButtonWrapper,
  Value,
} = PlayerSkillsUI
const { ButtonStyledI } = TeamVideoCutsUI

type TButton = {
  percent: number | null,
  skillId: number,
  title: number | string,
}

const ButtonFC = ({
  percent,
  skillId,
  title,
}: TButton) => {
  const { clickHandler } = useButton()
  const value = round(Number(percent))
  const { countUp } = useCountUp({ duration: 1.5, end: value })
  const { handleEvent, isFetching } = useFetchingHandler(clickHandler)

  const percentValue = useMemo(
    () => (isBasketOrFootball ? 0 : value),
    [value]
  )

  return (
    <ButtonWrapper
      onClick={() => handleEvent({ skillId, title })}
      lineLength={percentValue}
      isDisabled={isFetching || isNull(percent)}
    >
      {
        isFetching
          ? <WrappedLoader diameter={10} />
          : (
            <Fragment>
              <ButtonStyledI />
              <ButtonTitle>
                <T9n t={String(title)} />
              </ButtonTitle>
              <Value>
                {percentValue !== 0 && `${countUp}%`}
              </Value>
            </Fragment>
          )
      }
    </ButtonWrapper>
  )
}

export const Button = observer(ButtonFC)

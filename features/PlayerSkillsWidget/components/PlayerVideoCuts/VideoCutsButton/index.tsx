import React, { Fragment, useCallback } from 'react'
import { observer } from 'mobx-react-lite'

import { WrappedLoader } from 'features/Loader'

import { useFetchingHandler } from 'hooks/useFetching'

import { TeamVideoCutsUI } from 'layout/TeamVideoCutsUI'

import { TButton } from 'stores/videoCutButtons/helpers/types'

import { useButton } from '../../Button/hooks'

const {
  ButtonStyledI,
  ButtonTitle,
  ButtonTitleWrapper,
  StyledLi,
} = TeamVideoCutsUI

export type TButtonParams = {
  buttonParams: TButton,
}

const VideoCutsButtonFC = ({ buttonParams }: TButtonParams) => {
  const {
    clickable,
    line1,
    line2,
    skillId,
  } = buttonParams

  const { clickHandler } = useButton()
  const { handleEvent, isFetching } = useFetchingHandler(clickHandler)

  const title = line2?.lexic || line1?.lexic

  const onClick = useCallback(
    () => () => {
      if (title) {
        handleEvent({ skillId, title })
      }
    },
    [
      handleEvent,
      skillId,
      title,
    ]
  )

  return (
    <StyledLi isDisabled={!clickable} onClick={onClick}>
      {
        isFetching
          ? <WrappedLoader diameter={10} />
          : (
            <Fragment>
              <ButtonStyledI />
              <ButtonTitleWrapper wideButtonText>
                <ButtonTitle
                  isLexicBold={line1?.bold}
                  t={line1?.lexic || ''}
                />
                <ButtonTitle
                  isLexicBold={line2?.bold}
                  t={line2?.lexic || ''}
                />
              </ButtonTitleWrapper>
            </Fragment>
          )
      }
    </StyledLi>
  )
}

export const VideoCutsButton = observer(VideoCutsButtonFC)

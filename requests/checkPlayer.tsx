import get from 'lodash/get'

import { PROCEDURES } from 'config/procedures'
import { ACCOUNT_DATA_URL, SPORT } from 'config/routes'
import { SCOUTS } from 'config/scouts'

import { callApi } from 'helpers/callApi'
import { getResponseData } from 'helpers/getResponseData'

const proc = PROCEDURES.lst__dictionary_by_param
const dictionaryName = 'followed_players_exists'
const url = ACCOUNT_DATA_URL

type TCheckPlayer = Array<{
  folder_id: number,
  player_in_list: boolean,
}> | null

export const checkPlayer = async (
  lang: string,
  playerId: number,
): Promise<TCheckPlayer> => {
  const config = {
    body: {
      params: {
        _p_dictionary_name: dictionaryName,
        _p_lang: lang,
        _p_params: {
          _p_c_player_id: playerId,
          _p_c_sport_type: SCOUTS[SPORT],
          _p_scout_id: 0,
        },
        _p_user_id: 0,
      },
      proc,
    },
  }

  const response = await callApi({
    config,
    url,
  })

  const data = getResponseData(proc)(response)

  const playerInList = get(
    data,
    '[0].player_in_list',
    false,
  )

  return playerInList
}

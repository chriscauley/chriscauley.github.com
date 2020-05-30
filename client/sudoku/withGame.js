import React from 'react'
import ConfigHook from '@unrest/react-config-hook'

import fetchCTC from './fetchCTC'
import Board from './Board'

const schema = {}

const uiSchema = {}

const actions = {
  loadCTC: (store, slug) => {
    if (store.state.current_ctc !== slug) {
      fetchCTC(slug).then((ctc) => store.actions.startGame({ ctc }))
    }
  },
  startGame: (store, { ctc }) => {
    store.setState({ board: new Board({ ctc }) })
  },
}

const _withGame = ConfigHook('game', { schema, uiSchema, actions })

export default (Component) => {
  return _withGame(
    (props) => {
      if (!props.game.board) {
        props.game.actions.loadCTC(props.match.params.slug)
        return null
      }
      return <Component {...props} />
    },
    { propName: 'game' },
  )
}

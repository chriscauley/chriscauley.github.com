import classnames from 'classnames'
import React from 'react'
import { debounce } from 'lodash'

import Index from './Index'
import withGame from './withGame'
import Controls, { getMode } from './Controls'

const clickRef = React.createRef()

const getClassName = ({
  xy,
  hover,
  selected,
  selectedNeighbors,
  answer,
  colour,
}) =>
  classnames(`cell x-${xy[0]} y-${xy[1]} colour-${colour}`, selectedNeighbors, {
    selected,
    hover,
    answer,
  })

const KEY_MAP = {}

')!@#$%^&*('.split('').forEach((key, i) => (KEY_MAP[key] = i.toString()))

'abcdefghijklmnopqrstuvwxyz'
  .split('')
  .forEach((key) => (KEY_MAP[key.toUpperCase()] = key))

class CTC extends React.Component {
  state = {
    answer: {},
    selected: {},
  }
  constructor(props) {
    super(props)
    this.allowed_keys = '1234567890'.split('')
    this.listeners = ['keydown', 'mousedown', 'mouseup']
    this.listeners.forEach((s) => document.addEventListener(s, this[s]))
  }

  componentWillUnmount() {
    this.listeners.forEach((s) => document.removeEventListener(s, this[s]))
  }

  mouseup = () => this.setState({ dragging: false, removing: false })
  keydown = (e) => {
    const value = KEY_MAP[e.key] || e.key
    if (this.allowed_keys.includes(value)) {
      e.preventDefault()
    }
    const mode = getMode(e, this.state.mode)
    this.sendKey(value, mode)
  }

  sendKey = (value, mode) => {
    const { selected } = this.state
    const indexes = Object.keys(selected)
    if (value === 'Delete' || value === 'Backspace') {
      mode = 'delete'
    } else if (!this.allowed_keys.includes(value)) {
      return
    }
    this.props.game.actions.doAction({ mode, indexes, value })
  }
  onMouseMove = (e) => this._bouncemove([e.clientX, e.clientY])

  mousedown = (e) => {
    const index = this.geo.pxy2index([e.clientX, e.clientY])
    if (e.target.closest('.Controls')) {
      return
    }
    let { selected } = this.state
    let removing = selected[index]
    if (e.ctrlKey) {
      if (removing) {
        delete selected[index]
      } else {
        selected[index] = true
      }
    } else {
      selected = { [index]: true }
      removing = false
    }
    this.setState({ dragging: true, removing, selected })
  }

  _move = (pxy) => {
    const hover = this.geo.pxy2index(pxy)
    const { selected, dragging, removing } = this.state
    if (dragging) {
      if (removing) {
        delete selected[hover]
      } else {
        selected[hover] = true
      }
    }
    this.setState({ hover, selected })
  }
  _bouncemove = debounce(this._move, 25, { maxWait: 25 })
  setMode = (mode) => () => this.setState({ mode })

  render() {
    const { hover, selected } = this.state
    const { board } = this.props.game
    this.geo = board.geo
    board.geo.element = clickRef.current
    const cells = board.toCells(selected)
    if (cells[hover]) {
      cells[hover].hover = true
    }
    return (
      <>
        <Controls
          keys={this.allowed_keys}
          onClick={this.setMode}
          mode={this.state.mode}
          sendKey={this.sendKey}
        />
        <div className="board">
          <div className="sudoku">
            {cells.map((cell) => (
              <div key={cell.index} className={getClassName(cell)}>
                {cell.question === undefined && cell.answer === undefined && (
                  <>
                    <div className="corner">{cell.corner.map((n) => n)}</div>
                    <div className="centre">{cell.centre.map((n) => n)}</div>
                  </>
                )}
                {cell.question !== undefined && (
                  <span className="question">{cell.question}</span>
                )}
                {cell.answer !== undefined && (
                  <span className="answer">{cell.answer}</span>
                )}
              </div>
            ))}
          </div>
          <div
            className="clickMask"
            onMouseMove={this.onMouseMove}
            ref={clickRef}
          />
        </div>
      </>
    )
  }
}

export default {
  Index,
  CTC: withGame(CTC),
  path: 'sudoku/ctc',
  datetime: '2020-05-29T13:37:57.094Z',
}

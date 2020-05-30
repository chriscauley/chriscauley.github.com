import classnames from 'classnames'
import React from 'react'
import { debounce } from 'lodash'

import Index from './Index'
import withGame from './withGame'
import Controls from './Controls'

const SIZE = 9

const clickRef = React.createRef()

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
    const { board } = this.props.game
    const { selected } = this.state
    // const valid = true
    const key = e.key
    if (key === 'Delete' || key === 'Backspace') {
      board.deleteCells(Object.keys(selected))
      return this.setState({ rando: Math.random() })
    }
    if (!this.allowed_keys.includes(key)) {
      return
    }
    board.toggleAnswer(Object.keys(selected), key)
    this.setState({ rando: Math.random() })
  }

  pxy2xy = (pxy) => {
    const { left, top, height } = clickRef.current.getBoundingClientRect()
    const p_size = height / SIZE
    return [
      Math.floor((pxy[0] - left) / p_size),
      Math.floor((pxy[1] - top) / p_size),
    ]
  }

  pxy2index = (pxy) => this.xy2index(this.pxy2xy(pxy))
  xy2index = (xy) => xy[0] + SIZE * xy[1]
  index2xy = (index) => [index % SIZE, Math.floor(index / SIZE)]

  onMouseMove = (e) => this._bouncemove([e.clientX, e.clientY])

  mousedown = (e) => {
    const index = this.pxy2index([e.clientX, e.clientY])
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

  xy2className = (xy, extra = '') => `cell cell-${extra} x-${xy[0]} y-${xy[1]}`

  _move = (pxy) => {
    const hover = this.pxy2index(pxy)
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

  render() {
    const { hover, selected } = this.state
    const getClassName = ({ xy, hover, selected }) =>
      classnames(`cell x-${xy[0]} y-${xy[1]}`, { hover, selected })
    const cells = this.props.game.board.toCells(selected, this.index2xy)
    if (cells[hover]) {
      cells[hover].hover = true
    }
    return (
      <>
        <Controls keys={this.allowed_keys} />
        <div className="board">
          <div className="sudoku">
            {cells.map((cell) => (
              <div key={cell.index} className={getClassName(cell)}>
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

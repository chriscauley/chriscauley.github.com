import classnames from 'classnames'
import React, { useState } from 'react'
import { debounce } from 'lodash'
import { Link } from 'react-router-dom'
import './styles.scss'

const SIZE = 9

const toggleObject = (object, key, value = true) => {
  if (object[key] === value) {
    delete object[key]
  } else {
    object[key] = value
  }
  return value
}

const withCTC = (Component) => (props) => {
  const { slug } = props.match.params
  const [state, setState] = useState({})
  if (!state[slug]) {
    fetchCTC(slug).then((data) => setState({ [slug]: data }))
    return null
  }
  return <Component board={state[slug]} />
}

const FB_URL =
  'https://firebasestorage.googleapis.com/v0/b/sudoku-sandbox.appspot.com/o/'

function Board(options) {
  if (options.ctc) {
    this.sudoku = this.sudoku = []
    const { cells } = options.ctc
    cells.forEach((row) =>
      row.forEach((cell) => {
        this.sudoku.push(cell.value)
      }),
    )
  }
}

const fetchCTC = (slug) =>
  fetch(`${FB_URL}${slug}`)
    .then((r) => r.json())
    .then((data) =>
      fetch(`${FB_URL}${slug}?alt=media&token=${data.downloadTokens}`),
    )
    .then((r) => r.json())
    .then((data) => new Board({ ctc: data }))

const Index = () => {
  const maps = {
    j62Rm8qq9j: 'Simple',
    H9Jr7gQHtm: 'Hardest',
  }
  return (
    <div>
      <h2>Select a map</h2>
      <ul>
        {Object.entries(maps).map(([slug, name]) => (
          <li key={slug}>
            <Link to={slug}>
              {name} ({slug})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const clickRef = React.createRef()

class CTC extends React.Component {
  state = {
    answer: {},
    selected: {},
  }
  constructor(props) {
    super(props)
    this.allowed = '1234567890'
    this.listeners = ['keydown', 'mousedown', 'mouseup']
    this.listeners.forEach((s) => document.addEventListener(s, this[s]))
  }

  componentWillUnmount() {
    this.listeners.forEach((s) => document.removeEventListener(s, this[s]))
  }

  mouseup = () => this.setState({ dragging: false, removing: false })
  keydown = (e) => {
    const { selected, answer } = this.state
    // const valid = true
    const key = parseInt(e.key)
    if (isNaN(key)) {
      return
    }
    Object.keys(selected).forEach((index) => toggleObject(answer, index, key))
    this.setState({ answer })
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
  _bouncemove = debounce(this._move, 50, { maxWait: 50 })

  render() {
    const { sudoku } = this.props.board
    const { hover, selected, answer } = this.state
    const getClassName = ({ xy, hover, selected }) =>
      classnames(`cell x-${xy[0]} y-${xy[1]}`, { hover, selected })
    const cells = sudoku.map((question, index) => {
      return {
        index,
        xy: this.index2xy(index),
        question,
        selected: selected[index],
        answer: answer[index],
      }
    })
    if (cells[hover]) {
      cells[hover].hover = true
    }
    return (
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
    )
  }
}

export default {
  Index,
  CTC: withCTC(CTC),
  path: 'sudoku/ctc',
  datetime: '2020-05-29T13:37:57.094Z',
}

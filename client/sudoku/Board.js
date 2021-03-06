import { defaults, pick } from 'lodash'

class Geo {
  constructor(options) {
    if (!options.W) {
      throw 'Geo requires a W (width)'
    }
    this.setSize(options)
    // html element for mouse event calculations
    // can be undefined during initialization and set later
    this.element = options.element
  }

  setSize({ W, H = W }) {
    this.W = W
    this.H = H
    this.AREA = W * H
  }

  pxy2xy = (pxy) => {
    if (!this.element) {
      throw 'Element is not set'
    }
    const { left, top, height } = this.element.getBoundingClientRect()
    const w_px = height / this.W
    const h_px = height / this.H
    return [
      Math.floor((pxy[0] - left) / h_px),
      Math.floor((pxy[1] - top) / w_px),
    ]
  }

  pxy2index = (pxy) => this.xy2index(this.pxy2xy(pxy))
  xy2index = (xy) => xy[0] + this.W * xy[1]
  index2xy = (index) => [index % this.W, Math.floor(index / this.W)]
}

export default class Board {
  constructor(options) {
    defaults(this, options, {
      answer: {},
      corner: {},
      centre: {},
      colour: {},
      actions: [],
    })
    this.geo = new Geo({ W: 9 })
    if (options.ctc && !this.sudoku) {
      this.sudoku = this.sudoku = []
      const { cells } = options.ctc
      cells.forEach((row) =>
        row.forEach((cell) => this.sudoku.push(cell.value)),
      )
    }
  }

  doAction(action) {
    const { mode, indexes, value } = action
    this.actions.push(action)
    if (mode === 'delete') {
      // delete is not affected by the mode
      delete action.value
      this.deleteCells(indexes)
    } else if (mode === 'centre' || mode === 'corner') {
      this._toggle(mode, indexes, value)
    } else if (mode === 'colour') {
      // color always just sets value
      indexes.map((index) => (this.colour[index] = value))
    } else if (mode === 'answer') {
      indexes.map((index) => {
        // cannot write to sudoku squares
        if (this.sudoku[index] === undefined) {
          this.answer[index] = value
        }
      })
    }
  }

  toJson() {
    return pick(this, ['sudoku', 'answer', 'corner', 'centre', 'colour'])
  }

  _toggle(mode, indexes, value) {
    indexes.map((index) => {
      // cannot write to sudoku or answer squares
      if (
        this.sudoku[index] === undefined &&
        this.answer[index] === undefined
      ) {
        this[mode][index] = arrayToggle(this[mode][index] || [], value)
      }
    })
  }

  deleteCells(indexes) {
    let layers = ['answer', 'centre', 'corner']
    const first_match = layers.find((layer) =>
      indexes.find((index) => this[layer][index] !== undefined),
    )
    if (!first_match) {
      layers = ['colour']
    }
    layers.forEach((layer) =>
      indexes.forEach((index) => delete this[layer][index]),
    )
  }

  toCells = (selected) =>
    this.sudoku.map((question, index) => ({
      index,
      xy: this.geo.index2xy(index),
      question,
      selected: selected[index],
      selectedNeighbors: this.getSelectedNeighbors(index, selected),
      answer: this.answer[index],
      centre: this.centre[index] || [],
      corner: this.corner[index] || [],
      colour: this.colour[index] || [],
    }))
  getSelectedNeighbors = (index, selected) => {
    if (!selected[index]) {
      return []
    }
    return [-this.geo.W, 1, this.geo.W, -1].map((dindex) =>
      selected[index + dindex] ? 0 : `selected-${dindex}`,
    )
  }
}

const arrayToggle = (values, value) => {
  if (values.includes(value)) {
    values = values.filter((v) => v !== value)
  } else {
    values.push(value)
    values.sort()
  }
  return values
}

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
        this[mode] = arrayToggle(this[mode] || [], value)
      }
    })
  }

  toggleCentre = (indexes, value) => this._toggle('centre', indexes, value)
  toggleColour = (indexes, value) => this._toggle('colour', indexes, value)
  toggleAnswer(indexes, value) {
    indexes.map((index) => {
      // cannot write to sudoku squares
      if (this.sudoku[index] === undefined) {
        this.answer[index] = value
      }
    })
  }
  toggleColour(indexes, value) {
    // color always just sets value
    indexes.map((index) => (this.colour[index] = value))
  }

  deleteCells(indexes) {
    indexes.map((index) => delete this.answer[index])
  }

  toCells = (selected) =>
    this.sudoku.map((question, index) => ({
      index,
      xy: this.geo.index2xy(index),
      question,
      selected: selected[index],
      answer: this.answer[index],
      centre: this.centre[index],
      corner: this.corner[index],
      colour: this.colour[index],
    }))
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

import { defaults, pick } from 'lodash'

export default class Board {
  constructor(options) {
    defaults(this, options, {
      answer: {},
      corner: {},
      centre: {},
      colour: {},
    })
    this.W = this.H = 9
    this.AREA = this.W * this.H
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

  toCells = (selected, index2xy) =>
    this.sudoku.map((question, index) => ({
      index,
      xy: index2xy(index),
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

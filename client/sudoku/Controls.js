import React from 'react'
import css from '@unrest/css'

const btn = (active) => css.button[active ? 'dark' : 'light']('mr-2')

const getMode = ({ ctrlKey, shiftKey }) => {
  if (ctrlKey && shiftKey) {
    return 'colour'
  } else if (ctrlKey) {
    return 'centre'
  } else if (shiftKey) {
    return 'corner'
  }
  return 'normal'
}

const row = 'flex mb-4 flex-wrap'

class Controls extends React.Component {
  state = {}
  constructor(props) {
    super(props)
    this.listeners = ['keydown', 'keyup']
    this.listeners.forEach((s) => document.addEventListener(s, this.keyupdown))
  }

  componentWillUnmount() {
    this.listeners.forEach((s) =>
      document.removeEventListener(s, this.keyupdown),
    )
  }

  keyupdown = ({ shiftKey, ctrlKey }) => this.setState({ shiftKey, ctrlKey })
  render() {
    const { keys, mode = getMode(this.state) } = this.props
    const modes = ['normal', 'corner', 'centre', 'colour']
    return (
      <div className="Controls">
        <div className={row}>
          {modes.map((m) => (
            <div className={btn(mode === m)} key={m}>
              {m}
            </div>
          ))}
        </div>
        <div className={row}>
          {keys.map((key) => (
            <div
              className={css.button.dark('mr-2 mode-' + mode)}
              data-key={key}
              key={key}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Controls

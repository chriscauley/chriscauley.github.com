import React from 'react'
import classnames from 'classnames'

export default class ImageLoader extends React.Component {
  state = { index: 0, loading: true }
  onError = () => this.setState({ index: this.state.index + 1 })
  onLoad = () => this.setState({ loading: false })
  render() {
    const { post, type } = this.props
    const { index, loading } = this.state
    const images = [
      `/src/posts/${post.category}/${post.slug}/${type}.png`,
      `/src/posts/${post.category}/${type}.png`,
    ]
    const src = images[index]
    return src ? (
      <div className={classnames('blog-image__' + type, { loading })}>
        <img src={src} onLoad={this.onLoad} onError={this.onError} />
      </div>
    ) : null
  }
}

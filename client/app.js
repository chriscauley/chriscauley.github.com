import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'
import css from '@unrest/css'

import { listCategories, _listTags, slug_map } from './Post'
import Nav from './Nav'
import './posts'

const ListCategories = () => {
  return (
    <div>
      {listCategories().map(([slug, posts]) => (
        <li key={slug}>
          {slug} ({posts.length})
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link className={css.link()} to={post.url}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </div>
  )
}

const ShowPost = (props) => {
  const { slug, _category } = props.match.params
  const post = slug_map[slug]
  return post ? (
    <div>
      <h1>{post.title}</h1>
      <post.Component />
    </div>
  ) : null
}

const App = () => {
  return (
    <HashRouter>
      <Nav />
      <div className="app-content">
        <div className={css.grid.row()}>
          <div className={css.grid.col4()}>
            <ListCategories />
          </div>
          <div className={css.grid.col8()}>
            <Route path="/post/:category/:slug/" component={ShowPost} />
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

const domContainer = document.querySelector('#react-app')
ReactDOM.render(<App />, domContainer)

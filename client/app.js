import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'
import css from '@unrest/css'
import BlogCard from './components/BlogCard'
import url from './url'

import { listTags, slug_map, cat_map } from './Post'
import Nav from './Nav'
import './posts'

const ListTags = () => {
  return (
    <div className="mb-4">
      <h4>Tags</h4>
      <ul>
        {listTags().map(([slug, posts]) => (
          <li key={slug}>
            <Link to={url.tag(slug)} className={css.link()}>
              {slug} ({posts.length})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const CategoryIndex = (props) => {
  const posts = cat_map[props.match.params.category]
  if (!posts) {
    throw 'Category Missing!'
  }
  return posts.map((post) => <BlogCard key={post.slug} post={post} />)
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
            <ListTags />
          </div>
          <div className={css.grid.col8()}>
            <Route path="/post/:category/:slug/" component={ShowPost} />
            <Route exact path="/post/:category/" component={CategoryIndex} />
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

const domContainer = document.querySelector('#react-app')
ReactDOM.render(<App />, domContainer)

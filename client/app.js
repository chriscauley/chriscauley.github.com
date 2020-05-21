import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import css from '@unrest/css'
import CategoryIndex from './blog/CategoryIndex'
import Post from './blog/Post'

import Sidebar from './components/Sidebar'
import Nav from './components/Nav'
import './posts'

const App = () => {
  return (
    <HashRouter>
      <Nav />
      <div className="app-content">
        <div className={css.grid.row()}>
          <div
            className={css.grid.col('hidden md:block w-1/3 lg:1/4 xl:w-1/6')}
          >
            <Sidebar />
          </div>
          <div className={css.grid.col('w-2/3 lg:3/4 xl:w-5/6')}>
            <Route path="/post/:category/:slug/" component={Post} />
            <Route exact path="/post/:category/" component={CategoryIndex} />
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

const domContainer = document.querySelector('#react-app')
ReactDOM.render(<App />, domContainer)

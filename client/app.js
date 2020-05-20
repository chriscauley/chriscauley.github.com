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
          <div className={css.grid.col4('hidden md:block')}>
            <Sidebar />
          </div>
          <div className={css.grid.col12('md:w-2/3')}>
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

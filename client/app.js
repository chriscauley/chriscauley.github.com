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
          <div className={css.grid.col('hidden md:block w-64')}>
            <Sidebar />
          </div>
          <div className={css.grid.col('flex-grow')} style={{flexBasis:1}}>
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

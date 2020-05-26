import React from 'react'
import { Link } from 'react-router-dom'
import css from '@unrest/css'
import url from '../url'

import { listTags } from '../register'

export default function SideBar() {
  return (
    <div className="mb-4 p-4 rounded border">
      <h4 className="mt-0">Tags</h4>
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

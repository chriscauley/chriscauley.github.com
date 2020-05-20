import React from 'react'
import { Link } from 'react-router-dom'

import url from '../url'

const card = {
  outer: 'max-w-sm w-full lg:max-w-full lg:flex rounded border',
  image: 'block h-48 lg:h-auto lg:w-48 flex-none bg-cover',
  right: 'bg-white p-4 flex flex-col justify-between leading-normal',
  title: 'text-gray-900 font-bold text-xl mb-2',
  description: 'text-gray-700 text-base mb-2',
}

export default function BlogCard(props) {
  const { post } = props
  return (
    <div className={card.outer}>
      <Link
        to={post.url}
        className={card.image}
        style={{ backgroundImage: `url('${post.thumbnail}')` }}
        title=""
      />
      <div className={card.right}>
        <Link to={post.url} className={card.title}>
          {post.title}
        </Link>
        <div className={card.description}>{post.description}</div>
        <div>
          {post.tags.map((tag) => (
            <Link key={tag} className={'pill pill-primary'} to={url.tag(tag)}>
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

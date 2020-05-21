import React from 'react'
import { Link } from 'react-router-dom'

import url from '../url'

const card = {
  outer: 'w-full lg:flex rounded border mb-4',
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
        to={url.post(post)}
        className={card.image}
        style={{ backgroundImage: `url('${post.thumbnail}')` }}
        title=""
      />
      <div className={card.right}>
        <Link to={url.post(post)} className={card.title}>
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

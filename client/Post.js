import React from 'react'
import { Route } from 'react-router-dom'

const cat_map = {
  css: []
}

const tag_map = {}

export const slug_map = {}

export const listTags = () => Object.entries(tag_map)
export const listCategories = () => Object.entries(cat_map)

export const register = (post) => {
  const {
    Component,
    title,
    slug,
    date,
    modified,
    tags,
  } = post

  if (slug_map[slug]) {
    throw `Slug "${slug}" is not unique`
  }
  slug_map[slug] = post
  const category = cat_map[tags[0]].push(post)
  tags.map(tag => {
    tag_map[tag] = tag_map[tag] || []
    tag_map[tag].push(post)
  })
  post.url = `/post/${tags[0]}/${slug}/`
  console.log(post.url)
}
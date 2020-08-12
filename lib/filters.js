'use strict'

const chalk = require('chalk')

function filterBy(posts, filterName, keywords) {
  return posts.filter(post => {
    let keep = true
    const items = post[filterName]
    if (items) {
      items.forEach(item => {
        const index = keywords.indexOf(item.name)
        if (index > -1) {
          keep = false
          console.log(
            `${chalk.yellow('WARN')}  ${chalk.cyan(
              post.title
            )} hidden by ${chalk.magenta(filterName + ':' + keywords[index])} !`
          )
        }
      })
    }
    return keep
  })
}

function filterByFront(posts) {
  return posts.filter(post => {
    if (post.hidden_from_index) {
      console.log(
        `${chalk.yellow('WARN')}  ${chalk.cyan(
          post.title
        )} hidden by ${chalk.magena('hidden_from_index')} !`
      )
      return false
    }
    return true
  })
}

function filterPosts(config, posts) {
  const exclude = config.index_generator.exclude
  if (exclude) {
    const categories = exclude.categories
    const tags = exclude.tags
    if (categories) {
      posts = filterBy(posts, 'categories', categories)
    }
    if (tags) {
      posts = filterBy(posts, 'tags', tags)
    }
  }
  return filterByFront(posts)
}

module.exports = filterPosts

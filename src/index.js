export function getArticleHeadings() {
  const pageArticle = document.querySelector('[data-article]')

  return {
    articleEl: pageArticle,
    articleHeadings: getHeadings(pageArticle),
  }
}

function getHeadings(pageArticle) {
  const headingLevels = ['h2', 'h3', 'h4']

  const headingElements = [
    ...pageArticle.querySelectorAll(headingLevels.join(',')),
  ]

  const groupedHeadings = headingElements.reduce(
    (headingItems, headingItem) => {
      const headingLevel = headingItem.tagName.slice(1)

      const { id: headingId, textContent } = headingItem

      const newHeading = {
        headingId,
        textContent,
      }

      if (headingLevel === '2') {
        headingItems.push([newHeading, []])
      }

      if (headingLevel === '3') {
        const lastItem = headingItems[headingItems.length - 1]

        lastItem[1].push([newHeading, []])
      }

      if (headingLevel === '4') {
        const lastItem = headingItems[headingItems.length - 1]
        const lastChildItem = lastItem[1][lastItem[1].length - 1]

        lastChildItem[1].push([newHeading, []])
      }

      return headingItems
    },
    []
  )

  const filteredHeadings = groupedHeadings.map((groupedHeading) => {
    const [headingItem, headingChildren] = groupedHeading

    if (!headingChildren.length) {
      return headingItem
    }

    const filteredChildren = headingChildren.map((headingChild) => {
      const [childHeading, childChildren] = headingChild

      if (!childChildren.length) {
        return childHeading
      }

      return {
        ...childHeading,
        headingChildren: childChildren.map((childChild) => {
          const [childChildHeading, childChildChildren] = childChild

          if (!childChildChildren.length) {
            return childChildHeading
          }

          return {
            ...childChildHeading,
            headingChildren: childChildChildren,
          }
        }),
      }
    })

    return {
      ...headingItem,
      headingChildren: filteredChildren,
    }
  })

  return filteredHeadings
}

export function buildArticleHeadings(groupHeadings = []) {
  const articleToc = document.querySelector('[data-article-toc]')

  if (!articleToc) {
    return
  }

  articleToc.innerHTML = buildList(groupHeadings)
}

function buildList(groupHeadings) {
  return `
    <ul>
      ${groupHeadings
        .map((groupHeading) => {
          const { headingId, headingChildren, textContent } = groupHeading

          const hasChildren = !!headingChildren

          return `
          <li>
            <a href="#${headingId}">${textContent}</a>

            ${hasChildren ? buildList(headingChildren) : ''}
          </li>
        `
        })
        .join('')}
    </ul>
  `
}

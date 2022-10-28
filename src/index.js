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

  return groupedHeadings
}

export function buildArticleHeadings(groupHeadings = []) {
  const articleToc = document.querySelector('[data-article-headings]')

  if (!articleToc) {
    return
  }

  articleToc.innerHTML = `
    <ul>
      ${groupHeadings
        .map((groupedHeadings) => {
          const [headingParent, headingChildren] = groupedHeadings

          const { headingId, textContent } = headingParent

          const hasChildren = !!headingChildren.length

          return `
          <li>
            <a href="#${headingId}">${textContent}</a>
            ${hasChildren ? buildSubHeadings(headingChildren) : ''}
          </li>
        `
        })
        .join('')}
    </ul>
  `
}

function buildSubHeadings(groupedHeadings) {
  return `
    <ul>
      ${groupedHeadings
        .map((groupedHeading) => {
          const [headingParent, headingChildren] = groupedHeading

          const { headingId, textContent } = headingParent

          const hasChildren = !!headingChildren.length

          return `
          <li>
            <a href="#${headingId}">${textContent}</a>
            ${hasChildren ? buildSubHeadings(headingChildren) : ''}
          </li>
        `
        })
        .join('')}
    </ul>
  `
}

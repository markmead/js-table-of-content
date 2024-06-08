# Table of Content

Get the headings from an article and generate the HTML for the table of content.

See it in action on the [HyperUI blog](https://www.hyperui.dev/blog).

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/data-table-of-content@latest/dist/headings.min.js"
></script>
```

### With a Package Manager

```shell
yarn add -D data-table-of-content

npm install -D data-table-of-content
```

```js
import { getArticleHeadings, buildArticleHeadings } from 'data-table-of-content'

document.addEventListener('DOMContentLoaded', () => {
  // What we can get back from the method
  const { articleEl, articleHeadings } = getArticleHeadings()

  // How we build the HTML
  buildArticleHeadings(articleHeadings)
})
```

### `articleEl`

Returns the element with the `data-article` attribute.

### `articleHeadings`

Returns the headings in a nested array for the `data-article` element.

```json
[
  {
    "headingId": "heading-2",
    "textContent": "Heading 2",
    "headingChildren": [
      {
        "headingId": "heading-3",
        "textContent": "Heading 3",
        "headingChildren": [
          {
            "headingId": "heading-4",
            "textContent": "Heading 4"
          }
        ]
      },
      {
        "headingId": "heading-3.1",
        "textContent": "Heading 3.1"
      }
    ]
  },
  {
    "headingId": "heading-2.1",
    "textContent": "Heading 2.1"
  },
  {
    "headingId": "heading-2.2",
    "textContent": "Heading 2.2",
    "headingChildren": [
      {
        "headingId": "heading-3.2",
        "textContent": "Heading 3.2"
      }
    ]
  }
]
```

### `buildArticleHeadings`

This will take array from `articleHeadings` and create the HTML for the table of
contents and insert it into the `data-article-headings` element.

```html
<div data-article-toc>
  <ul>
    <li>
      <a href="#heading-2">Heading 2</a>

      <ul>
        <li>
          <a href="#heading-3">Heading 3</a>

          <ul>
            <li>
              <a href="#heading-4">Heading 4</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#heading-3.1">Heading 3.1</a>
        </li>
      </ul>
    </li>

    <li>
      <a href="#heading-2.1">Heading 2.1</a>
    </li>

    <li>
      <a href="#heading-2.2">Heading 2.2</a>

      <ul>
        <li>
          <a href="#heading-3.2">Heading 3.2</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

## Example

```html
<body>
  <article data-article>
    <div data-article-toc></div>

    <h1 id="heading-1">Heading 1</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, commodi.
    </p>

    <h2 id="heading-2">Heading 2</h2>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    <h3 id="heading-3">Heading 3</h3>

    <p>Lorem, ipsum dolor.</p>

    <h4 id="heading-4">Heading 4</h4>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt alias,
      possimus mollitia nisi pariatur vero numquam at iure labore! Labore est
      laudantium nam voluptates laborum, inventore delectus dolore placeat
      impedit quae?
    </p>

    <h3 id="heading-3.1">Heading 3.1</h3>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit
      unde, pariatur dolore, eveniet consectetur eligendi tempora dolor nesciunt
      cumque quis repellendus, voluptate perspiciatis eaque quibusdam?
    </p>

    <h2 id="heading-2.1">Heading 2.1</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque ratione.
      Mollitia placeat vitae voluptas!
    </p>

    <h2 id="heading-2.2">Heading 2.2</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima
      harum ipsam!
    </p>

    <h3 id="heading-3.2">Heading 3.2</h3>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a est porro
      facilis nam commodi ullam fugiat? Quisquam reprehenderit incidunt sint ad
      facilis ducimus est rerum? Non commodi tempore provident.
    </p>
  </article>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const { articleHeadings } = getArticleHeadings()

      buildArticleHeadings(articleHeadings)
    })
  </script>
</body>
```

## Stats

![](https://img.shields.io/bundlephobia/min/data-masonry)
![](https://img.shields.io/npm/v/data-masonry)
![](https://img.shields.io/npm/dt/data-masonry)
![](https://img.shields.io/github/license/markmead/js-masonry)

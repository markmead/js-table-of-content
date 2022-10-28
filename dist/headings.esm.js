function g(){let t=document.querySelector("[data-article]");return{articleEl:t,articleHeadings:h(t)}}function h(t){let i=["h2","h3","h4"];return[...t.querySelectorAll(i.join(","))].reduce((e,l)=>{let n=l.tagName.slice(1),{id:o,textContent:u}=l,c={headingId:o,textContent:u};if(n==="2"&&e.push([c,[]]),n==="3"&&e[e.length-1][1].push([c,[]]),n==="4"){let d=e[e.length-1];d[1][d[1].length-1][1].push([c,[]])}return e},[])}function p(t=[]){let i=document.querySelector("[data-article-headings]");i&&(i.innerHTML=`
    <ul>
      ${t.map(a=>{let[r,e]=a,{headingId:l,textContent:n}=r,o=!!e.length;return`
          <li>
            <a href="#${l}">${n}</a>
            ${o?s(e):""}
          </li>
        `}).join("")}
    </ul>
  `)}function s(t){return`
    <ul>
      ${t.map(i=>{let[a,r]=i,{headingId:e,textContent:l}=a,n=!!r.length;return`
          <li>
            <a href="#${e}">${l}</a>
            ${n?s(r):""}
          </li>
        `}).join("")}
    </ul>
  `}export{p as buildArticleHeadings,g as getArticleHeadings};

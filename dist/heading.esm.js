function g(){let t=document.querySelector("[data-article]");return{articleEl:t,articleHeadings:h(t)}}function h(t){let i=["h2","h3","h4"],l=[...t.querySelectorAll(i.join(","))];return console.log(l),l.reduce((e,r)=>{let n=r.tagName.slice(1),{id:a,textContent:u}=r,c={headingId:a,textContent:u};if(n==="2"&&e.push([c,[]]),n==="3"&&e[e.length-1][1].push([c,[]]),n==="4"){let s=e[e.length-1];s[1][s[1].length-1][1].push([c,[]])}return e},[])}function p(t=[]){let i=document.querySelector("[data-article-headings]");i&&(i.innerHTML=`
    <ul>
      ${t.map(l=>{let[o,e]=l,{headingId:r,textContent:n}=o,a=!!e.length;return`
          <li>
            <a href="#${r}">${n}</a>
            ${a?d(e):""}
          </li>
        `}).join("")}
    </ul>
  `)}function d(t){return`
    <ul>
      ${t.map(i=>{let[l,o]=i,{headingId:e,textContent:r}=l,n=!!o.length;return`
          <li>
            <a href="#${e}">${r}</a>
            ${n?d(o):""}
          </li>
        `}).join("")}
    </ul>
  `}export{p as buildArticleHeadings,g as getArticleHeadings};

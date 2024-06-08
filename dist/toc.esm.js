function p(){let n=document.querySelector("[data-article]");return{articleEl:n,articleHeadings:H(n)}}function H(n){let t=["h2","h3","h4"];return[...n.querySelectorAll(t.join(","))].reduce((e,d)=>{let i=d.tagName.slice(1),{id:a,textContent:o}=d,r={headingId:a,textContent:o};if(i==="2"&&e.push([r,[]]),i==="3"&&e[e.length-1][1].push([r,[]]),i==="4"){let l=e[e.length-1];l[1][l[1].length-1][1].push([r,[]])}return e},[]).map(e=>{let[d,i]=e;if(!i.length)return d;let a=i.map(o=>{let[r,l]=o;return l.length?{...r,headingChildren:l.map(g=>{let[u,f]=g;return f.length?{...u,headingChildren:f}:u})}:r});return{...d,headingChildren:a}})}function m(n=[]){let t=document.querySelector("[data-article-toc]");t&&(t.innerHTML=C(n))}function C(n){return`
    <ul>
      ${n.map(t=>{let{headingId:h,headingChildren:c,textContent:s}=t;return`
          <li>
            <a href="#${h}">${s}</a>

            ${!!c?C(c):""}
          </li>
        `}).join("")}
    </ul>
  `}export{m as buildArticleHeadings,p as getArticleHeadings};

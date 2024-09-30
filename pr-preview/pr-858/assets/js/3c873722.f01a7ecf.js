"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7544],{5046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var i=t(74848),s=t(28453),r=t(36289);const c={title:"Query Consistency Modes",sidebar_position:7,slug:"/interacting/consistency",description:"Query Consistency Modes"},a="Query Consistency Modes",o={id:"content/interacting/consistency",title:"Query Consistency Modes",description:"Query Consistency Modes",source:"@site/docs/content/interacting/consistency.mdx",sourceDirName:"content/interacting",slug:"/interacting/consistency",permalink:"/pr-preview/pr-858/docs/interacting/consistency",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/interacting/consistency.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Query Consistency Modes",sidebar_position:7,slug:"/interacting/consistency",description:"Query Consistency Modes"},sidebar:"docs",previous:{title:"Transactional Writes",permalink:"/pr-preview/pr-858/docs/interacting/transactional-writes"},next:{title:"Relationship Queries",permalink:"/pr-preview/pr-858/docs/interacting/relationship-queries"}},d={},h=[{value:"Background",id:"background",level:2},{value:"When to use higher consistency",id:"when-to-use-higher-consistency",level:2},{value:"Cache expiration",id:"cache-expiration",level:2},{value:"Future work",id:"future-work",level:2},{value:"Related Sections",id:"related-sections",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"query-consistency-modes",children:"Query Consistency Modes"})}),"\n",(0,i.jsx)(r.ZE,{}),"\n",(0,i.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,i.jsxs)(n.p,{children:["When querying ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," using Read or any of the query APIs like ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-858/docs/interacting/relationship-queries",children:"Check, Expand, ListObjects and ListUsers"}),", you can specify a query consistency parameter that can have one of the following values:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MINIMIZE_LATENCY (default)"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," will serve queries from the cache when possible"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HIGHER_CONSISTENCY"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," will skip the cache and query the the database directly"]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["If you write a tuple and you immediately make a check on a relation affected by that tuple using ",(0,i.jsx)(n.code,{children:"MINIMIZE_LATENCY"}),", the tuple change might not be taken in consideration if ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," serves the result from the cache."]}),"\n",(0,i.jsx)(n.h2,{id:"when-to-use-higher-consistency",children:"When to use higher consistency"}),"\n",(0,i.jsxs)(n.p,{children:["When specifying ",(0,i.jsx)(n.code,{children:"HIGHER_CONSISTENCY"})," you are trading off consistency for latency and system performance. Always specifying ",(0,i.jsx)(n.code,{children:"HIGHER_CONSISTENCY"})," will have a significant impact in performance."]}),"\n",(0,i.jsx)(n.p,{children:"If you have a use case where higher consistency is needed, it's recommended that whenever possible, you decide in runtime the consistency level you need. If you are storing a timestamp indicating when a resource was last modified in your database, you can use that to decide the kind of request you do."}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you share ",(0,i.jsx)(n.code,{children:"document:readme"})," with a ",(0,i.jsx)(n.code,{children:"user:anne"})," and you update a ",(0,i.jsx)(n.code,{children:"modified_date"})," field in the ",(0,i.jsx)(n.code,{children:"document"})," table when that happens, you can write code like the below when calling ",(0,i.jsx)(n.code,{children:'check("user:anne", "can_view", "document:readme")'})," to avoid paying the price of additional latency when calling the API."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'if (date_modified + cache_time_to_live_period > Date.now()) {\n    const { allowed } = await fgaClient.check(\n      { user: "user:anne", relation: "can_view", object: "document:roadmap"}\n    );\n} else {\n    const { allowed } = await fgaClient.check(\n        {  user: "user:anne", relation: "can_view", object: "document:roadmap"},\n        {  consistency: ConsistencyPreference.HigherConsistency }\n    );\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"cache-expiration",children:"Cache expiration"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," cache is disabled by default. When not enabled, all queries will have strong consistency regardless of the consistency mode specified."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the following parameters to configure ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm}),"'s cache:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"check-query-cache"}),(0,i.jsx)(n.td,{children:"Enables caching (default = false)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"check-query-cache-limit"}),(0,i.jsx)(n.td,{children:"Configures the number of items that will be kept in the cache (default = 10000)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"check-query-cache-ttl"}),(0,i.jsx)(n.td,{children:"Specifies the time that items will be kept in the cache (default = 10s)"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Learn how to ",(0,i.jsxs)(n.a,{href:"/pr-preview/pr-858/docs/getting-started/setup-openfga/configure-openfga",children:["configure ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})]}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Currently, the cache is used by Check and partially in ListObjects. It will be implemented it for other query endpoints in the future."}),"\n",(0,i.jsx)(n.h2,{id:"future-work",children:"Future work"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(r.i4,{linkName:"Zanzibar paper",section:"what-is-zanzibar"})," has a feature called ",(0,i.jsx)(n.code,{children:"Zookies"}),", which is a consistency token that is returned from Write operation. You can store that token in you resource table, and specify it in subsequent calls to query APIs."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," is considering a similar feature in future releases."]}),"\n",(0,i.jsx)(n.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,i.jsx)(r.XQ,{description:"Check the following sections for more on how to check, read and expand.",relatedLinks:[{title:"Relationship Queries",description:"Comparison Between Check, Read And Expand API Calls.",link:"./relationship-queries",id:"./relationship-queries"}]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);
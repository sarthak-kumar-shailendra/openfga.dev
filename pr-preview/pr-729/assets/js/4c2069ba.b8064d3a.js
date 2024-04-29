"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[4710],{91976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(74848),s=t(28453),r=t(82879);const o={title:"Production Best Practices",description:"Best Practices of Running OpenFGA in a Production Environment",sidebar_position:8,slug:"/getting-started/running-in-production"},a="Running OpenFGA in Production",c={id:"content/getting-started/production-best-practices",title:"Production Best Practices",description:"Best Practices of Running OpenFGA in a Production Environment",source:"@site/docs/content/getting-started/production-best-practices.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/running-in-production",permalink:"/pr-preview/pr-729/docs/getting-started/running-in-production",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/production-best-practices.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Production Best Practices",description:"Best Practices of Running OpenFGA in a Production Environment",sidebar_position:8,slug:"/getting-started/running-in-production"},sidebar:"docs",previous:{title:"Immutable Authorization Models",permalink:"/pr-preview/pr-729/docs/getting-started/immutable-models"},next:{title:"Managing Tuples and Invoking API Best Practices",permalink:"/pr-preview/pr-729/docs/getting-started/tuples-api-best-practices"}},d={},l=[{value:"Database Recommendations",id:"database-recommendations",level:2},{value:"Concurrency Limits",id:"concurrency-limits",level:2},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"running-openfga-in-production",children:"Running OpenFGA in Production"}),"\n",(0,i.jsx)(r.ZE,{}),"\n",(0,i.jsx)(n.p,{children:"The following list outlines some guidelines and best practices for running OpenFGA in a production environment:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/pr-preview/pr-729/docs/getting-started/setup-openfga/docker#configuring-authentication",children:"Configure Authentication"})}),"\n",(0,i.jsx)(n.li,{children:"Enable HTTP TLS or gRPC TLS or both"}),"\n",(0,i.jsx)(n.li,{children:'Set the log.format to "json"'}),"\n",(0,i.jsx)(n.li,{children:'Set the log.level to "info"'}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/pr-preview/pr-729/docs/getting-started/setup-openfga/docker#playground",children:"Disable the Playground"}),"."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#database-recommendations",children:"Set Database Options"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#concurrency-limits",children:"Set Concurrency Limits"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"database-recommendations",children:"Database Recommendations"}),"\n",(0,i.jsxs)(n.p,{children:["To ensure good performance for OpenFGA, it is recommended that the ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-729/docs/getting-started/setup-openfga/docker#configuring-data-storage",children:"database"})," be:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Co-located in the same physical datacenter and network as your OpenFGA servers. This will minimize latency of database calls."}),"\n",(0,i.jsx)(n.li,{children:"Used exclusively for OpenFGA and not shared with other applications. This allows scaling the database independently and avoiding contention with your database."}),"\n",(0,i.jsxs)(n.li,{children:["Bootstrapped and managed with the ",(0,i.jsx)(n.code,{children:"openfga migrate"})," command. This will ensure the appropriate database indexes are created."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It's strongly recommended to fine-tune your server database connection settings to avoid having to re-establish database connections frequently. Establishing database connections is slow and will negatively impact performance, and so here are some guidelines for managing database connection settings:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The server setting ",(0,i.jsx)(n.code,{children:"OPENFGA_DATASTORE_MAX_OPEN_CONNS"})," should be set to be equal to your database's max connections. For example, in Postgres, you can see this value via running the SQL query ",(0,i.jsx)(n.code,{children:"SHOW max_connections;"}),". If you are running multiple instances of the OpenFGA server, you should divide this setting equally among the instances. For example, if your database's ",(0,i.jsx)(n.code,{children:"max_connections"})," is 100, and you have 2 OpenFGA instances, ",(0,i.jsx)(n.code,{children:"OPENFGA_DATASTORE_MAX_OPEN_CONNS"})," should be set to 50 for each instance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"OPENFGA_DATASTORE_MAX_IDLE_CONNS"})," should be set to a value no greater than the maximum open connections (see the bullet point above), but it should be set sufficiently high enough to avoid having to recreate connections on each request."]}),"\n",(0,i.jsx)(n.p,{children:"If, when monitoring your database stats, you see a lot of database connections being closed and subsequently reopened, then you should consider increasing the maximum number of idle connections."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If idle connections are getting reaped frequently, then consider increasing the ",(0,i.jsx)(n.code,{children:"OPENFGA_DATASTORE_CONN_MAX_IDLE_TIME"})," to a large value. When in doubt, prioritize keeping connections around for longer rather than shorter, because doing so will drastically improve performance."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"concurrency-limits",children:"Concurrency Limits"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Before modifying concurrency limits please make sure you've followed the guidance for ",(0,i.jsx)(n.a,{href:"./#database-recommendations",children:"Database Recommendations"})]})}),"\n",(0,i.jsx)(n.p,{children:"OpenFGA queries such as Check and ListObjects can be quite database and CPU intensive in some cases. If you notice that a single request is consuming a lot of CPU or creating a high degree of database contention, then you may consider setting some concurrency limits to protect other requests from being negatively impacted by overly aggressive queries."}),"\n",(0,i.jsx)(n.p,{children:"The following table enumerates the server's concurrency specific settings:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"flag"}),(0,i.jsx)(n.th,{children:"env"}),(0,i.jsx)(n.th,{children:"config"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"--max-concurrent-reads-for-list-objects"}),(0,i.jsx)(n.td,{children:"OPENFGA_MAX_CONCURRENT_READS_FOR_LIST_OBJECTS"}),(0,i.jsx)(n.td,{children:"maxConcurrentReadsForListObjects"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"--max-concurrent-reads-for-check"}),(0,i.jsx)(n.td,{children:"OPENFGA_MAX_CONCURRENT_READS_FOR_CHECK"}),(0,i.jsx)(n.td,{children:"maxConcurrentReadsForCheck"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"--resolve-node-limit"}),(0,i.jsx)(n.td,{children:"OPENFGA_RESOLVE_NODE_LIMIT"}),(0,i.jsx)(n.td,{children:"resolveNodeLimit"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"--resolve-node-breadth-limit"}),(0,i.jsx)(n.td,{children:"OPENFGA_RESOLVE_NODE_BREADTH_LIMIT"}),(0,i.jsx)(n.td,{children:"resolveNodeBreadthLimit"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Determining the right values for these settings will be based on a variety of factors including, but not limited to, the database specific deployment topology, the FGA model(s) involved, and the relationship tuples in the system. However, here are some high-level guidelines:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If a single ListObjects query is negatively impacting other query endpoints by increasing their latency or their error rate, then consider setting a lower value for ",(0,i.jsx)(n.code,{children:"OPENFGA_MAX_CONCURRENT_READS_FOR_LIST_OBJECTS"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If a single Check query is negatively impacting other query endpoints by increasing their latency or their error rate, then consider setting a lower value for ",(0,i.jsx)(n.code,{children:"OPENFGA_MAX_CONCURRENT_READS_FOR_CHECK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you still see high request latencies despite the guidance above, then you may additionally consider setting stricter limits on the query resolution behavior by limiting the resolution depth and resolution breadth. These can be controlled with the ",(0,i.jsx)(n.code,{children:"OPENFGA_RESOLVE_NODE_LIMIT"})," and ",(0,i.jsx)(n.code,{children:"OPENFGA_RESOLVE_NODE_BREADTH_LIMIT"})," settings, respectively. Consider these guidelines:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"OPENFGA_RESOLVE_NODE_LIMIT"})," limits the resolution depth of a single query, and thus it sets an upper bound on how deep a relationship hierarchy may be. A high value will allow a single query to involve more hierarchical resolution and therefore more database queries, while a low value will reduce the number of hierarchical resolutions that will be allowed and thus reduce the number of database queries."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"OPENFGA_RESOLVE_NODE_BREADTH_LIMIT"})," limits the resolution breadth. It sets an upper bound on the number of in-flight resolutions that can be taking place on one or more ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-729/docs/concepts#what-is-a-user",children:"usersets"}),". A high value will allow a single query to involve more concurrent evaluations to take place and therefore more database queries and server processes, while a low value will reduce the overall number of concurrent resolutions that will be allowed and thus reduce the number of database queries and server processes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,i.jsx)(r.XQ,{description:"Check the following sections for more on how to run OpenFGA in production environment.",relatedLinks:[{title:"Data and API Best Practices",description:"Learn the best practices for managing data and invoking APIs in production environment",link:"./tuples-api-best-practices",id:"./tuples-api-best-practices"},{title:"Migrating Relations",description:"Learn how to migrate relations in a production environment",link:"../modeling/migrating/migrating-relations",id:"../modeling/migrating/migrating-relations"}]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);
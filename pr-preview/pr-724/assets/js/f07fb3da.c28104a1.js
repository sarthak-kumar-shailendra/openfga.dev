"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1258],{7763:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=o(74848),s=o(28453);const a={title:"Modular Models",description:"Modular Models",slug:"modular-models-announcement",date:new Date("2024-03-29T00:00:00.000Z"),authors:"eharris",tags:["openfga","features"],image:"https://openfga.dev/img/og-rich-embed.png",hide_table_of_contents:!1},r="Release Candidate for Modular Models",i={permalink:"/pr-preview/pr-724/blog/modular-models-announcement",source:"@site/blog/modular-models-announcement.md",title:"Modular Models",description:"Modular Models",date:"2024-03-29T00:00:00.000Z",tags:[{label:"openfga",permalink:"/pr-preview/pr-724/blog/tags/openfga"},{label:"features",permalink:"/pr-preview/pr-724/blog/tags/features"}],readingTime:1.69,hasTruncateMarker:!1,authors:[{name:"Ewan Harris",url:"https://github.com/ewanharris",imageURL:"/pr-preview/pr-724/img/blog/authors/ewan.jpg",key:"eharris"}],frontMatter:{title:"Modular Models",description:"Modular Models",slug:"modular-models-announcement",date:"2024-03-29T00:00:00.000Z",authors:"eharris",tags:["openfga","features"],image:"https://openfga.dev/img/og-rich-embed.png",hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"Fine Grained News - March 2024",permalink:"/pr-preview/pr-724/blog/fine-grained-news-2024-03"}},l={authorsImageUrls:[void 0]},d=[{value:"How to use it?",id:"how-to-use-it",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reach out!",id:"reach-out",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Modular models aims to improve the model authoring experience when multiple teams are maintaining a model, such as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A model can grow large and difficult to understand"}),"\n",(0,n.jsx)(t.li,{children:"As more teams begin to contribute to a model, the ownership boundaries may not be clear and code review processes might not scale"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["With modular models, a single model can be separated across multiple files allow grouping of types and conditions into modules. This means that a model can be organized more easily in terms of team or organizational structure. Used in conjunction with features such as ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",children:"GitHub"}),", ",(0,n.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/project/codeowners/",children:"GitLab"})," or ",(0,n.jsx)(t.a,{href:"https://docs.gitea.com/usage/code-owners",children:"Gitea's"})," code owners, it should become easier to ensure the owners of a portion of your model are correctly assigned to review it."]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-it",children:"How to use it?"}),"\n",(0,n.jsx)(t.p,{children:"Modular models is currently shipped as an experimental feature while we gather feedback, in order for you to try it out."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Update to the ",(0,n.jsx)(t.a,{href:"https://github.com/openfga/cli/releases/tag/v0.3.0",children:"v0.3.0 release"})," of the CLI","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"With the CLI you will be able to write your modular model and test it against a store file you have, but you will not be able to write your model to any OpenFGA server that does not enable this feature."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Update to ",(0,n.jsx)(t.a,{href:"https://github.com/openfga/vscode-ext/releases/tag/v0.2.20",children:"v0.2.20"})," of the VS Code Extension"]}),"\n",(0,n.jsxs)(t.li,{children:["Download ",(0,n.jsx)(t.a,{href:"https://github.com/openfga/openfga/releases/tag/v1.5.1",children:"v1.5.1"})," of OpenFGA","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["As this is currently experimental, you will need to start OpenFGA with ",(0,n.jsx)(t.code,{children:"openfga run --experimental enable-modular-models"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Check out the modular models sample store in the ",(0,n.jsx)(t.a,{href:"https://github.com/openfga/sample-stores/tree/main/stores/modular",children:"sample-stores repo"})]}),"\n",(0,n.jsxs)(t.li,{children:["Review the ",(0,n.jsx)(t.a,{href:"https://openfga.dev/docs/modeling/modular-models",children:"documentation for this feature"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,n.jsx)(t.p,{children:"We intend to move this feature out of RC within the next few weeks, so as we gather feedback we'll deal with any issues that arise and look to improve upon any areas of the developer experience as needed."}),"\n",(0,n.jsxs)(t.p,{children:["Looking beyond the near term, modular models allows us to implement ",(0,n.jsx)(t.a,{href:"https://github.com/openfga/roadmap/issues/30",children:"additional API authorization options for OpenFGA"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"reach-out",children:"Reach out!"}),"\n",(0,n.jsx)(t.p,{children:"We want to learn how you use this feature and how we can improve it!"}),"\n",(0,n.jsxs)(t.p,{children:["Please reach out through our ",(0,n.jsx)(t.a,{href:"https://openfga.dev/community",children:"community channels"})," with any questions or feedback."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);
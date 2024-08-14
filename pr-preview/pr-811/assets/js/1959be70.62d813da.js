"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[3261],{10849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=t(74848),a=t(28453);const s={title:"Fine Grained News - December 2023",description:"Fine Grained News",slug:"fine-grained-news-2023-12",date:new Date("2023-12-18T00:00:00.000Z"),authors:"aaguiar",tags:["newsletter"],image:"https://openfga.dev/img/og-rich-embed.png",hide_table_of_contents:!1},o="Fine Grained News",r={permalink:"/pr-preview/pr-811/blog/fine-grained-news-2023-12",source:"@site/blog/fine-grained-news-2023-12.md",title:"Fine Grained News - December 2023",description:"Fine Grained News",date:"2023-12-18T00:00:00.000Z",tags:[{inline:!0,label:"newsletter",permalink:"/pr-preview/pr-811/blog/tags/newsletter"}],readingTime:3.35,hasTruncateMarker:!1,authors:[{name:"Andres Aguiar",title:"Product Manager",url:"https://github.com/aaguiarz",imageURL:"/pr-preview/pr-811/img/blog/authors/andres.jpg",key:"aaguiar",page:null}],frontMatter:{title:"Fine Grained News - December 2023",description:"Fine Grained News",slug:"fine-grained-news-2023-12",date:"2023-12-18T00:00:00.000Z",authors:"aaguiar",tags:["newsletter"],image:"https://openfga.dev/img/og-rich-embed.png",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Fine Grained News - January 2024",permalink:"/pr-preview/pr-811/blog/fine-grained-news-2024-01"},nextItem:{title:"Conditional Relationship Tuples for OpenFGA",permalink:"/pr-preview/pr-811/blog/conditional-tuples-announcement"}},l={authorsImageUrls:[void 0]},h=[{value:"Team News",id:"team-news",level:2},{value:"Behavior Driven Development with OpenFGA",id:"behavior-driven-development-with-openfga",level:2},{value:"GoDaddy &amp; OpenFGA",id:"godaddy--openfga",level:2},{value:"Canonical &amp; OpenFGA",id:"canonical--openfga",level:2},{value:"OpenFGA v1.4!",id:"openfga-v14",level:2},{value:"SDK Improvements",id:"sdk-improvements",level:2},{value:"Language Improvements",id:"language-improvements",level:2},{value:"VS Code Extension Improvements",id:"vs-code-extension-improvements",level:2},{value:"KubeCon EU 2024",id:"kubecon-eu-2024",level:2},{value:"OpenFGA Community",id:"openfga-community",level:2},{value:"See you next month!",id:"see-you-next-month",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Hi Everyone!"}),"\n",(0,i.jsxs)(n.p,{children:["We've been publishing a monthly internal newsletter we called ",(0,i.jsx)(n.strong,{children:"Fine Grained News"})," since the beginning on 2023, and we just thought it would be a good idea to share it with the community. Yeah, we are slow thinkers!"]}),"\n",(0,i.jsx)(n.p,{children:"You can expect to find here a summary of what we've been up to, what we are planning to do, and some other random stuff we think you might find interesting."}),"\n",(0,i.jsx)(n.h2,{id:"team-news",children:"Team News"}),"\n",(0,i.jsx)(n.p,{children:"We always start our Monthly Community Meetings presenting the team. If you attended the last one, you've seen that the size of the team has grown quite a bit! We are pretty excited about the impact it will have in OpenFGA and the authorization space in general."}),"\n",(0,i.jsx)(n.h2,{id:"behavior-driven-development-with-openfga",children:"Behavior Driven Development with OpenFGA"}),"\n",(0,i.jsxs)(n.p,{children:["In our last Community Meeting, the ",(0,i.jsx)(n.a,{href:"https://agicap.com/en",children:"Agicap"})," team (Pauline and Yann) demoed how they are using OpenFGA to implement Behavior Driven Development (BDD) in their authorization system."]}),"\n",(0,i.jsxs)(n.p,{children:["The screenshot below might be enough to understand what they are doing, but if you want to know more, you can watch the full presentation ",(0,i.jsx)(n.a,{href:"https://youtu.be/xXhwPPcGRqE?t=765",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"bdd demo",src:t(63558).A+"",width:"996",height:"802"})}),"\n",(0,i.jsx)(n.h2,{id:"godaddy--openfga",children:"GoDaddy & OpenFGA"}),"\n",(0,i.jsx)(n.p,{children:"GoDaddy has been working with OpenFGA for a few months. They just published a document explaining why they picked OpenFGA, and how they used to address the authorization challenges they were facing."}),"\n",(0,i.jsx)(n.p,{children:"Some interesting tidbits:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"They implemented their own DynamoDB Storage Adapter, as they were heavy Dynamo DB users and liked the eventual consistency model it provided."}),"\n",(0,i.jsxs)(n.li,{children:["They needed ",(0,i.jsx)(n.a,{href:"https://docs.fga.dev/modeling/basics/contextual-time-based-authorization#use-contextual-tuples-for-context-related-checks",children:"Contextual Tuples"})," to fully support their use case."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Read the full article ",(0,i.jsx)(n.a,{href:"https://www.godaddy.com/engineering/2023/12/12/authorization-oauth-openfga/",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"canonical--openfga",children:"Canonical & OpenFGA"}),"\n",(0,i.jsx)(n.p,{children:"Canonical has also been working with OpenFGA for a while, and it's adding OpenFGA to different layers in their stack."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OpenFGA at Canonical",src:t(79822).A+"",width:"1400",height:"754"})}),"\n",(0,i.jsxs)(n.p,{children:["They just announced that OpenFGA support is included ",(0,i.jsx)(n.a,{href:"https://discourse.ubuntu.com/t/lxd-5-20-has-been-released/40865",children:"in LXD"})," and ",(0,i.jsx)(n.a,{href:"https://www.gamingdeputy.com/canonical-unveils-microcloud-a-toolkit-for-rapid-cluster-deployment/",children:"MicroCloud"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Pretty soon, if you are using Ubuntu Pro, you will be using OpenFGA :)."}),"\n",(0,i.jsx)(n.h2,{id:"openfga-v14",children:"OpenFGA v1.4!"}),"\n",(0,i.jsx)(n.p,{children:"Last week we released OpenFGA v1.4! This release includes our support for Conditional Relationship Tuples, which helps implementing additional Attribute-Based Access Control scenarios like temporal access, IP based access, bank transfer limits, SaaS application plans, and much more!"}),"\n",(0,i.jsxs)(n.p,{children:["You can read more about it ",(0,i.jsx)(n.a,{href:"https://openfga.dev/docs/modeling/conditions",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"sdk-improvements",children:"SDK Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/java-sdk",children:"Java SDK"})," has now feature parity with the rest of the our SDKs. It can be used from any language for the Java VM. You can see examples on Kotlin, Groovy and Scala ",(0,i.jsx)(n.a,{href:"https://github.com/booniepepper/openfga-java-sdk-preview/tree/core/src/main",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/python-sdk",children:"Python SDK"})," was updated to support synchronous clients, support custom SSL certificates, and better performance in batch checks."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"language-improvements",children:"Language Improvements"}),"\n",(0,i.jsx)(n.p,{children:"We've been working on the OpenFGA language with some long-due improvements. Soon, you'll be able to use parentheses to group expressions when defining relations:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"DSL improvements",src:t(25584).A+"",width:"1712",height:"858"})}),"\n",(0,i.jsxs)(n.p,{children:["The syntax is still not supported in the FGA CLI, but we are pretty close. Daniel demoed it in our latest community meeting, you can see the full demo ",(0,i.jsx)(n.a,{href:"https://youtu.be/xXhwPPcGRqE?t=1313",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"vs-code-extension-improvements",children:"VS Code Extension Improvements"}),"\n",(0,i.jsxs)(n.p,{children:["We have also been improving tuple validation when writing ",(0,i.jsx)(n.code,{children:"fga.yaml"})," files, and it's pretty cool! Works on Daniel's machine for now :)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Tuple Validation Demo",src:t(15651).A+"",width:"1400",height:"758"})}),"\n",(0,i.jsxs)(n.p,{children:["Daniel also demoed it in our latest community meeting, watch it ",(0,i.jsx)(n.a,{href:"https://youtu.be/xXhwPPcGRqE?t=1598",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"kubecon-eu-2024",children:"KubeCon EU 2024"}),"\n",(0,i.jsx)(n.p,{children:"We are getting ready for KubeCon Europe 2024, in Paris. We'll have a Project Kiosk, and we have submitted a few talks. We'll keep you posted!"}),"\n",(0,i.jsx)(n.h2,{id:"openfga-community",children:"OpenFGA Community"}),"\n",(0,i.jsx)(n.p,{children:"We have a very welcoming community, and we'd love to have you there! You can join us in different ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Join our ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/community/blob/main/community-meetings.md",children:"community meetings"}),", the second Thursday of every month. All the recordings are ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/@OpenFGA",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Join our ",(0,i.jsx)(n.a,{href:"https://openfga.dev/community",children:"community channels"})," in Slack or GitHub."]}),"\n",(0,i.jsxs)(n.li,{children:["Stay up to date by following us on ",(0,i.jsx)(n.a,{href:"https://twitter.com/openfga",children:"X"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ask questions, submit ideas, or just say hi in our ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/openfga/discussions",children:"GitHub Discussions"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"see-you-next-month",children:"See you next month!"}),"\n",(0,i.jsx)(n.p,{children:"We'll keep publishing our Fine Grained News each month, after the OpenFGA community meeting. If you have any feedback, you want to share your OpenFGA story, or know about something that you think is worth mentioning, please let us know!"})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},63558:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fgn-2023-12-bdd-919c556a442e23bdac6643a34267ea70.png"},79822:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fgn-2023-12-canonical-38a8b58970e46161957f5acb3ed43a46.png"},25584:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fgn-2023-12-language-8a3e7f852814fa536430c8e3f81e57f1.png"},15651:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fgn-2023-12-validation-b3df7ed681e938abf6f1d43c02423439.png"}}]);
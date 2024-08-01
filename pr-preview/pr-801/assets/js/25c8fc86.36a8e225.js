"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[370],{83052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(74848),s=t(28453);const o={title:"Fine Grained News - July 2024",description:"Fine Grained News",slug:"fine-grained-news-2024-07",date:new Date("2024-07-31T00:00:00.000Z"),authors:"hello-caleb",tags:["newsletter"],image:"https://openfga.dev/img/og-rich-embed.png",hide_table_of_contents:!1},r="Fine Grained News",a={permalink:"/pr-preview/pr-801/blog/fine-grained-news-2024-07",source:"@site/blog/fine-grained-news-2024-07.md",title:"Fine Grained News - July 2024",description:"Fine Grained News",date:"2024-07-31T00:00:00.000Z",tags:[{inline:!0,label:"newsletter",permalink:"/pr-preview/pr-801/blog/tags/newsletter"}],readingTime:3.925,hasTruncateMarker:!1,authors:[{name:"Caleb Hunter",title:"Community Engagement",url:"https://github.com/hello-caleb",imageURL:"/pr-preview/pr-801/img/blog/authors/caleb.jpg",key:"hello-caleb"}],frontMatter:{title:"Fine Grained News - July 2024",description:"Fine Grained News",slug:"fine-grained-news-2024-07",date:"2024-07-31T00:00:00.000Z",authors:"hello-caleb",tags:["newsletter"],image:"https://openfga.dev/img/og-rich-embed.png",hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"Stronger Consistency Query Options",permalink:"/pr-preview/pr-801/blog/stronger-consistency-options-announcement"}},h={authorsImageUrls:[void 0]},l=[{value:"Improvements",id:"improvements",level:2},{value:"Latest Features",id:"latest-features",level:3},{value:"Performance Improvements",id:"performance-improvements",level:3},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"In Progress",id:"in-progress",level:2},{value:"Community Highlights",id:"community-highlights",level:2},{value:"New Adopters",id:"new-adopters",level:2},{value:"Announcements",id:"announcements",level:2},{value:"Transitioning from Discord to CNCF&#39;s Slack",id:"transitioning-from-discord-to-cncfs-slack",level:2},{value:"See You Next Month!",id:"see-you-next-month",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Welcome to the July 2024 edition of Fine Grained News! We are thrilled to bring you the latest updates, features, and community highlights from OpenFGA. This month has included releases, performance improvements, and insights shared through our community meetings and presentations."}),"\n",(0,i.jsxs)(n.p,{children:["We value your feedback and invite you to participate in our ",(0,i.jsx)(n.a,{href:"https://www.surveymonkey.com/r/OPENFGA2024",children:"2024 OpenFGA Community Survey"}),". Your insights help us understand your needs better and improve our offerings. Please take a few minutes to complete the survey and let your voice be heard."]}),"\n",(0,i.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,i.jsx)(n.h3,{id:"latest-features",children:"Latest Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["We\u2019ve introduced consistency options for query requests. This new feature provides more flexibility and control over how queries are executed, enhancing the accuracy and reliability of query results. ",(0,i.jsx)(n.a,{href:"https://openfga.dev/blog/stronger-consistency-options-announcement",children:"Learn more about this update"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["We\u2019re now publishing images to ",(0,i.jsx)(n.code,{children:"ghcr.io/openfga/openfga"})," as an alternative to DockerHub, thanks to the contribution from @JAORMX. This provides an additional option for accessing and deploying our containers. ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/openfga/commit/#1775",children:"Read more"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"performance-improvements",children:"Performance Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["We have implemented significant performance enhancements in the Check function, ensuring that computed relations do not consume from the resolution depth quota, do not trigger additional goroutines, and do not get cached. These optimizations lead to more efficient access control checks and improved overall system performance. ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/openfga/commit/#1786",children:"Learn more"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["We have made significant performance improvements to userset subproblem resolutions in Check in certain scenarios. These enhancements optimize the efficiency of access control checks, leading to faster processing times and improved system performance. ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/openfga/commit/#1734",children:"Read more about this improvement"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["We have also improved the performance of tuple-to-userset subproblem resolutions in Check for certain scenarios. This update enhances the speed and efficiency of complex access control queries, further boosting overall system performance. ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/openfga/commit/#1735",children:"Learn more about this update"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you have any feedback, or want to try a feature early, or are interested to learn more, please reach out!"}),"\n",(0,i.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,i.jsxs)(n.p,{children:["Several breaking changes related to the storage interface ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/openfga/releases/tag/v1.5.7",children:"have been introduced"}),". These changes should not impact your usage of OpenFGA unless you are implementing an storage adapter."]}),"\n",(0,i.jsx)(n.h2,{id:"in-progress",children:"In Progress"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/openfga/roadmap/issues/54",children:"Additional Consistency Options for OpenFGA queries"}),": We've just shipped the first iteration of this feature, and we\u2019ll be working on adding a consistency token in the future."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/openfga/roadmap/issues/41",children:"Telemetry for SDKs"}),": We shipped OpenTelemetry Metrics support for Python and Javascript. We\u2019ll be adding metrics support to the rest of the SDKs and then add support for tracing and logging."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["We\u2019ll keep working on ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/roadmap/issues/61",children:"Performance Improvements"})," for Check, List Objects and List Users APIs."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["We\u2019ll be adding additional ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/roadmap/issues/30",children:"authorization options for OpenFGA"}),", to allow different API credentials perform different actions in FGA stores."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"community-highlights",children:"Community Highlights"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Check out ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=GvgeQcQlUuU&t=212s&pp=ygUHT3BlbkZHQQ%3D%3D",children:"July\u2019s Community Meeting"}),"! It's a great opportunity to stay updated with the latest developments, ask questions, and engage with the OpenFGA community."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Maria Ines Parnisari from the OpenFGA team and Evan Anderson from Stacklok presented on Implementing a Multi-Tenant, Relationship-Based Authorization Model with OpenFGA at CloudNative SecurityCon North America. If you didn\u2019t attend the conference in June, the presentation recording is now ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=zIJOBLbaZOc",children:"live"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["This month, Andres Aguiar and Damian Schenkelman appeared in the ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Ups1FFxK3VE&pp=ygUHT3BlbkZHQQ%3D%3D",children:"Identerati Office Hours"})," livestream for an in-depth exploration of OpenFGA. This video covers advanced topics and provides valuable insights into the capabilities and implementation of OpenFGA. Whether you're a seasoned user or new to OpenFGA, this deep dive is packed with information that will enhance your understanding and usage of the platform."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Andres Aguiar sat down with Open at Intel host Katherine Druckman during KubeCon Europe to discuss OpenFGA. You can hear that podcast\n",(0,i.jsx)(n.a,{href:"https://www.intel.com/content/www/us/en/developer/articles/community/fine-grained-authorization-with-openfga.html",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"new-adopters",children:"New Adopters"}),"\n",(0,i.jsxs)(n.p,{children:["We\u2019re happy to share that ",(0,i.jsx)(n.a,{href:"https://www.bump-charge.com/",children:"Bump"})," is now an OpenFGA adopter! If you are using OpenFGA in production, please consider adding your company or project to our ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/community/blob/main/ADOPTERS.md",children:"list"}),". Your contribution will be greatly appreciated!"]}),"\n",(0,i.jsx)(n.h2,{id:"announcements",children:"Announcements"}),"\n",(0,i.jsxs)(n.p,{children:["Join us for our monthly Community Meetings, held on the second Thursday of every month at 11am Eastern Time (US). Our next meeting is on Thursday, August 8, 2024. These meetings are a fantastic opportunity to stay updated with the latest developments, ask questions, and engage with the OpenFGA community. You can find the link to the meeting invite ",(0,i.jsx)(n.a,{href:"https://openfga.dev/docs/community#monthly-community-meetings",children:"here"}),". We look forward to seeing you there!"]}),"\n",(0,i.jsx)(n.h2,{id:"transitioning-from-discord-to-cncfs-slack",children:"Transitioning from Discord to CNCF's Slack"}),"\n",(0,i.jsxs)(n.p,{children:["As a reminder, we transitioned out from Discord for OpenFGA and are now using the CNCF ",(0,i.jsx)(n.a,{href:"https://cloud-native.slack.com/archives/C06G1NNH47N",children:"#openfga Slack channel"}),". If you are not part of the CNCF Slack workspace, you need to join the ",(0,i.jsx)(n.a,{href:"https://slack.cncf.io",children:"CNCF Slack"})," first."]}),"\n",(0,i.jsx)(n.h2,{id:"see-you-next-month",children:"See You Next Month!"}),"\n",(0,i.jsxs)(n.p,{children:["Fine Grained News is published every month. If you have any feedback, want to share your OpenFGA story, or have a noteworthy update, please let us know on any of our ",(0,i.jsx)(n.a,{href:"https://openfga.dev/community",children:"community channels"})," or at ",(0,i.jsx)(n.a,{href:"mailto:community@openfga.dev",children:"community@openfga.dev"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);
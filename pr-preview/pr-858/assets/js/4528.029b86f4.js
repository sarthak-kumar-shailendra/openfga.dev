"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[4528],{82907:(e,t,a)=>{a.d(t,{A:()=>B});a(96540);var s=a(34164),n=a(44096),r=a(74848);function i(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var l=a(28774);const o={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,n.e7)(),{permalink:d,title:c}=a,u=i?"h1":"h2";return(0,r.jsx)(u,{className:(0,s.A)(o.title,t),children:i?c:(0,r.jsx)(l.A,{to:d,children:c})})}var c=a(21312),u=a(53465),m=a(36266);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,c.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function p(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.e7)(),{date:i,readingTime:l}=a,o=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:i,formattedDate:(d=i,o.format(new Date(d)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),(0,r.jsx)(g,{readingTime:l})]})]});var d}var A=a(56913);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,n.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!l&&(o?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,r.jsx)(A.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function b(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(d,{}),(0,r.jsx)(j,{}),(0,r.jsx)(v,{})]})}var N=a(70440),y=a(25128);function U(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,n.e7)();return(0,r.jsx)("div",{id:i?N.LU:void 0,className:(0,s.A)("markdown",a),children:(0,r.jsx)(y.A,{children:t})})}var T=a(17559),_=a(4336),w=a(62053);function k(){return(0,r.jsx)("b",{children:(0,r.jsx)(c.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(l.A,{"aria-label":(0,c.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(k,{})})}function P(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:d,lastUpdatedAt:c}=e,u=!t&&o,m=a.length>0;if(!(m||u||l))return null;if(t){const e=!!(l||c||d);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",T.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(w.A,{tags:a})})}),e&&(0,r.jsx)(_.A,{className:(0,s.A)("margin-top--sm",T.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:c,lastUpdatedBy:d})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,r.jsx)(w.A,{tags:a})}),u&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":m}),children:(0,r.jsx)(C,{blogPostTitle:i,to:e.permalink})})]})}function B(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,s.A)(l,a),children:[(0,r.jsx)(b,{}),(0,r.jsx)(U,{children:t}),(0,r.jsx)(P,{})]})}},4336:(e,t,a)=>{a.d(t,{A:()=>p});a(96540);var s=a(34164),n=a(21312),r=a(17559),i=a(28774);const l={iconEdit:"iconEdit_Z9Sw"};var o=a(74848);function d(e){let{className:t,...a}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(l.iconEdit,t),"aria-hidden":"true",...a,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:t}=e;return(0,o.jsxs)(i.A,{to:t,className:r.G.common.editThisPage,children:[(0,o.jsx)(d,{}),(0,o.jsx)(n.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=a(36266);function m(e){let{lastUpdatedAt:t}=e;const a=new Date(t),s=(0,u.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(a);return(0,o.jsx)(n.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:a.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,o.jsx)(n.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:t})},children:" by {user}"})}function g(e){let{lastUpdatedAt:t,lastUpdatedBy:a}=e;return(0,o.jsxs)("span",{className:r.G.common.lastUpdated,children:[(0,o.jsx)(n.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,o.jsx)(m,{lastUpdatedAt:t}):"",byUser:a?(0,o.jsx)(h,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const x={lastUpdated:"lastUpdated_JAkA"};function p(e){let{className:t,editUrl:a,lastUpdatedAt:n,lastUpdatedBy:r}=e;return(0,o.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,o.jsx)("div",{className:"col",children:a&&(0,o.jsx)(c,{editUrl:a})}),(0,o.jsx)("div",{className:(0,s.A)("col",x.lastUpdated),children:(n||r)&&(0,o.jsx)(g,{lastUpdatedAt:n,lastUpdatedBy:r})})]})}},25128:(e,t,a)=>{a.d(t,{A:()=>b});var s=a(96540),n=a(28453),r=a(5260),i=a(21432),l=a(74848);function o(e){return(0,l.jsx)("code",{...e})}var d=a(28774);var c=a(41622);function u(e){const t=s.Children.toArray(e.children),a=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),n=(0,l.jsx)(l.Fragment,{children:t.filter((e=>e!==a))});return(0,l.jsx)(c.A,{...e,summary:a,children:n})}var m=a(51107);function h(e){return(0,l.jsx)(m.A,{...e})}var g=a(34164);const x={containsTaskList:"containsTaskList_mC6p"};function p(e){if(void 0!==e)return(0,g.A)(e,e?.includes("contains-task-list")&&x.containsTaskList)}var j=a(63427);const A={img:"img_ev3q"};var f=a(27293);const v={Head:r.A,details:u,Details:u,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,l.jsx)(o,{...e}):(0,l.jsx)(i.A,{...e})},a:function(e){return(0,l.jsx)(d.A,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:p(e.className)})},li:function(e){return(0,j.A)().collectAnchor(e.id),(0,l.jsx)("li",{...e})},img:function(e){return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,g.A)(t,A.img))});var t},h1:e=>(0,l.jsx)(h,{as:"h1",...e}),h2:e=>(0,l.jsx)(h,{as:"h2",...e}),h3:e=>(0,l.jsx)(h,{as:"h3",...e}),h4:e=>(0,l.jsx)(h,{as:"h4",...e}),h5:e=>(0,l.jsx)(h,{as:"h5",...e}),h6:e=>(0,l.jsx)(h,{as:"h6",...e}),admonition:f.A,mermaid:()=>null};function b(e){let{children:t}=e;return(0,l.jsx)(n.x,{components:v,children:t})}},39022:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var s=a(34164),n=a(28774),r=a(74848);function i(e){const{permalink:t,title:a,subLabel:i,isNext:l}=e;return(0,r.jsxs)(n.A,{className:(0,s.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},56133:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var s=a(34164),n=a(28774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(74848);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,i.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},62053:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(34164),n=a(21312),r=a(56133);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=a(74848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(r.A,{...e})},e.permalink)))})]})}},36266:(e,t,a)=>{a.d(t,{i:()=>n});var s=a(44586);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.A)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}}}]);
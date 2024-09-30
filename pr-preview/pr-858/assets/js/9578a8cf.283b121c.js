"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[892],{73406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(74848),o=n(28453),r=n(36289);const a={sidebar_position:9,slug:"/modeling/organization-context-authorization",description:"Modeling authorization through organization context"},s="Authorization Through Organization Context",l={id:"content/modeling/organization-context-authorization",title:"Authorization Through Organization Context",description:"Modeling authorization through organization context",source:"@site/docs/content/modeling/organization-context-authorization.mdx",sourceDirName:"content/modeling",slug:"/modeling/organization-context-authorization",permalink:"/pr-preview/pr-858/docs/modeling/organization-context-authorization",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/organization-context-authorization.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,slug:"/modeling/organization-context-authorization",description:"Modeling authorization through organization context"},sidebar:"docs",previous:{title:"Contextual and Time-Based Authorization",permalink:"/pr-preview/pr-858/docs/modeling/contextual-time-based-authorization"},next:{title:"Testing Models",permalink:"/pr-preview/pr-858/docs/modeling/testing"}},c={},d=[{value:"Before You Start",id:"before-you-start",level:2},{value:"<ProductName></ProductName> Concepts",id:"-concepts",level:3},{value:"Scenario",id:"scenario",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Step By Step",id:"step-by-step",level:2},{value:"Understand Relationships Without Contextual Data",id:"understand-relationships-without-contextual-data",level:3},{value:"Take Organization Context Into Consideration",id:"take-organization-context-into-consideration",level:3},{value:"Extend The Authorization Model",id:"extend-the-authorization-model",level:5},{value:"Add The Required Tuples To Mark That Anne Is In An Approved Context",id:"add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context",level:5},{value:"Use Contextual Tuples For Context Related Checks",id:"use-contextual-tuples-for-context-related-checks",level:3},{value:"Summary",id:"summary",level:2},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"authorization-through-organization-context",children:"Authorization Through Organization Context"})}),"\n",(0,i.jsx)(r.ZE,{}),"\n",(0,i.jsx)(t.p,{children:"This section tackles cases where a user may have access to a particular resource through their presence in a particular organization, and they should have that access only when logged in within the context of that organization."}),"\n",(0,i.jsxs)(r.u6,{title:"When to use",appearance:"filled",children:[(0,i.jsx)(t.p,{children:"Contextual Tuples should be used when modeling cases where a user's access to an object depends on the context of their request. For example:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"An employee\u2019s ability to access a document when they are connected to the organization VPN or the api call is originating from an internal IP address."}),"\n",(0,i.jsx)(t.li,{children:"A support engineer is only able to access a user's account during office hours."}),"\n",(0,i.jsx)(t.li,{children:"If a user belongs to multiple organizations, they are only able to access a resource if they set a specific organization in their current context."}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"before-you-start",children:"Before You Start"}),"\n",(0,i.jsxs)(t.p,{children:["To follow this guide, you should be familiar with some ",(0,i.jsx)(r.OK,{}),"."]}),"\n",(0,i.jsxs)(t.h3,{id:"-concepts",children:[(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," Concepts"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(r.OK,{section:"what-is-a-relation",linkName:"Relation"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"]}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(r.OK,{section:"what-is-a-check-request",linkName:"Check Request"}),": is a call to the ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," check endpoint that returns whether the user has a certain relationship with an object."]}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(r.OK,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple"}),": a grouping consisting of a user, a relation and an object stored in ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})]}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(r.OK,{section:"what-are-contextual-tuples",linkName:"Contextual Tuple"}),": a tuple that can be added to a check request, and only exist within the context of that particular request."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You also need to be familiar with:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Modeling Object-to-Object Relationships"}),": You need to know how to create relationships between objects and how that might affect a user's relationships to those objects. ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-858/docs/modeling/building-blocks/object-to-object-relationships",children:"Learn more \u2192"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Modeling Multiple Restrictions"}),": You need to know how to model requiring multiple authorizations before allowing users to perform certain actions. ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-858/docs/modeling/multiple-restrictions",children:"Learn more \u2192"})]}),"\n"]}),"\n",(0,i.jsx)(r.QF,{}),"\n",(0,i.jsx)(t.h3,{id:"scenario",children:"Scenario"}),"\n",(0,i.jsx)(t.p,{children:"For the scope of this guide, we are going to consider the following scenario."}),"\n",(0,i.jsx)(t.p,{children:"Consider you are building the authorization model for a multi-tenant project management system."}),"\n",(0,i.jsx)(t.p,{children:"In this particular system:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"projects are owned and managed by companies"}),"\n",(0,i.jsx)(t.li,{children:"users can be members of multiple companies"}),"\n",(0,i.jsx)(t.li,{children:"project access is governed by the user's role in the organization that manages the project"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In order for a user to access a project:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The project needs to be managed by an organization the user is a member of"}),"\n",(0,i.jsx)(t.li,{children:"A project is owned by a single organization"}),"\n",(0,i.jsx)(t.li,{children:"A project can be shared with partner companies (that are able to view, edit but not perform admin actions, such as deletion, on the project)"}),"\n",(0,i.jsx)(t.li,{children:"The user should have a role that grants access to the project"}),"\n",(0,i.jsx)(t.li,{children:"The user should be logged in within the context of that organization"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"We will start with the following authorization model:"}),"\n",(0,i.jsx)(r.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"organization",relations:{member:{this:{}},project_manager:{this:{}},project_editor:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]},project_manager:{directly_related_user_types:[{type:"user"}]},project_editor:{directly_related_user_types:[{type:"user"}]}}}},{type:"project",relations:{owner:{this:{}},partner:{this:{}},manager:{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_manager"}}},editor:{union:{child:[{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_editor"}}},{tupleToUserset:{tupleset:{object:"",relation:"partner"},computedUserset:{object:"",relation:"project_editor"}}},{computedUserset:{object:"",relation:"manager"}}]}},can_delete:{computedUserset:{object:"",relation:"manager"}},can_edit:{computedUserset:{object:"",relation:"editor"}},can_view:{computedUserset:{object:"",relation:"editor"}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"organization"}]},partner:{directly_related_user_types:[{type:"organization"}]}}}}]}}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)("summary",{children:[(0,i.jsx)(t.p,{children:"We are considering the case that:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Anne has a project manager role at organizations A, B and C"}),"\n",(0,i.jsx)(t.li,{children:"Beth has a project manager role at organization B"}),"\n",(0,i.jsx)(t.li,{children:"Carl has a project manager role at organization C"}),"\n",(0,i.jsx)(t.li,{children:"Project X is owned by organization A"}),"\n",(0,i.jsx)(t.li,{children:"Project X is shared with organization B"}),"\n"]})]}),(0,i.jsx)(t.p,{children:"The above state translates to the following relationship tuples:"}),(0,i.jsx)(r.dp,{relationshipTuples:[{_description:"Anne has a `project manager` role at organization A",user:"user:anne",relation:"project_manager",object:"organization:A"},{_description:"Anne has a `project manager` role at organization B",user:"user:anne",relation:"project_manager",object:"organization:B"},{_description:"Anne has a `project manager` role at organization C",user:"user:anne",relation:"project_manager",object:"organization:C"},{_description:"Beth has a `project manager` role at organization B",user:"user:anne",relation:"project_manager",object:"organization:B"},{_description:"Carl has a `project manager` role at organization C",user:"user:carl",relation:"project_manager",object:"organization:C"},{_description:"Organization A owns Project X",user:"organization:A",relation:"owner",object:"project:X"},{_description:"Project X is shared with Organization B",user:"organization:B",relation:"partner",object:"project:X"}],skipSetup:!0})]}),"\n",(0,i.jsx)(t.h3,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"When logging in within the context of organization A, Anne should be able to view and delete project X."}),"\n",(0,i.jsx)(t.li,{children:"When logging in within the context of organization B, Anne should be able to view, but not delete, project X."}),"\n",(0,i.jsx)(t.li,{children:"When logging in within the context of organization C, Anne should not be able to view nor delete project X."}),"\n",(0,i.jsx)(t.li,{children:"When logging in within the context of organization B, Beth should be able to view, but not delete, project X."}),"\n",(0,i.jsx)(t.li,{children:"Carl should not be able to view nor delete project X."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-by-step",children:"Step By Step"}),"\n",(0,i.jsx)(t.p,{children:"In order to solve for the requirements above, we will break the problem down into three steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#understand-relationships-without-contextual-data",children:"Understand relationships without contextual tuples"}),'. For example, we need to ensure that Anne can view and delete "Project X".']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#take-organization-context-into-consideration",children:"Take organization context into consideration"}),". This includes ",(0,i.jsx)(t.a,{href:"#extend-the-authorization-model",children:"extending the authorization model"})," and a temporary step of ",(0,i.jsx)(t.a,{href:"#add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context",children:"adding the required tuples to mark that Anne is in an approved context"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#use-contextual-tuples-for-context-related-checks",children:"Use contextual tuples for context related checks"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"understand-relationships-without-contextual-data",children:"Understand Relationships Without Contextual Data"}),"\n",(0,i.jsxs)(t.p,{children:["With the authorization model and relationship tuples shown above, ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm}),' has all the information needed to ensure that Anne can view and delete "Project X".']}),"\n",(0,i.jsx)(t.p,{children:"We can verify that using the following checks:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Anne can view Project X","\n",(0,i.jsx)(r.ou,{user:"user:anne",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Anne can delete Project X","\n",(0,i.jsx)(r.ou,{user:"user:anne",relation:"can_delete",object:"project:X",allowed:!0,skipSetup:!0}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"More checks"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Beth can view Project X"}),"\n"]}),(0,i.jsx)(r.ou,{user:"user:beth",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Beth cannot delete Project X"}),"\n"]}),(0,i.jsx)(r.ou,{user:"user:beth",relation:"can_delete",object:"project:X",allowed:!1,skipSetup:!0}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Carl cannot view Project X"}),"\n"]}),(0,i.jsx)(r.ou,{user:"user:carl",relation:"can_view",object:"project:X",allowed:!1,skipSetup:!0}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Carl cannot delete Project X"}),"\n"]}),(0,i.jsx)(r.ou,{user:"user:carl",relation:"can_delete",object:"project:X",allowed:!1,skipSetup:!0})]}),"\n",(0,i.jsx)(t.p,{children:'Note that so far, we have not prevented Anne from viewing "Project X" even if Anne is viewing it from the context of Organization C.'}),"\n",(0,i.jsx)(t.h3,{id:"take-organization-context-into-consideration",children:"Take Organization Context Into Consideration"}),"\n",(0,i.jsx)(t.h5,{id:"extend-the-authorization-model",children:"Extend The Authorization Model"}),"\n",(0,i.jsxs)(t.p,{children:["In order to add a restriction based on the current organization context, we will make use of ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," configuration language's support for ",(0,i.jsx)(t.a,{href:"/pr-preview/pr-858/docs/configuration-language#the-intersection-operator",children:"intersection"})," to specify that a user has to both have access ",(0,i.jsx)(t.em,{children:"and"})," be in the correct context in order to be authorized."]}),"\n",(0,i.jsx)(t.p,{children:"We can do that by introducing some new relations and updating existing relation definitions:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'On the "organization" type'}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Add "user_in_context" relation to mark that a user\'s access is being evaluated within that particular context'}),"\n",(0,i.jsxs)(t.li,{children:['Update the "project_manager" relation to require that the user be in the correct context (by adding ',(0,i.jsx)(t.code,{children:"and user_in_context"})," to the relation definition)"]}),"\n",(0,i.jsxs)(t.li,{children:["Considering that ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm}),' does not yet support multiple logical operations within the same definition, we will split "project_editor" into two:',"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:['"base_project_editor" editor which will contain the original relation definition (',(0,i.jsx)(t.code,{children:"[user] or project_manager"}),")"]}),"\n",(0,i.jsx)(t.li,{children:'"project_editor" which will require that a user has both the "base_project_editor" and the "user_in_context" relations'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'The "organization" type definition then becomes:'}),"\n",(0,i.jsx)(r.pB,{configuration:{schema_version:"1.1",type:"organization",relations:{member:{this:{}},project_manager:{intersection:{child:[{this:{}},{computedUserset:{object:"",relation:"user_in_context"}}]}},base_project_editor:{union:{child:[{this:{}},{computedUserset:{object:"",relation:"project_manager"}}]}},project_editor:{intersection:{child:[{computedUserset:{object:"",relation:"base_project_editor"}},{computedUserset:{object:"",relation:"user_in_context"}}]}},user_in_context:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]},project_manager:{directly_related_user_types:[{type:"user"}]},base_project_editor:{directly_related_user_types:[{type:"user"}]},user_in_context:{directly_related_user_types:[{type:"user"}]}}}},skipVersion:!0}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:'On the "project" type'}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Nothing will need to be done, as it will inherit the updated "project_manager" and "project_editor" relation definitions from "organization"'}),"\n"]}),"\n",(0,i.jsx)(t.h5,{id:"add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context",children:"Add The Required Tuples To Mark That Anne Is In An Approved Context"}),"\n",(0,i.jsx)(t.p,{children:"Now that we have updated our authorization model to take the current user's organization context into consideration, you will notice that Anne has lost access because nothing indicates that Anne is authorizing from the context of an organization. You can verify that by issuing the following check:"}),"\n",(0,i.jsx)(r.ou,{user:"user:anne",relation:"can_view",object:"project:X",allowed:!1,skipSetup:!0}),"\n",(0,i.jsx)(t.p,{children:"In order for Anne to be authorized, a tuple indicating Anne's current organization context will need to be present:"}),"\n",(0,i.jsx)(r.dp,{relationshipTuples:[{_description:"Anne is authorizing from the context of organization:A",user:"user:anne",relation:"user_in_context",object:"organization:A"}]}),"\n",(0,i.jsx)(t.p,{children:"We can verify this by running a check request"}),"\n",(0,i.jsx)(r.ou,{user:"user:anne",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0}),"\n",(0,i.jsx)(t.h3,{id:"use-contextual-tuples-for-context-related-checks",children:"Use Contextual Tuples For Context Related Checks"}),"\n",(0,i.jsxs)(t.p,{children:["Now that we know we can authorize based on present state, we have a different problem to solve. We are storing the tuples in the state in order for ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," to evaluate them, which fails in certain use-cases where Anne can be connected to two different contexts in different browser windows at the same time, as each has a different context at the same time, so if they are written to the state, which will ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," use to compute Anne's access to the project?"]}),"\n",(0,i.jsxs)(t.p,{children:["For Check calls, ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm}),' has a concept called "',(0,i.jsx)(r.OK,{section:"what-are-contextual-tuples",linkName:"Contextual Tuples"}),'". Contextual Tuples are tuples that do ',(0,i.jsx)(t.strong,{children:"not"})," exist in the system state and are not written beforehand to ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm}),". They are tuples that are sent alongside the Check request and will be treated as ",(0,i.jsx)(t.em,{children:"if"})," they already exist in the state for the context of that particular Check call. That means that Anne can be using two different sessions, each within a different organization context, and ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," will correctly respond to each one with the correct authorization decision."]}),"\n",(0,i.jsxs)(t.p,{children:["First, we will undo the ",(0,i.jsx)(t.a,{href:"#add-the-required-tuples-to-mark-that-anne-is-in-an-approved-context",children:"temporary step"})," and remove the stored tuples for which Anne has a ",(0,i.jsx)(t.code,{children:"user_in_context"})," relation with ",(0,i.jsx)(t.code,{children:"organization:A"}),"."]}),"\n",(0,i.jsx)(r.dp,{deleteRelationshipTuples:[{_description:"Delete stored tuples where Anne is authorizing from the context of organization:A",user:"user:anne",relation:"user_in_context",object:"organization:A"}]}),"\n",(0,i.jsxs)(t.p,{children:["Next, when Anne is connecting from the context of organization A, ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," will return ",(0,i.jsx)(t.code,{children:'{"allowed":true}'}),":"]}),"\n",(0,i.jsx)(r.ou,{user:"user:anne",relation:"can_view",object:"project:X",allowed:!0,skipSetup:!0,contextualTuples:[{_description:"Anne is authorizing from the context of organization:A",user:"user:anne",relation:"user_in_context",object:"organization:A"}]}),"\n",(0,i.jsxs)(t.p,{children:["When Anne is connecting from the context of organization C, ",(0,i.jsx)(r.bU,{format:r.Ed.ShortForm})," will return ",(0,i.jsx)(t.code,{children:'{"allowed":false}'}),":"]}),"\n",(0,i.jsx)(r.ou,{user:"user:anne",relation:"can_view",object:"project:X",allowed:!1,skipSetup:!0,contextualTuples:[{_description:"Anne is authorizing from the context of organization:A",user:"user:anne",relation:"user_in_context",object:"organization:C"}]}),"\n",(0,i.jsx)(t.p,{children:"Using this, you can check that the following requirements are satisfied:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"User"}),(0,i.jsx)(t.th,{children:"Organization Context"}),(0,i.jsx)(t.th,{children:"Action"}),(0,i.jsx)(t.th,{children:"Allowed"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Anne"}),(0,i.jsx)(t.td,{children:"Organization A"}),(0,i.jsx)(t.td,{children:"View"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Anne"}),(0,i.jsx)(t.td,{children:"Organization B"}),(0,i.jsx)(t.td,{children:"View"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Anne"}),(0,i.jsx)(t.td,{children:"Organization C"}),(0,i.jsx)(t.td,{children:"View"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Anne"}),(0,i.jsx)(t.td,{children:"Organization A"}),(0,i.jsx)(t.td,{children:"Delete"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Anne"}),(0,i.jsx)(t.td,{children:"Organization B"}),(0,i.jsx)(t.td,{children:"Delete"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Anne"}),(0,i.jsx)(t.td,{children:"Organization C"}),(0,i.jsx)(t.td,{children:"Delete"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Beth"}),(0,i.jsx)(t.td,{children:"Organization B"}),(0,i.jsx)(t.td,{children:"View"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Beth"}),(0,i.jsx)(t.td,{children:"Organization B"}),(0,i.jsx)(t.td,{children:"Delete"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Carl"}),(0,i.jsx)(t.td,{children:"Organization C"}),(0,i.jsx)(t.td,{children:"View"}),(0,i.jsx)(t.td,{children:"No"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Carl"}),(0,i.jsx)(t.td,{children:"Organization C"}),(0,i.jsx)(t.td,{children:"Delete"}),(0,i.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(t.p,{children:"Final version of the Authorization Model and Relationship tuples"})}),(0,i.jsx)(r.pB,{configuration:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"organization",relations:{member:{this:{}},project_manager:{intersection:{child:[{this:{}},{computedUserset:{object:"",relation:"user_in_context"}}]}},base_project_editor:{union:{child:[{this:{}},{computedUserset:{object:"",relation:"project_manager"}}]}},project_editor:{intersection:{child:[{computedUserset:{object:"",relation:"base_project_editor"}},{computedUserset:{object:"",relation:"user_in_context"}}]}},user_in_context:{this:{}}},metadata:{relations:{member:{directly_related_user_types:[{type:"user"}]},project_manager:{directly_related_user_types:[{type:"user"}]},base_project_editor:{directly_related_user_types:[{type:"user"}]},user_in_context:{directly_related_user_types:[{type:"user"}]}}}},{type:"project",relations:{owner:{this:{}},partner:{this:{}},manager:{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_manager"}}},editor:{union:{child:[{computedUserset:{object:"",relation:"manager"}},{tupleToUserset:{tupleset:{object:"",relation:"owner"},computedUserset:{object:"",relation:"project_editor"}}},{tupleToUserset:{tupleset:{object:"",relation:"partner"},computedUserset:{object:"",relation:"project_editor"}}}]}},can_delete:{computedUserset:{object:"",relation:"manager"}},can_edit:{computedUserset:{object:"",relation:"editor"}},can_view:{computedUserset:{object:"",relation:"editor"}}},metadata:{relations:{owner:{directly_related_user_types:[{type:"organization"}]},partner:{directly_related_user_types:[{type:"organization"}]}}}}]}}),(0,i.jsx)(r.dp,{relationshipTuples:[{_description:"Anne has a `project manager` role at organization A",user:"user:anne",relation:"project_manager",object:"organization:A"},{_description:"Anne has a `project manager` role at organization B",user:"user:anne",relation:"project_manager",object:"organization:B"},{_description:"Anne has a `project manager` role at organization C",user:"user:anne",relation:"project_manager",object:"organization:C"},{_description:"Beth has a `project manager` role at organization B",user:"user:beth",relation:"project_manager",object:"organization:B"},{_description:"Carl has a `project manager` role at organization C",user:"user:carl",relation:"project_manager",object:"organization:C"},{_description:"Organization A owns Project X",user:"organization:A",relation:"owner",object:"project:X"},{_description:"Project X is shared with Organization B",user:"organization:B",relation:"partner",object:"project:X"}],skipSetup:!0})]}),"\n",(0,i.jsxs)(t.admonition,{title:"Warning",type:"caution",children:[(0,i.jsx)(t.p,{children:"Contextual tuples:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Are not persisted in the store."}),"\n",(0,i.jsxs)(t.li,{children:["Are only supported on the ",(0,i.jsx)(r.Oe,{link:"/api/service#Relationship%20Queries/Check",name:"Check API endpoint"})," and ",(0,i.jsx)(r.Oe,{link:"/api/service#Relationship%20Queries/ListObjects",name:"ListObjects API endpoint"}),". They are not supported on read, expand and other endpoints."]}),"\n",(0,i.jsxs)(t.li,{children:["If you are using the ",(0,i.jsx)(r.Oe,{link:"/api/service#Relationship%20Tuples/ReadChanges",name:"Read Changes API endpoint"})," to build a permission aware search index, note that it will not be trivial to take contextual tuples into account."]}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,i.jsx)(r.XQ,{description:"Check the following sections for more on how user groups can be used.",relatedLinks:[{title:"Modeling with Multiple Restrictions",description:"Learn how to model requiring multiple relationships before users are authorized to perform certain actions.",link:"./multiple-restrictions",id:"./multiple-restrictions.mdx"},{title:"Contextual and Time-Based Authorization",description:"Learn how to authorize access that depends on dynamic or contextual criteria.",link:"./contextual-time-based-authorization",id:"./contextual-time-based-authorization.mdx"},{title:"{ProductName} Check API",description:"Details on the Check API in the {ProductName} reference guide.",link:"/api/service#Relationship%20Queries/Check"}]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);
"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[7474],{85666:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=i(74848),s=i(28453),r=i(82879);i(11470),i(19365);const o={sidebar_position:8,slug:"/modeling/conditions",description:"Modeling relationships with Conditions"},a="Conditions",d={id:"content/modeling/conditions",title:"Conditions",description:"Modeling relationships with Conditions",source:"@site/docs/content/modeling/conditions.mdx",sourceDirName:"content/modeling",slug:"/modeling/conditions",permalink:"/pr-preview/pr-705/docs/modeling/conditions",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/conditions.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/modeling/conditions",description:"Modeling relationships with Conditions"},sidebar:"docs",previous:{title:"Custom Roles",permalink:"/pr-preview/pr-705/docs/modeling/custom-roles"},next:{title:"Use Token Claims As Contextual Tuples",permalink:"/pr-preview/pr-705/docs/modeling/token-claims-contextual-tuples"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Defining Conditions in Models",id:"defining-conditions-in-models",level:2},{value:"Writing Conditional Relationship Tuples",id:"writing-conditional-relationship-tuples",level:2},{value:"Queries with Condition Context",id:"queries-with-condition-context",level:2},{value:"Examples",id:"examples",level:2},{value:"Supported Parameter Types",id:"supported-parameter-types",level:2},{value:"Limitations",id:"limitations",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"conditions",children:"Conditions"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["Conditions allow you to model more complex authorization modeling scenarios involving attributes and can be used to represent some Attribute-based Access Control (ABAC) policies. Take a look at the ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-705/docs/concepts#what-is-a-condition",children:"Conditions"})," and ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-705/docs/concepts#what-is-a-conditional-relationship-tuple",children:"Conditional Relationship Tuples"})," concepts for a quick overview."]}),"\n",(0,n.jsx)(t.p,{children:"There are various use cases where Conditions can be helpful. These include, but are not limited to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/openfga/sample-stores/tree/main/stores/temporal-access",children:(0,n.jsx)(t.strong,{children:"Temporal Access Policies"})})," - manage user access for a window of time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/openfga/sample-stores/tree/main/stores/ip-based-access",children:(0,n.jsx)(t.strong,{children:"IP Allowlists or Geo-fencing Policies"})})," - limit or grant access based on an IP Address range or corporate network policy."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/openfga/sample-stores/tree/main/stores/advanced-entitlements",children:(0,n.jsx)(t.strong,{children:"Usage-based/Feature-based Policies (Entitlements)"})})," - enforce quota or usage of some resource or feature."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/openfga/sample-stores/tree/main/stores/groups-resource-attributes",children:(0,n.jsx)(t.strong,{children:"Resource-attribute Policies"})})," - define policies to access resources based on attributes/fields of the resource(s)."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For more information and background context on why we added this feature, please see our blog post on ",(0,n.jsx)(t.a,{href:"https://openfga.dev/blog/conditional-tuples-announcement",children:"Conditional Relationship Tuples for OpenFGA"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"defining-conditions-in-models",children:"Defining Conditions in Models"}),"\n",(0,n.jsx)(t.p,{children:"For this example we'll use the following authorization model to demonstrate a temporal based access policy. Namely, a user can view a document if and only if they have been granted the viewer relationship AND their non-expired grant policy is met."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dsl.openfga",children:"model\n  schema 1.1\n\ntype user\n\ntype document\n  relations\n    define viewer: [user with non_expired_grant]\n\ncondition non_expired_grant(current_time: timestamp, grant_time: timestamp, grant_duration: duration) {\n  current_time < grant_time + grant_duration\n}\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The type restriction for ",(0,n.jsx)(t.code,{children:"document#viewer"})," requires that any user of type ",(0,n.jsx)(t.code,{children:"user"})," that is written in the relationship tuple must be accompanied by the ",(0,n.jsx)(t.code,{children:"non_expired_grant"})," condition. This is denoted by the ",(0,n.jsx)(t.code,{children:"user with non_expired_grant"})," specification."]})}),"\n",(0,n.jsx)(t.p,{children:"Write the model to the FGA store:"}),"\n",(0,n.jsx)(r.Rh,{authorizationModel:{schema_version:"1.1",type_definitions:[{type:"user"},{type:"document",relations:{viewer:{this:{}}},metadata:{relations:{viewer:{directly_related_user_types:[{type:"user",condition:"non_expired_grant"}]}}}}],conditions:{non_expired_grant:{name:"non_expired_grant",expression:"current_time < grant_time + grant_duration",parameters:{current_time:{type_name:"TYPE_NAME_TIMESTAMP"},grant_duration:{type_name:"TYPE_NAME_DURATION"},grant_time:{type_name:"TYPE_NAME_TIMESTAMP"}}}}},skipSetup:!0,allowedLanguages:[r.NH.JS_SDK,r.NH.GO_SDK,r.NH.DOTNET_SDK,r.NH.PYTHON_SDK,r.NH.JAVA_SDK,r.NH.CLI,r.NH.CURL]}),"\n",(0,n.jsx)(t.h2,{id:"writing-conditional-relationship-tuples",children:"Writing Conditional Relationship Tuples"}),"\n",(0,n.jsxs)(t.p,{children:["Using the model above, when we ",(0,n.jsx)(t.a,{href:"https://openfga.dev/api/service#/Relationship%20Tuples/Write",children:"Write"})," relationship tuples to the OpenFGA store, then any ",(0,n.jsx)(t.code,{children:"document#viewer"})," relationship with ",(0,n.jsx)(t.code,{children:"user"})," objects must be accompanied by the condition ",(0,n.jsx)(t.code,{children:"non_expired_grant"})," because the type restriction requires it."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, we can give ",(0,n.jsx)(t.code,{children:"user:anne"})," viewer access to ",(0,n.jsx)(t.code,{children:"document:1"})," for 10 minutes by writing the following relationship tuple:"]}),"\n",(0,n.jsx)(r.dp,{relationshipTuples:[{user:"user:anne",relation:"viewer",object:"document:1",condition:{name:"non_expired_grant",context:{grant_time:"2023-01-01T00:00:00Z",grant_duration:"10m"}}}],skipSetup:!0,allowedLanguages:[r.NH.JS_SDK,r.NH.GO_SDK,r.NH.DOTNET_SDK,r.NH.PYTHON_SDK,r.NH.JAVA_SDK,r.NH.CLI,r.NH.CURL]}),"\n",(0,n.jsx)(t.h2,{id:"queries-with-condition-context",children:"Queries with Condition Context"}),"\n",(0,n.jsxs)(t.p,{children:["Now that we have written a ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-705/docs/concepts#what-is-a-conditional-relationship-tuple",children:"Conditional Relationship Tuple"}),", we can query OpenFGA using the ",(0,n.jsx)(t.a,{href:"https://openfga.dev/api/service#/Relationship%20Queries/Check",children:"Check API"})," to see if ",(0,n.jsx)(t.code,{children:"user:anne"})," has viewer access to ",(0,n.jsx)(t.code,{children:"document:1"})," under certain conditions/context. That is, ",(0,n.jsx)(t.code,{children:"user:anne"})," should only have access if the current timestamp is less than the grant timestamp (e.g. the time which the tuple was written) plus the duration of the grant (10 minutes). If the current timestamp is less than, then you'll get a permissive decision. For example,"]}),"\n",(0,n.jsx)(r.ou,{user:"user:anne",relation:"viewer",object:"document:1",context:{current_time:"2023-01-01T00:09:50Z"},allowed:!0,skipSetup:!0,allowedLanguages:[r.NH.JS_SDK,r.NH.GO_SDK,r.NH.DOTNET_SDK,r.NH.PYTHON_SDK,r.NH.JAVA_SDK,r.NH.CLI,r.NH.CURL]}),"\n",(0,n.jsx)(t.p,{children:"but if the current time is outside the grant window then you get a deny decision. For example,"}),"\n",(0,n.jsx)(r.ou,{user:"user:anne",relation:"viewer",object:"document:1",context:{current_time:"2023-01-01T00:10:01Z"},allowed:!1,skipSetup:!0,allowedLanguages:[r.NH.JS_SDK,r.NH.GO_SDK,r.NH.DOTNET_SDK,r.NH.PYTHON_SDK,r.NH.JAVA_SDK,r.NH.CLI,r.NH.CURL]}),"\n",(0,n.jsxs)(t.p,{children:["Similarly, we can use the ",(0,n.jsx)(t.a,{href:"https://openfga.dev/api/service#/Relationship%20Queries/ListObjects",children:"ListObjects API"})," to return all of the documents that ",(0,n.jsx)(t.code,{children:"user:anne"})," has viewer access to given the current time. For example,"]}),"\n",(0,n.jsx)(r.kc,{objectType:"document",relation:"viewer",user:"user:anne",context:{current_time:"2023-01-01T00:09:50Z"},expectedResults:["document:1"],skipSetup:!0,allowedLanguages:[r.NH.JS_SDK,r.NH.GO_SDK,r.NH.DOTNET_SDK,r.NH.PYTHON_SDK,r.NH.JAVA_SDK,r.NH.CLI,r.NH.CURL]}),"\n",(0,n.jsx)(t.p,{children:"but if the current time is outside the grant window then we don't get the object in the response. For example,"}),"\n",(0,n.jsx)(r.kc,{objectType:"document",relation:"viewer",user:"user:anne",context:{current_time:"2023-01-01T00:10:01Z"},expectedResults:[],skipSetup:!0,allowedLanguages:[r.NH.JS_SDK,r.NH.GO_SDK,r.NH.DOTNET_SDK,r.NH.PYTHON_SDK,r.NH.JAVA_SDK,r.NH.CLI,r.NH.CURL]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"When evaluating a condition at request time, the context written/persisted in the relationship tuple and the context provided at request time are merged together into a single evaluation context."}),(0,n.jsx)(t.p,{children:"If you provide a context value in the request context that is also written/persisted in the relationship tuple, then the context values written in the relationship tuple take precedence. That is, the merge strategy is such that persisted context has higher precedence than request context."})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["For more examples take a look at our ",(0,n.jsx)(t.a,{href:"https://github.com/openfga/sample-stores",children:"Sample Stores"})," repository. There are various examples with ABAC models in that repository."]}),"\n",(0,n.jsx)(t.h2,{id:"supported-parameter-types",children:"Supported Parameter Types"}),"\n",(0,n.jsxs)(t.p,{children:["The following table enumerates the list of supported parameter types. The more formal list is defined in ",(0,n.jsx)(t.a,{href:"https://github.com/openfga/openfga/tree/main/internal/condition/types",children:"https://github.com/openfga/openfga/tree/main/internal/condition/types"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Note that some of the types support generics, these types are indicated with ",(0,n.jsx)(t.code,{children:"<T>"}),"."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Friendly Type Name"}),(0,n.jsx)(t.th,{children:"Type Name (Protobuf Enum)"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Examples"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_INT"}),(0,n.jsx)(t.td,{children:"A 64-bit signed integer value."}),(0,n.jsxs)(t.td,{children:["-1",(0,n.jsx)("br",{}),'"-1"']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"uint"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_UINT"}),(0,n.jsx)(t.td,{children:"A 64-bit unsigned integer value."}),(0,n.jsxs)(t.td,{children:["1",(0,n.jsx)("br",{}),'"1"']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"double"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_DOUBLE"}),(0,n.jsxs)(t.td,{children:["A double-width floating point value, represented equivalently as a Go ",(0,n.jsx)(t.code,{children:"float64"})," value.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"If the value is provided as a string we parse it with ",(0,n.jsx)(t.code,{children:"strconv.ParseFloat(s, 64)"}),". See ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/strconv#ParseFloat",children:(0,n.jsx)(t.code,{children:"strconv.ParseFloat"})})," for more info."]}),(0,n.jsxs)(t.td,{children:["3.14159",(0,n.jsx)("br",{}),"-0.75",(0,n.jsx)("br",{}),'"1"',(0,n.jsx)("br",{}),'"-2.5"']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_BOOL"}),(0,n.jsx)(t.td,{children:"A boolean value."}),(0,n.jsxs)(t.td,{children:["true",(0,n.jsx)("br",{}),"false",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),'"true"',(0,n.jsx)("br",{}),'"false"']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bytes"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_BYTES"}),(0,n.jsx)(t.td,{children:"An array of byte values specified as a byte string."}),(0,n.jsx)(t.td,{children:'"bytestring"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_STRING"}),(0,n.jsx)(t.td,{children:"A string value."}),(0,n.jsx)(t.td,{children:'"hello, world"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"duration"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_DURATION"}),(0,n.jsxs)(t.td,{children:["A value representing a duration of time specified using Go duration string format.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"See ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/time#ParseDuration",children:"time.Duration#ParseDuration"})]}),(0,n.jsxs)(t.td,{children:['"120s"',(0,n.jsx)("br",{}),'"2m"']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_TIMESTAMP"}),(0,n.jsx)(t.td,{children:"A timestamp value that follows the RFC3339 specification."}),(0,n.jsx)(t.td,{children:'"2023-01-01T00:00:00Z"'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"any"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_ANY"}),(0,n.jsx)(t.td,{children:"A variant type which permits any value to be provided."}),(0,n.jsxs)(t.td,{children:['{"x": 1}',(0,n.jsx)("br",{}),'"hello"',(0,n.jsx)("br",{}),'["a", "b"]']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"list<T>"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_LIST"}),(0,n.jsx)(t.td,{children:"A list of values of generic type T."}),(0,n.jsxs)(t.td,{children:['list<string> - ["a", "b", "c"]',(0,n.jsx)("br",{}),"list<int> - [-1, 1]",(0,n.jsx)("br",{}),'list<duration> - ["60s", "1m"]']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"map<T>"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_MAP"}),(0,n.jsxs)(t.td,{children:["A map whose keys are strings and whose values are values of generic type T.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Any map value must have string keys, only the value types can vary."]}),(0,n.jsxs)(t.td,{children:['map<int> - {"x": -1, "y": 1}',(0,n.jsx)("br",{}),'map<string> - {"key": "value"}']})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ipaddress"}),(0,n.jsx)(t.td,{children:"TYPE_NAME_IPADDRESS"}),(0,n.jsx)(t.td,{children:"A custom value type specified as a string representation of an IP Address."}),(0,n.jsx)(t.td,{children:'"192.168.0.1"'})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The size of the condition ",(0,n.jsx)(t.code,{children:"context"})," parameter that can be written alongside a relationship tuple is limited to 32KB in size."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The size of the condition ",(0,n.jsx)(t.code,{children:"context"})," parameter for query requests (e.g. Check, ListObjects, etc..) is not explicitly limited, but the OpenFGA server has an overall request size limit of 512KB at this time."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"We're still working on the changes to support Conditions in the official FGA CLI and various OpenFGA SDKs including: .NET and Python. At this moment you cannot Write conditional relationship tuples with these tools and/or query (e.g. Check, ListObjects, etc..) OpenFGA with condition context."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["We enforce a maximum Google CEL expression evaluation cost of 100 (by default) to protect the server from malicious conditions. The evaluation cost of a CEL expression is a function of the size the input that is being compared and the composition of the expression. For more general information please see the official ",(0,n.jsx)(t.a,{href:"https://github.com/google/cel-spec/blob/master/doc/langdef.md",children:"Language Definition for Google CEL"}),". If you hit these limits with practical use-cases, please reach out to the maintainer team and we can discuss."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);
"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[2288],{9186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(85893),r=t(11151),s=t(5270);const a={title:"Use the FGA CLI",description:"Use the FGA CLI",sidebar_position:10,slug:"/getting-started/cli"},o="Use the FGA CLI",l={id:"content/getting-started/cli",title:"Use the FGA CLI",description:"Use the FGA CLI",source:"@site/docs/content/getting-started/cli.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/cli",permalink:"/pr-preview/pr-679/docs/getting-started/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/cli.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Use the FGA CLI",description:"Use the FGA CLI",sidebar_position:10,slug:"/getting-started/cli"},sidebar:"docs",previous:{title:"Perform a List Objects call",permalink:"/pr-preview/pr-679/docs/getting-started/perform-list-objects"},next:{title:"Integrate Within a Framework",permalink:"/pr-preview/pr-679/docs/getting-started/framework"}},d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Basic Operations",id:"basic-operations",level:2},{value:"Work with Authorization Model versions",id:"work-with-authorization-model-versions",level:2},{value:"Import tuples",id:"import-tuples",level:2},{value:"yaml",id:"yaml",level:3},{value:"JSON",id:"json",level:3},{value:"CSV",id:"csv",level:3},{value:"Delete Tuples",id:"delete-tuples",level:2},{value:"Import Stores",id:"import-stores",level:2},{value:"Related Sections",id:"related-sections",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"use-the-fga-cli",children:"Use the FGA CLI"}),"\n",(0,i.jsxs)(n.p,{children:["The  ",(0,i.jsx)(s.rZ,{format:s.v7.ShortForm})," Command Line Interface (CLI) enables you to interact with an FGA store, where you can manage tasks, create stores, and update FGA models, among other actions. For more information on FGA stores, see ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-679/docs/concepts#what-is-a-store",children:"What Is A Store"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For instructions on installing it, visit the ",(0,i.jsx)(n.a,{href:"https://github.com/openfga/cli",children:"OpenFGA CLI Github repository"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The CLI is configured to use a specific FGA server in one of three ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Using CLI flags."}),"\n",(0,i.jsx)(n.li,{children:"Using environment variables."}),"\n",(0,i.jsx)(n.li,{children:"Storing configuration values in a .fga.yaml located in the user\u2019s root directory."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The API Url setting needs to point to the OpenFGA server:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Flag"}),(0,i.jsx)(n.th,{children:"Environment"}),(0,i.jsx)(n.th,{children:"~/.fga.yaml"}),(0,i.jsx)(n.th,{children:"Default Value"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"API Url"}),(0,i.jsx)(n.td,{children:"--api-url"}),(0,i.jsx)(n.td,{children:"FGA_API_URL"}),(0,i.jsx)(n.td,{children:"api-url"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"http://localhost:8080"})})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["If you use ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-679/docs/getting-started/setup-openfga/configure-openfga#pre-shared-key-authentication",children:"pre-shared key authentication"}),", configure the following parameters based on the OIDC server that\u2019s used to issue tokens:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Flag"}),(0,i.jsx)(n.th,{children:"Environment"}),(0,i.jsx)(n.th,{children:"~/.fga.yaml"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Client ID"}),(0,i.jsx)(n.td,{children:"--client-id"}),(0,i.jsx)(n.td,{children:"FGA_CLIENT_ID"}),(0,i.jsx)(n.td,{children:"client-id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Client Secret"}),(0,i.jsx)(n.td,{children:"--client-secret"}),(0,i.jsx)(n.td,{children:"FGA_CLIENT_SECRET"}),(0,i.jsx)(n.td,{children:"client-secret"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Scopes"}),(0,i.jsx)(n.td,{children:"--api-scopes"}),(0,i.jsx)(n.td,{children:"FGA_API_SCOPES"}),(0,i.jsx)(n.td,{children:"api-scopes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Token Issuer"}),(0,i.jsx)(n.td,{children:"--api-token-issuer"}),(0,i.jsx)(n.td,{children:"FGA_API_TOKEN_ISSUER"}),(0,i.jsx)(n.td,{children:"api-token-issuer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Token Audience"}),(0,i.jsx)(n.td,{children:"--api-audience"}),(0,i.jsx)(n.td,{children:"FGA_API_AUDIENCE"}),(0,i.jsx)(n.td,{children:"api-audience"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"A default store Id and authorization model Id can also be configured:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Flag"}),(0,i.jsx)(n.th,{children:"Environment"}),(0,i.jsx)(n.th,{children:"~/.fga.yaml"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Store ID"}),(0,i.jsx)(n.td,{children:"--store-id"}),(0,i.jsx)(n.td,{children:"FGA_STORE_ID"}),(0,i.jsx)(n.td,{children:"store-id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Authorization Model ID"}),(0,i.jsx)(n.td,{children:"--model-id"}),(0,i.jsx)(n.td,{children:"FGA_MODEL_ID"}),(0,i.jsx)(n.td,{children:"model-id"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["All of the examples in this document assume the CLI is properly configured and that the Store ID is set either in an environment variable or the ",(0,i.jsx)(n.code,{children:"~/.fga.yaml"})," file."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-operations",children:"Basic Operations"}),"\n",(0,i.jsx)(n.p,{children:"The CLI commands below show you how to create a store and run your application\u2019s most common operations, including how to write a model and write/delete/read tuples, and run queries."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'\n# Create a store with a model\n$ fga store create --model docs.fga\n{\n  "store": {\n    "created_at":"2024-02-09T23:20:28.637533296Z",\n    "id":"01HP82R96XEJX1Q9YWA9XRQ4PM",\n    "name":"docs",\n    "updated_at":"2024-02-09T23:20:28.637533296Z"\n  },\n  "model": {\n    "authorization_model_id":"01HP82R97B448K89R45PW7NXD8"\n  }\n}\n\n# Keep the returned store id in an environment variable\n$ export FGA_STORE_ID=01HP82R96XEJX1Q9YWA9XRQ4PM\n\n# Get the latest model\n$ fga model get\nmodel\n  schema 1.1\n\ntype user\n\ntype organization\n  relations\n    define admin: [user with non_expired_grant]\n    define member: [user]\n\ntype document\n  relations\n    define editor: admin from organization\n    define organization: [organization]\n    define viewer: editor or member from organization\n\ncondition non_expired_grant(current_time: timestamp, grant_duration: duration, grant_time: timestamp) {\n  current_time < grant_time + grant_duration\n  \n}\n\n# Write a tuple\n$ fga tuple write user:anne member organization:acme\n{\n  "successful": [\n    {\n      "object":"organization:acme",\n      "relation":"member",\n      "user":"user:anne"\n    }\n  ]\n}\n\n# Read all tuples. It returns the one added above\n$ fga tuple read\n{\n  "continuation_token":"",\n  "tuples": [\n    {\n      "key": {\n        "object":"organization:acme",\n        "relation":"member",\n        "user":"user:anne"\n      },\n      "timestamp":"2024-02-09T23:05:43.586Z"\n    }\n  ]\n}\n\n# Write another tuple, adding a document for the acme organization\n$ fga tuple write organization:acme organization document:readme\n{\n  "successful": [\n    {\n      "object":"document:readme",\n      "relation":"organization",\n      "user":"organization:acme"\n    }\n  ]\n}\n\n# Check if anne can view the document. \n# Anne can view it as she\'s a member of organization:acme, which is the organization that owns the document\n$ fga query check user:anne viewer document:readme  \n{\n  "allowed":true,\n  "resolution":""\n}\n\n# List all the documents user:anne can view\n$ fga query list-objects user:anne viewer document  \n{\n  "objects": [\n    "document:readme"\n  ]\n}\n\n# List all the relations that user:anne has with document:readme\n$ fga query list-relations user:anne document:readme\n{\n  "relations": [\n    "viewer"\n  ]\n}\n\n# Delete user:anne as a member of organization:acme\n$ fga tuple delete user:anne member organization:acme\n{}\n\n# Verify that user:anne is no longer a viewer of document:readme\n$ fga query check user:anne viewer document:readme\n{\n  "allowed":false,\n  "resolution":""\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"work-with-authorization-model-versions",children:"Work with Authorization Model versions"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(s.rZ,{format:s.v7.ShortForm})," models are ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-679/docs/getting-started/immutable-models",children:"immutable"}),"; each time a model is written to a store, a new version of the model is created."]}),"\n",(0,i.jsxs)(n.p,{children:["All ",(0,i.jsx)(s.rZ,{format:s.v7.ShortForm})," API endpoints receive an optional authorization model ID that points to a specific version of the model and defaults to the latest model version. Always use a specific model ID and update it each time a new model version is used in production."]}),"\n",(0,i.jsx)(n.p,{children:"The following CLI commands lists the model Ids and find the latest one:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'# List all the authorization models\n$ fga model list\n{\n  "authorization_models": [\n    {\n      "id":"01HPJ8JZV091THNTDFE2SFYNNJ",\n      "created_at":"2024-02-13T22:14:50Z"\n    },\n    {\n      "id":"01HPJ808Q8J56QMK4WNT7MG7P7",\n      "created_at":"2024-02-13T22:04:37Z"\n    },\n    {\n      "id":"01HPJ7YKNV0QT0S6CFRJMK231P",\n      "created_at":"2024-02-13T22:03:43Z"\n    }\n  ]\n}\n\n# List the last model, displaying just the model ID\n$ fga model get --field id                   \n# Model ID: 01HPJ8JZV091THNTDFE2SFYNNJ\n\n# List the last model, displaying just the model ID, in JSON format, to make it simpler to parse\n$ fga model get --field id --format json\n{\n  "id":"01HPJ8JZV091THNTDFE2SFYNNJ"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When using the CLI, the model ID can be specified as a ",(0,i.jsx)(n.code,{children:"--model-id"})," parameter or as part of the configuration."]}),"\n",(0,i.jsx)(n.h2,{id:"import-tuples",children:"Import tuples"}),"\n",(0,i.jsxs)(n.p,{children:["To import tuples, use the",(0,i.jsx)(n.code,{children:"fga tuple write"})," command. It has the following parameters:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"--file"}),(0,i.jsx)(n.td,{children:"Specifies the file name  json, yaml and csv files are supported"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"--max-tuples-per-write (optional, default=1, max=40)"}),(0,i.jsx)(n.td,{children:"Maximum number of tuples to send in a single write"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"--max-parallel-requests (optional, default=4)"}),(0,i.jsx)(n.td,{children:"Maximum number of requests to send in parallel. Make it larger if you want to import a large number of tuples faster"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The CLI returns a list of tuples that were successfully written and a list of tuples that were not, with details of the write failure. If you specify ",(0,i.jsx)(n.code,{children:"-max-tuples-per-write"})," greater than one, an error in one of the tuples implies none of the tuples get written."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ fga tuple write --file tuples.yaml\n\n{\n  "successful": [\n    {\n      "object":"organization:acme",\n      "relation":"member",\n      "user":"user:anne"\n    }\n  ],\n  "failed":null\n}\n\n$ fga tuple write --file tuples.yaml\n{\n   "successful":null,\n  "failed": [\n    {\n      "tuple_key": {\n        "object":"organization:acme",\n        "relation":"member",\n        "user":"user:anne"\n      },\n    "reason":"Write validation error for POST Write with body {\\"code\\":\\"write_failed_due_to_invalid_input\\",\\"message\\":\\"cannot write a tuple which already exists: user: \'user:anne\', relation: \'member\', object: \'organization:acme\': invalid write input\\"}\\n with error code write_failed_due_to_invalid_input error message: cannot write a tuple which already exists: user: \'user:anne\', relation: \'member\', object: \'organization:acme\': invalid write input"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Below are examples of the different file formats the CLI accepts when writing tuples:"}),"\n",(0,i.jsx)(n.h3,{id:"yaml",children:"yaml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'- user: user:peter\n  relation: admin\n  object: organization:acme\n  condition: \n    name: non_expired_grant\n    context: \n      grant_time : "2024-02-01T00:00:00Z"\n      grant_duration : 1h\n- user: user:anne\n  relation: member\n  object: organization:acme\n'})}),"\n",(0,i.jsx)(n.h3,{id:"json",children:"JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[\n    {\n        "user": "user:peter",\n        "relation": "admin",\n        "object": "organization:acme",\n        "condition": {\n            "context": {\n                "grant_duration": "1h",\n                "grant_time": "2024-02-01T00:00:00Z"\n            },\n            "name": "non_expired_grant"\n        }\n    },\n    {\n        "user": "user:anne",\n        "relation": "member",\n        "object": "organization:acme"\n    }\n]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"csv",children:"CSV"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csv",children:'user_type,user_id,user_relation,relation,object_type,object_id,condition_name,condition_context\nuser,anne,member,,organization,acme,,\nuser,peter1,admin,,organization,acme,non_expired_grant,"{""grant_duration"": ""1h"", ""grant_time"": ""2024-02-01T00:00:00Z""}"\n'})}),"\n",(0,i.jsx)(n.p,{children:"When using the CSV format, you can omit certain headers, and you don\u2019t need to specify the value for those fields."}),"\n",(0,i.jsx)(n.h2,{id:"delete-tuples",children:"Delete Tuples"}),"\n",(0,i.jsx)(n.p,{children:"To delete a tuple, specify the user/relation/object you want to delete. To delete a group of tuples, specify a file that contains those tuples."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ fga tuple delete --file tuples.yaml\n{\n  "successful": [\n    {\n      "object":"organization:acme",\n      "relation":"admin",\n      "user":"user:peter"\n    },\n    {\n      "object":"organization:acme",\n      "relation":"member",\n      "user":"user:anne"\n    }\n  ],\n  "failed":null\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Delete all tuples from a store by reading all the tuples first and then deleting them:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Reads all the tuples and outputs them in a json format that can be used by 'fga tuple delete' and 'fga tuple write'.\n\n$ fga tuple read --simple-output --max-pages 0    > tuples.json\n$ fga tuple delete --file  tuples.json\n"})}),"\n",(0,i.jsx)(n.h2,{id:"import-stores",children:"Import Stores"}),"\n",(0,i.jsxs)(n.p,{children:["The CLI can import an ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-679/docs/modeling/testing",children:"FGA Test file"})," in a store. It writes the model included and imports the tuples in the fga test file."]}),"\n",(0,i.jsxs)(n.p,{children:["Given the following ",(0,i.jsx)(n.code,{children:".fga.yaml"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"model: |\n  model\n    schema 1.1\n\n  type user\n  type organization\n   relations\n     define member : [user]\n  }\n\ntuples:\n  # Anne is a member of the Acme organization\n  - user: user:anne\n    relation: member\n    object: organization:acme\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following command is used to import the file contents in a store:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ fga store import --file <filename>.fga.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"fga model get"})," command is used to verify that the model was correctly written, and the ",(0,i.jsx)(n.code,{children:"fga tuple read"})," command is used to verify that the tuples were properly imported."]}),"\n",(0,i.jsx)(n.h2,{id:"related-sections",children:"Related Sections"}),"\n",(0,i.jsx)(s.$q,{description:"Check the following sections for more on how to learn how to write tests.",relatedLinks:[{title:"Testing Models",description:"Learn how to test FGA models using the FGA CLI.",link:"../modeling/testing",id:"../modeling/testing-models.mdx"}]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);
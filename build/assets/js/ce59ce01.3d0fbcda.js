"use strict";(self.webpackChunkidn_docs=self.webpackChunkidn_docs||[]).push([[77],{6232:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=s(5893),i=s(1151);const r={sidebar_position:3},l="ETF.JS SDK",c={id:"build/etf_js",title:"ETF.JS SDK",description:"This is a javascript SDK to encrypt and decrypt messages with the Ideal Network. In particular, it lets users read slot secrets from the Ideal Network, encrypt messages to future slots, and decrypt from historical slots.",source:"@site/docs/build/etf_js.md",sourceDirName:"build",slug:"/build/etf_js",permalink:"/docs/build/etf_js",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/build/etf_js.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts",permalink:"/docs/build/contracts"},next:{title:"ETF SDK",permalink:"/docs/build/etf_sdk"}},a={},o=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Connecting to a node",id:"connecting-to-a-node",level:3},{value:"Full node",id:"full-node",level:4},{value:"Smoldot",id:"smoldot",level:4},{value:"Types",id:"types",level:4},{value:"Timelock Encryption",id:"timelock-encryption",level:3},{value:"Delayed Transactions",id:"delayed-transactions",level:3},{value:"Events",id:"events",level:3},{value:"Etf Class",id:"etf-class",level:2},{value:"Methods",id:"methods",level:3},{value:"Fields",id:"fields",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"etfjs-sdk",children:"ETF.JS SDK"}),"\n",(0,t.jsx)(n.p,{children:"This is a javascript SDK to encrypt and decrypt messages with the Ideal Network. In particular, it lets users read slot secrets from the Ideal Network, encrypt messages to future slots, and decrypt from historical slots."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"To use the library in your code, the latest published version can be installed from NPM with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i @ideallabs/etf.js\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or, you can build the code with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:ideal-lab5/etf.js.git\ncd etf.js\n# ensure typsecript is installed\nnpm i -g typsecript\n# install dependencies\nnpm i\n# build\ntsc\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"The etf.js library can be run either with a full node or with a light client (in browser)."}),"\n",(0,t.jsx)(n.h3,{id:"connecting-to-a-node",children:"Connecting to a node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { Etf } from "@ideallabs/etf.js";\n'})}),"\n",(0,t.jsx)(n.h4,{id:"full-node",children:"Full node"}),"\n",(0,t.jsx)(n.p,{children:"To connect to a full node, pass the address of the node's rpc to the init function."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'let ws = "ws://localhost:9944";\nlet etf = new Etf(ws);\nawait etf.init();\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note: You can connect to the test network by specifying ",(0,t.jsx)(n.code,{children:"ws = 'wss://etf1.idealabs.network:443'"})]}),"\n",(0,t.jsx)(n.h4,{id:"smoldot",children:"Smoldot"}),"\n",(0,t.jsx)(n.p,{children:"To run with an in-browser light client (smoldot), the library is initalized with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"let etf = new Etf();\nawait etf.init(chainSpec);\n"})}),"\n",(0,t.jsx)(n.p,{children:"where you must first fetch the chainspec:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://raw.githubusercontent.com/ideal-lab5/etf/main/etfDevSpecRaw.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"and import into your codebase:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import chainSpec from "./resources/etfTestSpecRaw.json";\n'})}),"\n",(0,t.jsx)(n.p,{children:"This will start a smoldot light client in the browser, which will automatically start syncing with the network. With the current setup, this can take a significant amount of time to complete and we will address that soon."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Warning: smoldot version is currently incompatible with smart contracts."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"types",children:"Types"}),"\n",(0,t.jsxs)(n.p,{children:["The API has an optional ",(0,t.jsx)(n.code,{children:"types"})," parameter, which is a proxy to the polkadotjs types registry, allowing you to register custom types if desired."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// create custom types\nconst CustomTypes = {\n  TlockMessage: {\n    ciphertext: "Vec<u8>",\n    nonce: "Vec<u8>",\n    capsule: "Vec<u8>",\n    commitment: "Vec<u8>",\n  },\n};\nawait api.init(chainSpec, CustomTypes);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"timelock-encryption",children:"Timelock Encryption"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Encryption"})}),"\n",(0,t.jsx)(n.p,{children:"Messages can be encrypted by passing a number of shares, threshold, and a list of future block numbers. In the default EtfClient, encryption uses AES-GCM alongside ETF. It uses TSS to generate key shares, which are encrypted for blocks."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'let message = "encrypt me!";\nlet threshold = 2;\nlet blocks = [151, 152, 159];\nlet seed = "random-seed";\nlet out = etf.encrypt(message, threshold, slotSchedule, seed);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The output contains: ",(0,t.jsx)(n.code,{children:"aes_out = (AES ciphertext, AES nonce, AES secret key), capsule = (encrypted key shares), slot_schedule"}),". The ",(0,t.jsx)(n.code,{children:"capsule"})," contains the IBE encrypted key shares and the slot schedule are the slots for which they're encrypted. It assumes the two lists are the same size and follow the same order."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Decryption"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"let m = await etf.decrypt(ciphertext, nonce, capsule, blockNumbers);\nlet message = String.fromCharCode(...m);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"delayed-transactions",children:"Delayed Transactions"}),"\n",(0,t.jsxs)(n.p,{children:["Delayed transactions can be submitted by using the ",(0,t.jsx)(n.code,{children:"etf.delay"})," API."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// the call to delay\nlet innerCall = etf.api.tx.balances.transferKeepAlive(\n  "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",\n  100\n);\n// calculate a deadline (block)\nlet deadline = etf.latestBlockNumber + 2;\n// prepare delayed call  (call, msk)\nlet outerCall = etf.delay(innerCall, 127, deadline);\nawait outerCall.call.signAndSend(alice, (result) => {\n  if (result.status.isInBlock) {\n    console.log("in block");\n  }\n});\n'})}),"\n",(0,t.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,t.jsx)(n.p,{children:'The Etf client subscribes to new block headers and emits a "blockHeader" event each time a new header is seen. To hook into this, setup an even listener and fetch the latest known slot secret:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// listen for blockHeader events\ndocument.addEventListener("blockHeader", () => {\n  console.log(etf.latestBlockNumber);\n  console.log(etf.latestSlot.slot);\n});\n'})}),"\n",(0,t.jsx)(n.h1,{id:"api-reference",children:"API Reference"}),"\n",(0,t.jsx)(n.h2,{id:"etf-class",children:"Etf Class"}),"\n",(0,t.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"constructor(providerMultiAddr?: string, isProd?: boolean)"})}),"\n",(0,t.jsx)(n.p,{children:"Initializes an instance of the ETF class."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"init(chainSpec?: string, extraTypes?: any): Promise<void>"})}),"\n",(0,t.jsx)(n.p,{children:"Connects to the chain and initializes the ETF API wrapper."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"createType(typeName: string, typeData: any): any"})}),"\n",(0,t.jsx)(n.p,{children:"A proxy to the polkadotjs API type registry creation."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"secrets(blockNumbers: number[]): Promise<Uint8Array[]>"})}),"\n",(0,t.jsx)(n.p,{children:"Fetches secrets from specified blocks."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"encrypt(messageBytes: Uint8Array, threshold: number, blockNumbers: number[], seed: string): { ciphertext: string, sk: string }"})}),"\n",(0,t.jsx)(n.p,{children:"Encrypts a message for future blocks."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"decrypt(ct: Uint8Array, nonce: Uint8Array, capsule: Uint8Array, blockNumbers: number[]): Promise<string>"})}),"\n",(0,t.jsx)(n.p,{children:"Decrypts a timelocked ciphertext."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"delay(rawCall: any, priority: number, deadline: number): { call: any, sk: string, block: number } | Error"})}),"\n",(0,t.jsx)(n.p,{children:"Prepares a secure delayed transaction for a given deadline."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"listenForSecrets(eventEmitter: EventEmitter): void"})}),"\n",(0,t.jsx)(n.p,{children:"Listens for incoming block headers and emits an event when new headers are encountered."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"getLatestSlot(): number"})}),"\n",(0,t.jsx)(n.p,{children:"Fetches the latest known slot."}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"public latestBlockNumber: number"})}),"\n",(0,t.jsx)(n.p,{children:"The latest known block number"}),"\n",(0,t.jsx)(n.h1,{id:"license",children:"License"}),"\n",(0,t.jsx)(n.p,{children:"This project is licensed under the Apache2 License - see the LICENSE file for details."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var t=s(7294);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
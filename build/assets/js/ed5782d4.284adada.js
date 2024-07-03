"use strict";(self.webpackChunkidn_docs=self.webpackChunkidn_docs||[]).push([[561],{2325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(5893),i=n(1151);const r={sidebar_position:4},o="ETF SDK",c={id:"build/etf_sdk",title:"ETF SDK",description:"Timelock Encryption on the Ideal Network.",source:"@site/docs/build/etf_sdk.md",sourceDirName:"build",slug:"/build/etf_sdk",permalink:"/docs/build/etf_sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/build/etf_sdk.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"ETF.JS SDK",permalink:"/docs/build/etf_js"},next:{title:"Run a Validator",permalink:"/docs/build/validator"}},a={},d=[{value:"Components",id:"components",level:2},{value:"EtfClient",id:"etfclient",level:3},{value:"EtfApi",id:"etfapi",level:3},{value:"Timelock Encryption (and Decryption)",id:"timelock-encryption-and-decryption",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"etf-sdk",children:"ETF SDK"}),"\n",(0,s.jsx)(t.p,{children:"Timelock Encryption on the Ideal Network."}),"\n",(0,s.jsx)(t.p,{children:"The ETF SDK is the core cryptographic module of our tech stack for building protocols and apps on top of the Ideal Network."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"1",src:n(3648).Z+"",width:"631",height:"371"})}),"\n",(0,s.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,s.jsx)(t.p,{children:"There are two main components that the SDK provides, the EtfClient and the EtfApi."}),"\n",(0,s.jsx)(t.h3,{id:"etfclient",children:"EtfClient"}),"\n",(0,s.jsxs)(t.p,{children:["The ETF Client is the core functionality of the SDK. The SDK implements functions to use the Ideal Network to encrypt and decrypt messages using ",(0,s.jsx)(t.strong,{children:"IBE"})," and ",(0,s.jsx)(t.strong,{children:"timelock encryption via AES/IBE"}),". The SDK is only one example of a capability which the Ideal Network enables (timelock encryption). The interface defines the method signatures required for our BF-IBE (which etf requires), however implementations have freedom to experiment. To implement it, implement the functions below:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"    fn encrypt(\n        ibe_pp: Vec<u8>,\n        p_pub: Vec<u8>,\n        message: &[u8],\n        ids: Vec<Vec<u8>>,\n        t: u8,\n    ) -> Result<AesIbeCt, ClientError>;\n\n    fn decrypt(\n        ibe_pp: Vec<u8>,\n        ciphertext: Vec<u8>,\n        nonce: Vec<u8>,\n        capsule: Vec<Vec<u8>>,\n        secrets: Vec<Vec<u8>>,\n    ) -> Result<Vec<u8>, ClientError>;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"etfapi",children:"EtfApi"}),"\n",(0,s.jsxs)(t.p,{children:["The EtfApi pulls together the EtfClient and DLEQ proof verifier (and potentially other verifiers in the future). It is both std and no-std compatible, meaning it plays nicely both with rust (e.g. to build a CLI) and also as a wasm build. The EtfApi implementation can be compiled to wasm and used along with ",(0,s.jsx)(t.a,{href:"https://github.com/ideal-lab5/etf.js",children:"etf.js"})," to encrypt/decrypt messages."]}),"\n",(0,s.jsx)(t.p,{children:"We provide a default EtfApi implementation, which uses the DefaultEtfClient."}),"\n",(0,s.jsx)(t.h2,{id:"timelock-encryption-and-decryption",children:"Timelock Encryption (and Decryption)"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Encryption"})}),"\n",(0,s.jsxs)(t.p,{children:["The ETF SDK includes an implementation of the EtfClient and EtfApi, found at ",(0,s.jsx)(t.a,{href:"https://github.com/ideal-lab5/etf-sdk/blob/05f625f14cfd3c020e156e76beecb1a4e8a3f1ba/crypto/src/client/client.rs#L36",children:"DefaultEtfClient"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/ideal-lab5/etf-sdk/blob/05f625f14cfd3c020e156e76beecb1a4e8a3f1ba/api/src/api.rs#L16",children:"DefaultEtfApi"}),". The client uses threshold secret sharing, AES-GCM (",(0,s.jsx)(t.a,{href:"https://github.com/RustCrypto/AEADs/tree/master/aes-gcm",children:"AEADS"}),"), and identity based encryption to generate aes secret keys and encrypt its shares to the future. In brief, it follows the diagram below. The output contains: ",(0,s.jsx)(t.code,{children:"aes_out = (AES ciphertext, AES nonce, AES secret key), capsule = (encrypted key shares), slot_schedule"}),". The ",(0,s.jsx)(t.code,{children:"capsule"})," contains the IBE encrypted key shares and the slot schedule are the slots for which they're encrypted. It assumes the two lists are the same size and follow the same order."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"2",src:n(3921).Z+"",width:"811",height:"752"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Decryption"})}),"\n",(0,s.jsx)(t.p,{children:"Decryption works in reverse. When at least a threshold of slots in the slot schedule have had blocks produced within them, the aes secret key can be reconstructed by decrypting the partially decryptable capsule (e.g. can decrypt 2 of 3 shares) and using lagrange interpolation to recover the master secret, which is then used for decryption."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3921:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/aes_etf-7233494a2fbd06410d878275e6b9dfaf.png"},3648:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sdk-65b03fdfeda25dce13305cb75db83a9b.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
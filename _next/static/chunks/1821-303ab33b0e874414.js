(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1821],{51821:function(e,t,n){Promise.resolve().then(n.bind(n,20736))},20736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return MintPage}});var a,s,r,i,l=n(57437),o=n(2265),d=n(57042),c=n(61396),u=n.n(c);function HeaderIcon(){return(0,l.jsx)("svg",{width:"22",height:"23",viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("rect",{y:"0.5",width:"22",height:"22",rx:"11",fill:"#5B616E"})})}var p=n(14701);n(8780);var m=n(17802),y=n(79037),h=n(69394),f=n(41684);let getSlicedAddress=e=>e?"".concat(e.slice(0,5),"...").concat(e.slice(-4)):"";function AccountInfoPanel(){let{address:e}=(0,y.m)(),{disconnect:t}=(0,f.q)(),n=(0,o.useCallback)(()=>{t(),location.reload()},[t]);return e?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"my-4 inline-flex items-center justify-start gap-2",children:(0,l.jsx)("div",{className:"inline-flex flex-col items-start justify-center gap-1",children:(0,l.jsx)("div",{className:"font-inter w-32 text-base font-medium text-white",children:(0,l.jsx)("p",{children:getSlicedAddress(e)})})})}),(0,l.jsx)("hr",{className:"h-px self-stretch border-transparent bg-zinc-400 bg-opacity-20"}),(0,l.jsxs)("button",{type:"button","aria-label":"Disconnect",className:"my-4 inline-flex items-center justify-between self-stretch",onClick:n,children:[(0,l.jsx)("span",{className:"font-inter w-32 text-left text-base font-medium text-white",children:"Log out"}),(0,l.jsx)(h.iz5,{className:"relative h-4 w-4"})]})]}):null}let AddressDisplay=()=>{let{address:e}=(0,y.m)();return(0,l.jsx)("div",{className:"flex items-center rounded-md bg-[rgba(41,43,48,1)] px-3 py-2",children:(0,l.jsx)("div",{className:"text-neutral-200",children:getSlicedAddress(e)})})};function AccountDropdown(){let{address:e}=(0,y.m)();return(0,l.jsxs)(m.fC,{children:[(0,l.jsx)(m.xz,{asChild:!0,children:e&&(0,l.jsx)("button",{children:(0,l.jsx)(AddressDisplay,{})})}),(0,l.jsx)(m.Uv,{children:(0,l.jsx)(m.VY,{align:"end",sideOffset:40,className:(0,d.W)("h-42 inline-flex w-60 flex-col items-start justify-start","rounded-lg bg-neutral-900 bg-opacity-90 px-6 py-2 shadow backdrop-blur-2xl","DropdownMenuContent"),children:(0,l.jsx)(AccountInfoPanel,{})})})]})}var x=n(87923),g=n(81973),w=n(73449);function Button(e){let{buttonContent:t,type:n="button",className:a,onClick:s,variant:r="primary",disabled:i=!1,icon:o,rounded:c=!0}=e;return(0,l.jsxs)("button",{type:n,onClick:s,className:(0,d.Z)("flex w-full items-center justify-center","py-4 text-md font-semibold","primary"===r?"bg-white":"bg-black","primary"===r?"text-black":"text-white",i&&"primary"===r?"bg-gray-400":null,i&&"secondary"===r?"bg-boat-color-gray-900":null,c?"rounded-full":null,a),disabled:i,style:{backgroundColor:"white",borderRadius:"6px"},children:[o?(0,l.jsx)("span",{className:"mr-2",children:o}):null,t]})}function reloadIfNeeded(){/webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&location.reload()}function CustomConnectButton(e){let{className:t,buttonContent:n}=e,{connectAsync:a,connectors:s}=(0,g.$)(),{switchChain:r}=(0,w.o)(),{address:i,chain:d}=(0,y.m)();(0,o.useEffect)(()=>{console.log(">> switching chain",(null==d?void 0:d.id)!==x.L.id),console.log(">> address",i),i&&(null==d?void 0:d.id)!==x.L.id&&r({chainId:x.L.id})},[i]);let c=(0,o.useCallback)(async()=>{let e=s.find(e=>"coinbaseWallet"==e.type);if(e){console.log(">> connecting",e.type);try{await a({connector:e})}finally{reloadIfNeeded()}}},[a,s]);return(0,l.jsx)(Button,{onClick:c,type:"button",className:null!=t?t:"inline-flex h-10 flex-grow items-center justify-center gap-2 rounded-3xl bg-white px-4 py-2",buttonContent:null!=n?n:"Connect"})}var header_AccountConnect=function(){return(0,l.jsx)(p.NL.Custom,{children:e=>{let{account:t,chain:n,openChainModal:a,authenticationStatus:s,mounted:r}=e,i=r&&"loading"!==s,o=i&&t&&n&&(!s||"authenticated"===s)&&(null==n?void 0:n.id)===x.L.id;return console.log({connected:o,ready:i,account:t,chain:n,authenticationStatus:s,chainId:null==n?void 0:n.id}),(0,l.jsx)("div",{className:"flex flex-grow",...!i&&{"aria-hidden":!0,style:{opacity:0,pointerEvents:"none",userSelect:"none",backgroundColor:"#B388F5"}},children:o?n.unsupported?(0,l.jsx)("button",{onClick:a,type:"button",children:"Wrong network"}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"inline-flex",children:(0,l.jsx)(AccountDropdown,{})})}):(0,l.jsx)(CustomConnectButton,{})})}})};function NavbarLink(e){let{href:t,children:n,target:a}=e;return(0,l.jsx)(u(),{href:t,className:"font-robotoMono flex min-w-8 gap-2 px-0 text-center text-base font-normal text-white no-underline",target:a,children:n})}function NavbarTitle(){return(0,l.jsxs)("div",{className:"flex h-8 items-center justify-start gap-3",children:[(0,l.jsx)(u(),{href:"/",passHref:!0,children:(0,l.jsx)(HeaderIcon,{})}),(0,l.jsx)("span",{className:"text-sm text-gray-500 font-semibold",children:"YOUR APP HERE"})]})}var header_Navbar=function(){return(0,l.jsxs)("nav",{className:"flex flex-col gap-6 pt-6 md:pt-0 md:pb-4",children:[(0,l.jsxs)("div",{className:(0,d.W)("flex flex-1 flex-grow items-center justify-between px-6 lg:px-0"),children:[(0,l.jsx)(NavbarTitle,{}),(0,l.jsx)("div",{children:(0,l.jsx)(header_AccountConnect,{})})]}),(0,l.jsx)("div",{className:"h-[0.5px] w-full bg-gray-700 md:hidden"})]})};function BuildHeader(e){let{className:t}=e;return(0,l.jsxs)("div",{className:(0,d.Z)("w-full p-6 text-left md:text-center",t),style:{backgroundColor:"#141519"},children:[(0,l.jsx)("span",{className:"mr-2",style:{background:"linear-gradient(90deg, #45E1E5 0%, #ABFF28 30%, #FFD200 66.5%, #FBCFFA 100%) text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"We're building a smart wallet. Become an early partner and help build a great onchain experience."}),(0,l.jsx)(u(),{href:"https://www.coinbase.com/blog/evolving-wallets-to-bring-a-billion-users-onchain",className:"text-blue-500 no-underline",target:"_blank",children:"Learn more"})]})}var header_Menu=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(BuildHeader,{className:"md:hidden"}),(0,l.jsx)("div",{className:"container z-10",children:(0,l.jsx)(header_Navbar,{})}),(0,l.jsx)(BuildHeader,{className:"hidden w-full md:mt-4 md:block"})]})},header_Header=function(e){let{ghost:t}=e,[n,a]=(0,o.useState)("at-top");return(0,o.useEffect)(()=>{let e=window.scrollY,handleScroll=()=>{let t=e<window.scrollY?"scrolling-down":"scrolling-up",n=window.scrollY<30?"at-top":t;e=window.scrollY,a(n)};return t?addEventListener("scroll",handleScroll,{passive:!0}):removeEventListener("scroll",handleScroll),handleScroll(),()=>removeEventListener("scroll",handleScroll)},[t]),(0,l.jsx)("header",{"data-scroll-state":n,className:"flex flex-col justify-center md:pt-8",children:(0,l.jsx)(header_Menu,{})})};function CBWIcon(){return(0,l.jsxs)("svg",{width:"153",height:"22",viewBox:"0 0 153 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 11C0 17.0744 4.92556 22 11 22C17.0744 22 22 17.0744 22 11C22 4.92556 17.0744 0 11 0C4.92556 0 0 4.92556 0 11ZM8.18889 7.45556C7.7825 7.45556 7.45556 7.7825 7.45556 8.18889V13.8111C7.45556 14.2175 7.7825 14.5444 8.18889 14.5444H13.8111C14.2175 14.5444 14.5444 14.2175 14.5444 13.8111V8.18889C14.5444 7.7825 14.2175 7.45556 13.8111 7.45556H8.18889Z",fill:"white"}),(0,l.jsxs)("g",{clipPath:"url(#clip0_5078_19542)",children:[(0,l.jsx)("path",{d:"M70.7491 8.35196C69.7368 8.33855 68.7737 8.78101 68.1256 9.55866V5H66.1949V16.8257H68.0943V15.7263C68.7379 16.5307 69.7189 16.9933 70.7491 16.9821C73.0664 16.9821 74.8184 15.1475 74.8184 12.6693C74.8184 10.1911 73.0329 8.35196 70.7491 8.35196ZM70.4586 15.2056C69.0753 15.2056 68.0608 14.1263 68.0608 12.6782C68.0608 11.2302 69.0843 10.1397 70.4742 10.1397C71.8642 10.1397 72.8564 11.2168 72.8564 12.6804C72.8564 14.1441 71.8418 15.2011 70.4586 15.2011V15.2056ZM89.0754 11.8737L87.6586 11.6659C86.9882 11.5698 86.501 11.3441 86.501 10.8123C86.501 10.2335 87.1267 9.94302 87.9804 9.94302C88.9145 9.94302 89.5089 10.3453 89.6385 11.0067H91.5044C91.2943 9.33296 90.0072 8.35196 88.0295 8.35196C86.0519 8.35196 84.6329 9.39777 84.6329 10.8771C84.6329 12.3564 85.5267 13.1117 87.3145 13.3709L88.729 13.581C89.4217 13.6771 89.8083 13.9497 89.8083 14.4749C89.8083 15.1341 89.1379 15.4067 88.1994 15.4067C87.0552 15.4067 86.4117 14.9397 86.3156 14.2335H84.4184C84.5949 15.8581 85.8664 17 88.1815 17C90.291 17 91.6899 16.0346 91.6899 14.3765C91.6809 12.8838 90.6664 12.1106 89.0754 11.8693V11.8737ZM82.8966 11.3598C82.8966 9.55866 81.8016 8.35196 79.4843 8.35196C77.2966 8.35196 76.0742 9.46927 75.8329 11.1676H77.748C77.8441 10.4972 78.358 9.96089 79.453 9.96089C80.434 9.96089 80.9167 10.3944 80.9167 10.9263C80.9167 11.6168 80.0228 11.7933 78.939 11.9073C77.4575 12.0682 75.6228 12.5777 75.6228 14.5128C75.6228 16.0101 76.7402 16.9709 78.5033 16.9709C79.8865 16.9709 80.7558 16.3922 81.1848 15.4737C81.2474 16.2939 81.8552 16.8257 82.7133 16.8257H83.8307V15.105H82.8809L82.8966 11.3598ZM80.9971 13.4514C80.9971 14.5687 80.0318 15.3821 78.8586 15.3821C78.1346 15.3821 77.5178 15.076 77.5178 14.4324C77.5178 13.6123 78.4988 13.3866 79.3994 13.2905C80.2999 13.1944 80.7402 13.0179 80.9927 12.6469L80.9971 13.4514ZM96.8139 8.35196C94.3357 8.35196 92.5167 10.2179 92.5167 12.6782C92.5167 15.2704 94.4653 16.9911 96.8452 16.9911C98.8564 16.9911 100.434 15.8 100.836 14.1106H98.8251C98.5346 14.8503 97.8262 15.2704 96.8787 15.2704C95.6385 15.2704 94.7066 14.4972 94.4966 13.1453H100.883V12.4011C100.883 10.019 99.1469 8.35196 96.8139 8.35196ZM94.6083 11.762C94.9145 10.6045 95.7837 10.0413 96.7804 10.0413C97.8754 10.0413 98.7111 10.667 98.9055 11.762H94.6083ZM38.3133 10.1397C39.2899 10.133 40.1547 10.7698 40.4362 11.7039H42.4787C42.11 9.70838 40.4675 8.35196 38.329 8.35196C35.9848 8.30503 34.0474 10.1687 34.0005 12.5128C34.0005 12.5665 34.0005 12.6201 34.0005 12.6737C34.0005 15.152 35.8508 16.9866 38.329 16.9866C40.4206 16.9866 42.0943 15.6458 42.4631 13.6346H40.4362C40.1659 14.5732 39.3055 15.219 38.329 15.2123C36.9279 15.2123 35.9469 14.133 35.9469 12.6849C35.9469 11.2369 36.9055 10.1397 38.3133 10.1397ZM47.4999 8.35196C45.1558 8.30056 43.2139 10.1598 43.1625 12.5039C43.1625 12.5598 43.1625 12.6179 43.1625 12.6737C43.1625 15.152 45.0128 16.9866 47.491 16.9866C49.8351 17.0559 51.7904 15.2101 51.8597 12.8659C51.8597 12.7966 51.8619 12.7274 51.8597 12.6581C51.8597 10.2134 50.0094 8.35196 47.4999 8.35196ZM47.5156 15.2056C46.1323 15.2056 45.1178 14.1263 45.1178 12.6782C45.1178 11.2302 46.1167 10.1397 47.4999 10.1397C48.8832 10.1397 49.9133 11.2324 49.9133 12.6804C49.9133 14.1285 48.8988 15.2011 47.5156 15.2011V15.2056ZM61.5781 8.35196C60.3223 8.35196 59.5022 8.86592 59.0195 9.58994V8.50838H57.1044V16.8257H59.0284V12.305C59.0284 11.0335 59.8396 10.1397 61.0396 10.1397C62.1569 10.1397 62.8407 10.9285 62.8407 12.0704V16.8257H64.7714V11.9274C64.7625 9.82682 63.6854 8.35196 61.5781 8.35196ZM54.5591 5.08045C53.8977 5.05587 53.3435 5.5743 53.3189 6.23575C53.3189 6.2581 53.3189 6.28045 53.3189 6.30279C53.348 6.98659 53.9267 7.51844 54.6105 7.48939C55.2541 7.46257 55.7703 6.94637 55.7971 6.30279C55.8128 5.64358 55.2899 5.09609 54.6284 5.08045C54.6061 5.08045 54.5815 5.08045 54.5591 5.08045ZM52.3871 10.2201H53.5938V16.8257H55.5245V8.50838H52.396L52.3871 10.2201Z",fill:"white"}),(0,l.jsx)("path",{d:"M119.022 8.50879L115.833 16.8261H117.129L117.864 14.8328H121.598L122.343 16.8172H123.683L120.452 8.50879H119.022ZM118.247 13.7669L119.688 9.84287H119.71L121.176 13.7669H118.247ZM115.042 8.50879L113.281 14.9892H113.257L111.438 8.50879H110.202L108.414 14.9736H108.392L106.604 8.5222H105.286L107.704 16.844H108.921L110.752 10.3099H110.776L112.66 16.844H113.925L116.258 8.50879H115.042ZM145.266 8.50879V9.59482H148.019V16.8261H149.27V9.59482H152.023V8.50879H145.266ZM138.542 16.8261H144.249V15.7401H139.795V13.0585H143.896V12.006H139.795V9.59482H144.249V8.50879H138.542V16.8261ZM132.995 8.50879H131.744V16.8261H137.178V15.7401H132.995V8.50879ZM126.191 8.50879H124.937V16.8261H130.372V15.7401H126.184L126.191 8.50879Z",fill:"white"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_5078_19542",children:(0,l.jsx)("rect",{width:"118.022",height:"12",fill:"white",transform:"translate(34 5)"})})})]})}function Footer(){return(0,l.jsx)("footer",{className:"flex flex-col",children:(0,l.jsxs)("div",{className:"flex flex-col mx-auto gap-8  py-12 md:flex-row lg:px-8",children:[(0,l.jsxs)("div",{className:"flex gap-10 lg:gap-4 px-8 lg:w-1/2 bg",children:[(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row gap-4",children:[(0,l.jsx)("span",{children:"Made with ❤️"}),(0,l.jsx)(NavbarLink,{href:"http://docs.cloud.coinbase.com/wallet-sdk/docs/sw-setup/",target:"_blank",children:"SDK Documents"})]}),(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row gap-4",children:[(0,l.jsxs)(NavbarLink,{href:"https://github.com/coinbase-samples/smart-wallet-nft-mint",target:"_blank",children:[(0,l.jsx)(h.wGg,{width:"24",height:"24"}),(0,l.jsx)("span",{children:"Demo"})]}),(0,l.jsxs)(NavbarLink,{href:"https://github.com/coinbase/coinbase-wallet-sdk",target:"_blank",children:[(0,l.jsx)(h.wGg,{width:"24",height:"24"}),"Wallet SDK"]})]})]}),(0,l.jsxs)("div",{className:"lg:mx-auto lg:w-1/2 flex basis-1/2 flex-col px-8 self-start",children:[(0,l.jsx)(CBWIcon,{}),(0,l.jsxs)("div",{style:{color:"#8A919E"},className:"mt-4",children:["This app is a simple demo of our new smart contract wallet. Try it out today, and share feedback on Farcaster"," ",(0,l.jsx)("a",{className:"text-blue-500",target:"_blank",href:"https://warpcast.com/~/channel/coinbasewallet",children:"/coinbasewallet"}),".\xa0"]})]})]})})}let b=[{category:"The basics",questions:[{question:"What is a smart wallet?",answer:"A smart wallet is an onchain wallet built to make it easier than ever for users to get started. It exists entirely in the browser, no need to install extensions or apps. It uses passkeys for signing, no seed phrases, no passwords, no third parties. You get one wallet for everywhere. All major L2s, and every app you connect to, you'll get the same wallet, with the same address."},{question:"I already support other wallets, why do I need this?",answer:"Smart wallet support works the same way as any other EVM wallet, it's just an easier experience for your user. You don't need to write any custom code or call any special APIs for it. If you're using the Coinbase SDK or any standard wallet connection toolkit, you'll get support for smart wallets out of the box for free once it's available on mainnet."},{question:"What is “Spend with Coinbase”?",answer:"Spend with Coinbase allows smart wallet users to spend funds directly from their connected Coinbase accounts without holding funds in their wallet. This lets users get funds onchain in fewer steps, and prevents them from getting hung up if they run out of gas or don't have enough funds in their wallet to complete a transaction."},{question:"Who's holding the keys?",answer:"Smart wallets are secured by passkeys stored on the user's device. Passkeys are backed up with passkey providers such as Apple, Chrome, or 1Password, or on hardware such as YubiKeys. Passkey signatures are validated directly onchain via an [open source and audited smart contract](https://github.com/base-org/webauthn-sol). Coinbase never holds keys and never has access to user funds."}]},{category:"Getting started",questions:[{question:"Can I integrate the smart wallet with my dapp today?",answer:"Yes! We are currently in our testnet developer preview period. You can use [these docs](https://docs.cloud.coinbase.com/wallet-sdk/docs/sw-setup) to start using our smart wallet on testnets, with mainnet coming soon. If you already use RainbowKit, Wagmi, or the Coinbase SDK, it's as simple as bumping the version number."},{question:"What should I do to get ready for smart wallets?",answer:"Make sure your app is [ERC-6492](https://eips.ethereum.org/EIPS/eip-6492) compliant to ensure that sign in works with smart wallets. If you're using [verifyMessage](https://viem.sh/docs/actions/public/verifyMessage#verifymessage) from [viem](https://viem.sh) it already is.\n\nIf you're developing smart contracts, ensure that they are falling back to [ERC-1271](https://eips.ethereum.org/EIPS/eip-1271) calls if normal signature validation fails. If you are using a standard signature validation library it will likely handle this out of the box."},{question:"How do I integrate?",answer:"All you need to do is include the [Wallet SDK](https://docs.cloud.coinbase.com/wallet-sdk/docs/sw-setup) and bump to version 4.0 when it is available. You can use the SDK directly, or include it alongside other providers via Wagmi or Rainbowkit."},{question:"How can I give my users the best experience?",answer:"Get users started faster with a top level “Create Wallet” button. By directing new users without a wallet directly to the smart wallet onboarding flow, you ensure that they have the smoothest path to create a wallet that lands them right back in your app.\n\nLet users spend funds directly from their Coinbase account by taking advantage of MagicSpend. Allow users initiate transactions in their wallet, even if they don't currently have enough ETH to pay. We'll handle the rest. If you'd still like to prevent other wallets from transacting without funds, you can gate the experience by checking window.ethereum.isCoinbaseWallet."}]},{category:"Passkeys",questions:[{question:"What is a passkey?",answer:"Passkeys are alternatives to passwords or other encrypted methods like recovery phrases, that are extremely easy to create and highly secure.\n\nThey are end-to-end encrypted and linked to your Google or iCloud account, chrome profile, or hardware device such as a YubiKey.\n\nThis means users no longer have to deal with passwords or recovery phrases. Instead they can use common methods of authorization like touch or faceID, and be more resistant to phishing attempts."},{question:"Is that passkey a single point of failure?",answer:"Even though passkeys are great for ease of use, it's still possible lose a hardware key or accidentally delete a software key. The safest approach is to always have a backup method to access your funds, just in case.\n\nUsers who want an additional backup can generate a plain text backup key and store it in a password manager, or even on a physical paper. This backup key is a standard EOA account which is added as a signer for the wallet. Users can generate and regenerate as many backups as they want."},{question:"What if I lose my Passkey?",answer:"Your passkey and recovery wallet (if you set one up) are the only methods to access your wallet. Without your passkey, no one can recover the wallet for you. Please avoid bulk clean ups and deletions of passkeys to avoid accidental deletion."}]}];function FAQ(){let[e,t]=(0,o.useState)(new Set),n=(0,o.useRef)({}),[a,s]=(0,o.useState)({}),toggleQuestion=(e,a)=>{let r="".concat(e,"-").concat(a);t(e=>{let t=new Set(e);return t.has(r)?t.delete(r):t.add(r),t}),setTimeout(()=>{s(e=>{var t;return{...e,[r]:(null===(t=n.current[r])||void 0===t?void 0:t.scrollHeight)||0}})},0)};(0,o.useEffect)(()=>{if("#faq"===window.location.hash){let e=document.getElementById("faq");e&&e.scrollIntoView({behavior:"smooth"})}},[]);let parseAnswer=e=>{let t=/\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g,n=e.split(/\n/g),a=[];return n.forEach((e,n)=>{n>0&&a.push((0,l.jsx)("br",{},"br-".concat(n)));let s=e.split(t);for(let e=0;e<s.length;e+=3)a.push(s[e]),e+1<s.length&&e+2<s.length&&a.push((0,l.jsx)("a",{href:s[e+2],target:"_blank",rel:"noopener noreferrer",className:"no-underline text-blue-500",children:s[e+1]},"a-".concat(n,"-").concat(e)))}),a};return(0,l.jsxs)("div",{style:{backgroundColor:"#141519"},className:"flex justify-center items-center flex-col",children:[(0,l.jsx)("div",{className:"w-full py-4 flex justify-center ",children:(0,l.jsx)("div",{id:"faq",className:"max-w-7xl w-full",children:(0,l.jsx)("h1",{className:"text-3xl mt-8 mx-12 xl:mx-0",children:"Frequently asked questions"})})}),(0,l.jsx)("div",{className:"mx-12",children:(0,l.jsx)("div",{className:"max-w-7xl w-full pb-12",children:b.map((t,s)=>(0,l.jsxs)("div",{className:"border-b border-gray-700",children:[(0,l.jsx)("h2",{className:"text-2xl mt-16 mb-12",children:t.category}),(0,l.jsx)("dl",{children:t.questions.map((t,r)=>{let i="".concat(s,"-").concat(r),o=e.has(i);return(0,l.jsxs)("div",{className:"border-t border-gray-700 py-6 text-lg",onClick:()=>toggleQuestion(s,r),children:[(0,l.jsxs)("dt",{className:"flex justify-between items-center",children:[t.question,(0,l.jsx)("span",{className:"text-2xl font-thin cursor-pointer",children:o?"-":"+"})]}),(0,l.jsx)("dd",{ref:e=>n.current[i]=e,style:{color:"#8A919E",maxHeight:o?"".concat(a[i]||0,"px"):"0",marginTop:o?"1.5rem":"0",transition:"max-height 200ms ease-in-out, margin-top 200ms ease-in-out"},className:"text-base overflow-hidden",onClick:e=>e.stopPropagation(),children:parseAnswer(t.answer)})]},i)})})]},s))})})]})}var v=n(16691),C=n.n(v);function NextImage(e){let{src:t,altText:n,className:a}=e;return(0,l.jsx)(C(),{src:t,width:0,height:0,sizes:"100vw",alt:n,className:a})}let j=x.L,T=function(e){let{abi:t,...n}=e;return function(){let{chain:e,isConnected:a}=(0,y.m)(),s=Object.values(n).map(e=>e.chain);return a?e&&e.id in n?n[e.id].deactivated?{abi:t,status:"deactivated",supportedChains:s}:{abi:t,address:n[e.id].address,status:"ready",supportedChains:s}:{abi:t,status:"onUnsupportedNetwork",supportedChains:s}:{abi:t,status:"notConnected",supportedChains:s}}}({abi:[{type:"constructor",inputs:[{name:"initialOwner",type:"address",internalType:"address"}],stateMutability:"nonpayable"},{type:"function",name:"approve",inputs:[{name:"to",type:"address",internalType:"address"},{name:"tokenId",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"balanceOf",inputs:[{name:"owner",type:"address",internalType:"address"}],outputs:[{name:"",type:"uint256",internalType:"uint256"}],stateMutability:"view"},{type:"function",name:"getApproved",inputs:[{name:"tokenId",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"address",internalType:"address"}],stateMutability:"view"},{type:"function",name:"isApprovedForAll",inputs:[{name:"owner",type:"address",internalType:"address"},{name:"operator",type:"address",internalType:"address"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"name",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"owner",inputs:[],outputs:[{name:"",type:"address",internalType:"address"}],stateMutability:"view"},{type:"function",name:"ownerOf",inputs:[{name:"tokenId",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"address",internalType:"address"}],stateMutability:"view"},{type:"function",name:"pause",inputs:[],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"paused",inputs:[],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"renounceOwnership",inputs:[],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"safeMint",inputs:[{name:"to",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"safeTransferFrom",inputs:[{name:"from",type:"address",internalType:"address"},{name:"to",type:"address",internalType:"address"},{name:"tokenId",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"safeTransferFrom",inputs:[{name:"from",type:"address",internalType:"address"},{name:"to",type:"address",internalType:"address"},{name:"tokenId",type:"uint256",internalType:"uint256"},{name:"data",type:"bytes",internalType:"bytes"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"setApprovalForAll",inputs:[{name:"operator",type:"address",internalType:"address"},{name:"approved",type:"bool",internalType:"bool"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"supportsInterface",inputs:[{name:"interfaceId",type:"bytes4",internalType:"bytes4"}],outputs:[{name:"",type:"bool",internalType:"bool"}],stateMutability:"view"},{type:"function",name:"symbol",inputs:[],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"tokenURI",inputs:[{name:"tokenId",type:"uint256",internalType:"uint256"}],outputs:[{name:"",type:"string",internalType:"string"}],stateMutability:"view"},{type:"function",name:"transferFrom",inputs:[{name:"from",type:"address",internalType:"address"},{name:"to",type:"address",internalType:"address"},{name:"tokenId",type:"uint256",internalType:"uint256"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"transferOwnership",inputs:[{name:"newOwner",type:"address",internalType:"address"}],outputs:[],stateMutability:"nonpayable"},{type:"function",name:"unpause",inputs:[],outputs:[],stateMutability:"nonpayable"},{type:"event",name:"Approval",inputs:[{name:"owner",type:"address",indexed:!0,internalType:"address"},{name:"approved",type:"address",indexed:!0,internalType:"address"},{name:"tokenId",type:"uint256",indexed:!0,internalType:"uint256"}],anonymous:!1},{type:"event",name:"ApprovalForAll",inputs:[{name:"owner",type:"address",indexed:!0,internalType:"address"},{name:"operator",type:"address",indexed:!0,internalType:"address"},{name:"approved",type:"bool",indexed:!1,internalType:"bool"}],anonymous:!1},{type:"event",name:"OwnershipTransferred",inputs:[{name:"previousOwner",type:"address",indexed:!0,internalType:"address"},{name:"newOwner",type:"address",indexed:!0,internalType:"address"}],anonymous:!1},{type:"event",name:"Paused",inputs:[{name:"account",type:"address",indexed:!1,internalType:"address"}],anonymous:!1},{type:"event",name:"Transfer",inputs:[{name:"from",type:"address",indexed:!0,internalType:"address"},{name:"to",type:"address",indexed:!0,internalType:"address"},{name:"tokenId",type:"uint256",indexed:!0,internalType:"uint256"}],anonymous:!1},{type:"event",name:"Unpaused",inputs:[{name:"account",type:"address",indexed:!1,internalType:"address"}],anonymous:!1},{type:"error",name:"ERC721IncorrectOwner",inputs:[{name:"sender",type:"address",internalType:"address"},{name:"tokenId",type:"uint256",internalType:"uint256"},{name:"owner",type:"address",internalType:"address"}]},{type:"error",name:"ERC721InsufficientApproval",inputs:[{name:"operator",type:"address",internalType:"address"},{name:"tokenId",type:"uint256",internalType:"uint256"}]},{type:"error",name:"ERC721InvalidApprover",inputs:[{name:"approver",type:"address",internalType:"address"}]},{type:"error",name:"ERC721InvalidOperator",inputs:[{name:"operator",type:"address",internalType:"address"}]},{type:"error",name:"ERC721InvalidOwner",inputs:[{name:"owner",type:"address",internalType:"address"}]},{type:"error",name:"ERC721InvalidReceiver",inputs:[{name:"receiver",type:"address",internalType:"address"}]},{type:"error",name:"ERC721InvalidSender",inputs:[{name:"sender",type:"address",internalType:"address"}]},{type:"error",name:"ERC721NonexistentToken",inputs:[{name:"tokenId",type:"uint256",internalType:"uint256"}]},{type:"error",name:"EnforcedPause",inputs:[]},{type:"error",name:"ExpectedPause",inputs:[]},{type:"error",name:"OwnableInvalidOwner",inputs:[{name:"owner",type:"address",internalType:"address"}]},{type:"error",name:"OwnableUnauthorizedAccount",inputs:[{name:"account",type:"address",internalType:"address"}]}],[x.L.id]:{chain:x.L,address:"0x119Ea671030FBf79AB93b436D2E20af6ea469a19"}});var N=n(45233);let ipfsToHTTP=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ipfs.io",n=e.replace("ipfs://","");return"https://".concat(t,"/ipfs/").concat(n)};(a=r||(r={})).uri="uri",a.contractURI="contractURI";var k=n(44818),M=n(42617),S=n(84527),I=n(47973);function MintCompleteStep(e){let{setMintStep:t,collectionName:n}=e,a=(0,o.useCallback)(()=>{location.reload()},[t]);return(0,l.jsxs)("div",{className:(0,d.Z)("rounded-lg border border-boat-color-palette-line","mb-8 bg-boat-footer-dark-gray p-8"),children:[(0,l.jsxs)("h2",{className:"mb-5 w-full text-center text-2xl font-semibold text-white",children:["Congrats! You minted ",n]}),(0,l.jsx)("div",{className:"text-center text-6xl",children:"\uD83C\uDF89"}),(0,l.jsx)("div",{className:"my-4 text-center text-sm text-gray-400",children:"It will take ~ 5 minutes to show up in your wallet"}),(0,l.jsx)(Button,{buttonContent:"Mint another NFT",onClick:a})]})}function MintProcessingStep(){return(0,l.jsxs)("div",{className:(0,d.Z)("flex flex-col items-center gap-3 rounded-lg border border-boat-color-palette-line","mb-8 bg-boat-footer-dark-gray py-8 px-4 md:px-12"),children:[(0,l.jsxs)("div",{className:"spinner-container relative",children:[(0,l.jsx)("div",{className:"spinner animate-spin border-4 border-white border-t-transparent rounded-full w-16 h-16"}),(0,l.jsx)("img",{src:"/WalletLogo.png",className:"spinner-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8"})]}),(0,l.jsx)("h2",{className:"w-full text-center text-2xl font-semibold text-white",children:"Confirm transaction"}),(0,l.jsx)("div",{className:"text-center text-md text-gray-400",children:"Please confirm the transaction in your wallet"})]})}function OutOfGasStep(e){let{setMintStep:t}=e,n=(0,o.useCallback)(()=>{t(i.START_MINT_STEP)},[t]);return(0,l.jsxs)("div",{className:(0,d.Z)("rounded-lg border border-boat-color-palette-line","mb-8 bg-boat-footer-dark-gray p-8"),children:[(0,l.jsx)("h2",{className:"mb-5 w-full text-center text-2xl font-semibold text-white",children:"You're out of gas"}),(0,l.jsx)("div",{className:"text-center text-6xl",children:"⛽"}),(0,l.jsx)("div",{className:"my-4 text-center text-sm text-gray-400",children:"Please fund your wallet and try minting the NFT again."}),(0,l.jsx)(Button,{buttonContent:"Got it",onClick:n})]})}function StartMintStep(e){let{setMintStep:t,mintStep:n,collectionName:a}=e,[s,r]=(0,o.useState)("simulate"),{chain:c,address:u}=(0,y.m)(),p=T(),m=(null==c?void 0:c.id)===j.id,h=m&&void 0!=u;console.log({mintLifecycle:s,accountReady:h,chain:c});let f=(0,M.G)({address:"ready"===p.status?p.address:void 0,abi:p.abi,functionName:"safeMint",args:u?[u]:void 0,query:{enabled:m&&void 0!=u&&"minting"!==s}}),{writeContractAsync:x,error:g,data:w}=(0,S.S)(),{status:b}=(0,I.A)({hash:w,query:{enabled:!!w}});(0,o.useEffect)(function(){var e,t;h&&(console.log("mintLifecycle",s,null==f?void 0:f.isFetched,null==f?void 0:null===(e=f.data)||void 0===e?void 0:e.request),"simulate"===s&&((null==f?void 0:f.isFetched)&&(null==f?void 0:null===(t=f.data)||void 0===t?void 0:t.request)?r("readyToMint"):console.log("simulation not completed")))},[s,null==f?void 0:f.isFetched,null==f?void 0:f.data]),(0,o.useEffect)(()=>{if(h&&("success"===b&&(t(i.MINT_COMPLETE_STEP),r("simulate"),f.refetch(),console.log("resetting state to start")),g)){let e=g instanceof k.mk&&g.message.toLowerCase().includes("out of gas");t(e?i.OUT_OF_GAS_STEP:i.START_MINT_STEP),console.error(g),g.message.includes("User denied transaction")||g.message.includes("User rejected the request")?r("simulate"):console.error("An error occurred while processing the transaction:",g.message)}},[b,t,g]);let v=(0,o.useCallback)(async()=>{var e,n;if(null==f?void 0:null===(e=f.data)||void 0===e?void 0:e.request){r("minting");try{t(i.MINT_PROCESSING_STEP),await (null==x?void 0:x(null==f?void 0:null===(n=f.data)||void 0===n?void 0:n.request))}catch(e){reloadIfNeeded()}}else console.error("simulation request not found")},[f,x]);return(0,l.jsxs)(l.Fragment,{children:[n===i.MINT_PROCESSING_STEP&&(0,l.jsx)(MintProcessingStep,{}),n===i.OUT_OF_GAS_STEP&&(0,l.jsx)(OutOfGasStep,{setMintStep:t}),n===i.MINT_COMPLETE_STEP&&(0,l.jsx)(MintCompleteStep,{setMintStep:t,collectionName:a}),n===i.START_MINT_STEP&&!!u&&(0,l.jsx)(Button,{buttonContent:"Mint",onClick:u?v:void 0,disabled:"readyToMint"!==s,className:(0,d.Z)("lg:max-w-36","bg-white","lg:ml-0","lg:mr-auto","max-w-[120px]","max-h-[40px]","px-2","py-4")}),!u&&(0,l.jsx)(CustomConnectButton,{className:(0,d.Z)("lg:max-w-36","bg-white","lg:ml-0","lg:mr-auto","max-w-[160px]","max-h-[40px]","px-2","py-4"),buttonContent:u?"Mint":"Connect to Mint"})]})}function MintContractDemo(){let[e,t]=(0,o.useState)(0),{chain:n,address:a}=(0,y.m)(),s=T();console.log("contract",s);let r=(null==n?void 0:n.id)===j.id,{collectionName:i,description:d,imageAddress:c,isLoading:u}=function(e,t,n){let a;let[s,r]=(0,o.useState)({collectionName:null,description:null,imageAddress:null,isLoading:!0});a=JSON.stringify(n).includes("contractURI")?"contractURI":"uri";let{data:i}=(0,N.u)({address:t,abi:n,functionName:a.toString(),args:"uri"===a?[BigInt(1)]:void 0,query:{enabled:e}}),l=(0,o.useCallback)(async()=>{if(!i)return;let e=function(e){try{let t=JSON.parse(e);return{collectionName:t.name,description:t.description,imageAddress:ipfsToHTTP(t.image),isLoading:!1}}catch(e){}}(i);if(e)r(e);else{let e=await fetch(i),t=await e.json();r({collectionName:t.name,description:t.description,imageAddress:ipfsToHTTP(t.image),isLoading:!1})}},[i]);return(0,o.useEffect)(()=>{i&&l()},[i,l]),s}(r,"ready"===s.status?s.address:void 0,s.abi);console.log("collectionName",i,u);let p=(0,o.useMemo)(()=>(0,l.jsx)(StartMintStep,{setMintStep:t,mintStep:e,collectionName:i}),[e,i]);return i="Smart Wallet Early Adopter",c="/smart_wallet.gif",(0,l.jsxs)("div",{className:"flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 pb-12 md:pb-0 my-24",children:[(0,l.jsx)(NextImage,{src:c,altText:i,className:"w-[85%] md:w-[550px] rounded-2xl"}),(0,l.jsxs)("div",{className:"flex flex-col items-center justify-start gap-3",children:[(0,l.jsx)("h1",{className:"text-center font-bold lg:ml-0 lg:mr-auto lg:text-left px-4 md:px-0",style:{fontFamily:"Helvetica Neue, sans-serif",fontSize:"28px"},children:i}),(0,l.jsxs)("div",{className:"lg:ml-0 lg:mr-auto lg:text-left text-lg",style:{color:"#8A919E"},children:[" ","0.00 ETH"," "]}),p]})]})}function MintPage(){return(0,l.jsxs)("div",{className:"flex flex-col min-h-screen justify-between",children:[(0,l.jsx)(header_Header,{}),(0,l.jsx)("main",{children:(0,l.jsx)(MintContractDemo,{})}),(0,l.jsx)(FAQ,{}),(0,l.jsx)(Footer,{})]})}(s=i||(i={}))[s.START_MINT_STEP=0]="START_MINT_STEP",s[s.MINT_PROCESSING_STEP=1]="MINT_PROCESSING_STEP",s[s.OUT_OF_GAS_STEP=2]="OUT_OF_GAS_STEP",s[s.MINT_COMPLETE_STEP=3]="MINT_COMPLETE_STEP"}}]);
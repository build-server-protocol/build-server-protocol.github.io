"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[714],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=m(a),c=n,g=s["".concat(o,".").concat(c)]||s[c]||u[c]||l;return a?r.createElement(g,i(i({ref:e},d),{},{components:a})):r.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4142:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],p={id:"implementations",title:"Implementations"},o=void 0,m={unversionedId:"overview/implementations",id:"overview/implementations",title:"Implementations",description:"Build Servers",source:"@site/generated/docs/overview/implementations.md",sourceDirName:"overview",slug:"/overview/implementations",permalink:"/docs/overview/implementations",draft:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/overview/implementations.md",tags:[],version:"current",lastUpdatedBy:"Sheng Chen",lastUpdatedAt:1700227594,formattedLastUpdatedAt:"Nov 17, 2023",frontMatter:{id:"implementations",title:"Implementations"},sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/docs/overview/faq"},next:{title:"Build Server Discovery",permalink:"/docs/overview/server-discovery"}},d={},s=[{value:"Build Servers",id:"build-servers",level:2},{value:"Build Clients",id:"build-clients",level:2}],u={toc:s};function c(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"build-servers"},"Build Servers"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Build tool"),(0,l.kt)("th",{parentName:"tr",align:null},"Link"),(0,l.kt)("th",{parentName:"tr",align:null},"Implementation language"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bazel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JetBrains/bazel-bsp"},"bazel-bsp")),(0,l.kt)("td",{parentName:"tr",align:null},"Kotlin"),(0,l.kt)("td",{parentName:"tr",align:null},"Supports Java, Scala, and Kotlin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bloop"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/scalacenter/bloop/"},"scalacenter/bloop")),(0,l.kt)("td",{parentName:"tr",align:null},"Scala"),(0,l.kt)("td",{parentName:"tr",align:null},"Supports sbt, Gradle, Maven and Mill.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/lihaoyi/mill/"},"mill")),(0,l.kt)("td",{parentName:"tr",align:null},"Scala"),(0,l.kt)("td",{parentName:"tr",align:null},"Built-in since mill 0.9.3, before as contrib plugin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sbt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.scala-sbt.org/"},"sbt")),(0,l.kt)("td",{parentName:"tr",align:null},"Scala"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/sbt/sbt/releases/tag/v1.4.0"},"Since 1.4.0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scala-cli"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://scala-cli.virtuslab.org/"},"scala-cli")),(0,l.kt)("td",{parentName:"tr",align:null},"Scala"),(0,l.kt)("td",{parentName:"tr",align:null},"Supports Scala and Java.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cargo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/cargo-bsp/cargo-bsp"},"cargo-bsp")),(0,l.kt)("td",{parentName:"tr",align:null},"Rust"),(0,l.kt)("td",{parentName:"tr",align:null},"(Work in progress) Supports Rust.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gradle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/microsoft/build-server-for-gradle"},"build-server-for-gradle")),(0,l.kt)("td",{parentName:"tr",align:null},"Java"),(0,l.kt)("td",{parentName:"tr",align:null},"Supports Java.")))),(0,l.kt)("h2",{id:"build-clients"},"Build Clients"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Supporting Tool"),(0,l.kt)("th",{parentName:"tr",align:null},"Link"),(0,l.kt)("th",{parentName:"tr",align:null},"Implementation language"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IntelliJ Scala"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JetBrains/intellij-scala"},"JetBrains/intellij-scala")),(0,l.kt)("td",{parentName:"tr",align:null},"Scala"),(0,l.kt)("td",{parentName:"tr",align:null},"Implementation focused on Scala, supports Java.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IntelliJ-BSP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JetBrains/intellij-bsp"},"JetBrains/intellij-bsp")),(0,l.kt)("td",{parentName:"tr",align:null},"Kotlin"),(0,l.kt)("td",{parentName:"tr",align:null},"New implementation with broader language support.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Metals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/scalameta/metals"},"scalameta/metals")),(0,l.kt)("td",{parentName:"tr",align:null},"Scala"),(0,l.kt)("td",{parentName:"tr",align:null},"LSP language server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scala-cli"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://scala-cli.virtuslab.org/"},"scala-cli")),(0,l.kt)("td",{parentName:"tr",align:null},"Scala"),(0,l.kt)("td",{parentName:"tr",align:null},"Act as BSP client towards Bloop.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gradle for Java"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/microsoft/vscode-gradle"},"Microsoft/vscode-gradle")),(0,l.kt)("td",{parentName:"tr",align:null},"Java and TypeScript"),(0,l.kt)("td",{parentName:"tr",align:null},"Act as BSP client towards Build Server for Gradle.")))))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[462],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(v,o(o({ref:n},c),{},{components:t})):r.createElement(v,o({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[p]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],d={id:"maven",title:"Maven Extension",sidebar_label:"Maven"},l=void 0,s={unversionedId:"extensions/maven",id:"extensions/maven",title:"Maven Extension",description:"The following section contains Maven-specific extensions to the build server",source:"@site/generated/docs/extensions/maven.md",sourceDirName:"extensions",slug:"/extensions/maven",permalink:"/docs/extensions/maven",draft:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/extensions/maven.md",tags:[],version:"current",lastUpdatedBy:"Andrzej G\u0142uszak",lastUpdatedAt:1689863283,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{id:"maven",title:"Maven Extension",sidebar_label:"Maven"},sidebar:"docs",previous:{title:"JVM",permalink:"/docs/extensions/jvm"},next:{title:"Python",permalink:"/docs/extensions/python"}},c={},p=[{value:"BSP version",id:"bsp-version",level:2},{value:"DependencyModuleData kinds",id:"dependencymoduledata-kinds",level:2},{value:"MavenDependencyModule",id:"mavendependencymodule",level:3},{value:"MavenDependencyModule",id:"mavendependencymodule-1",level:4},{value:"MavenDependencyModuleArtifact",id:"mavendependencymoduleartifact",level:4}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following section contains Maven-specific extensions to the build server\nprotocol."),(0,i.kt)("h2",{id:"bsp-version"},"BSP version"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"2.1.0")),(0,i.kt)("h2",{id:"dependencymoduledata-kinds"},"DependencyModuleData kinds"),(0,i.kt)("h3",{id:"mavendependencymodule"},"MavenDependencyModule"),(0,i.kt)("p",null,"This structure is embedded in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"data?: DependencyModuleData")," field, when\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"dataKind")," field contains ",(0,i.kt)("inlineCode",{parentName:"p"},'"maven"'),"."),(0,i.kt)("h4",{id:"mavendependencymodule-1"},"MavenDependencyModule"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MavenDependencyModule")," is a basic data structure that contains maven-like\nmetadata. This metadata is embedded in the ",(0,i.kt)("inlineCode",{parentName:"p"},"data: Option[Json]")," field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DependencyModule")," definition, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataKind"),' field contains "maven".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'export interface MavenDependencyModule {\n  organization: string;\n\n  name: string;\n\n  version: string;\n\n  /** List of module\'s artifacts with different classifiers.\n   * For example: [\n   *   {uri = "../scala-library-2.13.5.jar"},\n   *   {uri = "../scala-library-2.13.5-sources.jar", classifier = "sources"}\n   * ] */\n  artifacts: MavenDependencyModuleArtifact[];\n\n  scope?: string;\n}\n')),(0,i.kt)("h4",{id:"mavendependencymoduleartifact"},"MavenDependencyModuleArtifact"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface MavenDependencyModuleArtifact {\n  /** Path to jar */\n  uri: URI;\n\n  /** Empty or `sources`|`docs` */\n  classifier?: string;\n}\n")))}m.isMDXComponent=!0}}]);
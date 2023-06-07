"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,v=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],s={title:"Java Bindings",sidebar_label:"Java"},o=void 0,u={unversionedId:"bindings/java",id:"bindings/java",title:"Java Bindings",description:"The",source:"@site/target/docs/bindings/java.md",sourceDirName:"bindings",slug:"/bindings/java",permalink:"/docs/bindings/java",draft:!1,editUrl:"https://github.com/build-server-protocol/build-server-protocol/edit/master/docs/bindings/java.md",tags:[],version:"current",frontMatter:{title:"Java Bindings",sidebar_label:"Java"},sidebar:"docs",previous:{title:"Scala",permalink:"/docs/extensions/scala"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Gradle",id:"gradle",level:3},{value:"Maven",id:"maven",level:3},{value:"sbt",id:"sbt",level:3},{value:"Examples",id:"examples",level:2},{value:"Client",id:"client",level:3},{value:"Server",id:"server",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The\n",(0,l.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/ch.epfl.scala/bsp4j"},(0,l.kt)("inlineCode",{parentName:"a"},"ch.epfl.scala:bsp4j")),"\nmodule is a Java library that is available from Maven Central. The module has\none external dependency on the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eclipse/lsp4j"},"eclipse/lsp4j"),"\nlibrary."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Add the following snippet to your build to add dependency on ",(0,l.kt)("inlineCode",{parentName:"p"},"bsp4j"),"."),(0,l.kt)("h3",{id:"gradle"},"Gradle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"compile group: 'ch.epfl.scala', name: 'bsp4j', version: '2.1.0-M4+58-381fef01-SNAPSHOT'\n")),(0,l.kt)("h3",{id:"maven"},"Maven"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>ch.epfl.scala</groupId>\n    <artifactId>bsp4j</artifactId>\n    <version>2.1.0-M4+58-381fef01-SNAPSHOT</version>\n</dependency>\n")),(0,l.kt)("h3",{id:"sbt"},"sbt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "ch.epfl.scala" % "bsp4j" % "2.1.0-M4+58-381fef01-SNAPSHOT"\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"client"},"Client"),(0,l.kt)("p",null,"First, begin by obtaining an input and output stream to communicate with the\nbuild server."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val output: java.io.OutputStream = buildOutputStream()\nval input: java.io.InputStream = buildInputStream()\n")),(0,l.kt)("p",null,"Next, implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"BuildClient")," interface. Replace the ",(0,l.kt)("inlineCode",{parentName:"p"},"???")," dummy\nimplementations with the logic of your build client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import java.util.concurrent._\nimport ch.epfl.scala.bsp4j._\nimport org.eclipse.lsp4j.jsonrpc.Launcher\n\nclass MyClient extends BuildClient {\n  def onBuildLogMessage(params: LogMessageParams): Unit = ???\n  def onBuildPublishDiagnostics(params: PublishDiagnosticsParams): Unit = ???\n  def onBuildShowMessage(params: ShowMessageParams): Unit = ???\n  def onBuildTargetDidChange(params: DidChangeBuildTarget): Unit = ???\n  def onBuildTaskFinish(params: TaskFinishParams): Unit = ???\n  def onBuildTaskProgress(params: TaskProgressParams): Unit = ???\n  def onBuildTaskStart(params: TaskStartParams): Unit = ???\n}\nval localClient = new MyClient()\n")),(0,l.kt)("p",null,"Optionally, create a custom ",(0,l.kt)("inlineCode",{parentName:"p"},"ExecutorService")," to run client responses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import java.util.concurrent._\nval es = Executors.newFixedThreadPool(1)\n// es: ExecutorService = java.util.concurrent.ThreadPoolExecutor@3a712d31[Terminated, pool size = 0, active threads = 0, queued tasks = 0, completed tasks = 0]\n")),(0,l.kt)("p",null,"Next, wire the client implementation together with the remote build server."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val launcher = new Launcher.Builder[BuildServer]()\n  .setOutput(output)\n  .setInput(input)\n  .setLocalService(localClient)\n  .setExecutorService(es)\n  .setRemoteInterface(classOf[BuildServer])\n  .create()\n// launcher: Launcher[BuildServer] = org.eclipse.lsp4j.jsonrpc.StandardLauncher@77f24fe0\n")),(0,l.kt)("p",null,"Next, obtain an instance of the remote ",(0,l.kt)("inlineCode",{parentName:"p"},"BuildServer")," via ",(0,l.kt)("inlineCode",{parentName:"p"},"getRemoteProxy()"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val server = launcher.getRemoteProxy\n// server: BuildServer = EndpointProxy for org.eclipse.lsp4j.jsonrpc.RemoteEndpoint@64d34f43\n")),(0,l.kt)("p",null,"Next, start listening to the remote build server on a separate thread. The\n",(0,l.kt)("inlineCode",{parentName:"p"},".get()")," method call is blocking during the lifetime of BSP session."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"new Thread {\n  override def run() = launcher.startListening().get()\n}\n// res0: Thread = Thread[Thread-84,5,main]\n")),(0,l.kt)("p",null,"Next, trigger the initialize handshake with the remote server."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'val workspace = java.nio.file.Paths.get(".").toAbsolutePath().normalize()\n// workspace: java.nio.file.Path = /home/runner/work/build-server-protocol/build-server-protocol\nval initializeResult = server.buildInitialize(new InitializeBuildParams(\n  "MyClient", // name of this client\n  "1.0.0", // version of this client\n  "2.1.0-M4+58-381fef01-SNAPSHOT", // BSP version\n  workspace.toUri().toString(),\n  new BuildClientCapabilities(java.util.Collections.singletonList("scala"))\n))\n// initializeResult: CompletableFuture[InitializeBuildResult] = org.eclipse.lsp4j.jsonrpc.RemoteEndpoint$1@463f3ac1[Not completed, 1 dependents]\n')),(0,l.kt)("p",null,"After receiving the initialize response, send the ",(0,l.kt)("inlineCode",{parentName:"p"},"build/initialized"),"\nnotification."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"initializeResult.thenAccept(_ => server.onBuildInitialized())\n// res1: CompletableFuture[Void] = java.util.concurrent.CompletableFuture@74de242e[Not completed]\n")),(0,l.kt)("p",null,"After sending the ",(0,l.kt)("inlineCode",{parentName:"p"},"build/initialized")," notification, you can send any BSP\nrequests and notications such as ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace/buildTargets"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"buildTarget/compile"),"."),(0,l.kt)("p",null,"To close the BSP session, send the ",(0,l.kt)("inlineCode",{parentName:"p"},"build/shutdown")," request followed by a\n",(0,l.kt)("inlineCode",{parentName:"p"},"build/exit")," notification."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"server.buildShutdown().thenAccept(new java.util.function.Consumer[Object] {\n  def accept(x: Object): Unit = {\n    server.onBuildExit()\n  }\n})\n// res2: CompletableFuture[Void] = java.util.concurrent.CompletableFuture@1136e81a[Not completed]\n")),(0,l.kt)("h3",{id:"server"},"Server"),(0,l.kt)("p",null,"First, implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"BuildServer")," interface."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import java.util.concurrent._\nimport ch.epfl.scala.bsp4j._\nimport org.eclipse.lsp4j.jsonrpc.Launcher\n\nclass MyBuildServer extends BuildServer {\n  var client: BuildClient = null // will be updated later\n  def buildInitialize(params: InitializeBuildParams): CompletableFuture[InitializeBuildResult] = ???\n  def buildShutdown(): CompletableFuture[Object] = ???\n  def buildTargetCleanCache(params: CleanCacheParams): CompletableFuture[CleanCacheResult] = ???\n  def buildTargetCompile(params: CompileParams): CompletableFuture[CompileResult] = ???\n  def buildTargetDependencySources(params: DependencySourcesParams): CompletableFuture[DependencySourcesResult] = ???\n  def buildTargetDependencyModules(params: DependencyModulesParams): CompletableFuture[DependencyModulesResult] = ???\n  def buildTargetInverseSources(params: InverseSourcesParams): CompletableFuture[InverseSourcesResult] = ???\n  def buildTargetResources(params: ResourcesParams): CompletableFuture[ResourcesResult] = ???\n  def buildTargetOutputPaths(params: OutputPathsParams): CompletableFuture[OutputPathsResult] = ???\n  def buildTargetRun(params: RunParams): CompletableFuture[RunResult] = ???\n  def buildTargetSources(params: SourcesParams): CompletableFuture[SourcesResult] = ???\n  def buildTargetTest(params: TestParams): CompletableFuture[TestResult] = ???\n  def debugSessionStart(params: DebugSessionParams): CompletableFuture[DebugSessionAddress] = ???\n  def onBuildExit(): Unit = ???\n  def onBuildInitialized(): Unit = ???\n  def workspaceBuildTargets(): CompletableFuture[WorkspaceBuildTargetsResult] = ???\n  def workspaceReload(): CompletableFuture[Object] = ???\n}\nval localServer = new MyBuildServer()\n// localServer: MyBuildServer = repl.MdocSession$MdocApp4$MyBuildServer@14babdcf\n")),(0,l.kt)("p",null,"Next, construct a launcher for the remote build client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val launcher = new Launcher.Builder[BuildClient]()\n  .setOutput(System.out)\n  .setInput(System.in)\n  .setLocalService(localServer)\n  .setRemoteInterface(classOf[BuildClient])\n  .create()\n// launcher: Launcher[BuildClient] = org.eclipse.lsp4j.jsonrpc.StandardLauncher@7af26305\n")),(0,l.kt)("p",null,"Next, update the remote build client reference in ",(0,l.kt)("inlineCode",{parentName:"p"},"localServer"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"localServer.client = launcher.getRemoteProxy()\n")),(0,l.kt)("p",null,"Finally, in a ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," method wire everything together."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def main(args: Array[String]): Unit = {\n  launcher.startListening().get() // listen until BSP session is over.\n}\n")))}m.isMDXComponent=!0}}]);
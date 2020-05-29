(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{pfKO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},c={_frontmatter:i},s=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The IBM Event Driven architecture reference implementation illustrates the deployment of real time analytics on event streams in the context of container shipment in an ",Object(a.b)("a",r({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/"}),"event driven architecture")," with event backbone, functions as service and microservices. It aims to illustrate the different event driven patterns like event sourcing, CQRS and Saga and give a lot of best practices around implementing event driven microservices."),Object(a.b)("h2",null,"What you will learn"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"How to apply the event storming methodology and workshop to analyze the business process for fresh good shipment over sees."),Object(a.b)("li",{parentName:"ul"},"How to transform Domain Driven Design aggregates to microservices."),Object(a.b)("li",{parentName:"ul"},"How to implement the different microservices using the event-driven pattern like CQRS pattern with event sourcing done in Apache Kafka or IBM Events Streams."),Object(a.b)("li",{parentName:"ul"},"How to deploy your solution to IBM Cloud Kubernetes service (Public cloud), or to IBM Cloud Private (kubernetes based) or run locally with Docker compose."),Object(a.b)("li",{parentName:"ul"},"How to use event store (Kafka topics) as source for machine learning data source to build training and test sets."),Object(a.b)("li",{parentName:"ul"},"How to implement a Test Driven Development for the Order microservice uisng mockito to avoid Kafka dependency."),Object(a.b)("li",{parentName:"ul"},"How to implement the same container management microservices in python, nodejs, java microprofile 2 with Kafka streams API, and springboot, kafka template and PostgreSQL.")),Object(a.b)("p",null,"This is a lot, not all is done yet. But consider this content as a living book, with the left side representing major subjects and each subject with its own table of contents."),Object(a.b)("h2",null,"Target Audiences"),Object(a.b)("p",null,"You will be greatly interested by the subjects addressed in this solution if you are…"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An architect, you will get a deeper understanding on how all the components work together, and how to address resiliency, high availability."),Object(a.b)("li",{parentName:"ul"},"A developer, you will get a broader view of the solution end to end and get existing starting code, and practices you may want to reuse during your future implementation. We focus on event driven solution in hybrid cloud addressing patterns and non-functional requirements as CI/CD, Test Driven Development, …"),Object(a.b)("li",{parentName:"ul"},"A project manager, you may understand all the artifacts to develop in an EDA solution, and we may help in the future to do project estimation.")),Object(a.b)("h2",null,"Business process statement"),Object(a.b)("p",null,"In ",Object(a.b)("a",r({parentName:"p"},{href:"/refarch-kc/adac9160446c5709fa8fb62e6ab1e1c5/introduction.mdx"}),"this first chapter")," we are presenting the business process for shipping fresh good over sees and we are detailing the analysis we have done in San Francisco in November 2108 using the event storming analysis workshop. You could read more on how to organize and execute such workshop ",Object(a.b)("a",r({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/methodology/readme/"}),"here"),". The workshop execution transcript is detailed in ",Object(a.b)("a",r({parentName:"p"},{href:"/refarch-kc/0dbc4ec7ff2f6296a10a71f684ba8c2c/readme.mdx"}),"a second chapter"),"."),Object(a.b)("h2",null,"Design considerations"),Object(a.b)("p",null,"In the ",Object(a.b)("a",r({parentName:"p"},{href:"/refarch-kc/901a188ff58819fd96adb562a3d382ce/readme.mdx"}),"third chapter")," we are detailing how to transform the analysis outcomes into some light design, conceptual view, just enough to start coding some microservices."),Object(a.b)("h2",null,"Architecture"),Object(a.b)("p",null,"This quick ",Object(a.b)("a",r({parentName:"p"},{href:"/refarch-kc/9348cc4be8349e3e34559bc5bcb80a20/architecture.mdx"}),"architecture chapter")," presents the solution components working together with the event backbone."),Object(a.b)("h2",null,"Build and Run"),Object(a.b)("p",null,"The end to end solution can be demonstrated from a unique user interface and it involves multiple microservices deployed independently. As some of those components are using IBM products or IBM Cloud services, you need to provision such services. We propose to develop with an hybrid environment, using IBM Cloud services, local environment running on your laptop and IBM private cloud cluster (optional). As of now only Mac and Linux development workstation are supported. For the Java development we used Eclipse 2019 edition. So basically we need the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/deployments/eventstreams"}),"Event Streams instance on IBM Cloud Public")," or Event streams on IBM Cloud private or a Kafka Docker image."),Object(a.b)("li",{parentName:"ul"},"Streaming Analytics on IBM Cloud public or on ICP for Data."),Object(a.b)("li",{parentName:"ul"},"Kubernetes Cluster (IBM Cloud Private or IBM Kubernetes Service on cloud) or Docker compose to run locally."),Object(a.b)("li",{parentName:"ul"},"Postgresql service in IBM Cloud. This database is used by one service, built with Spring boot, that can be plug and play. It is optional. We want to illustrate with this implementation a reversibility practice where we start development on the cloud and migrate to private cloud.")),Object(a.b)("p",null,"The instructions to build, deploy and test all the solution components, are defined in this source repository: ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc/tree/master/docs"}),"https://github.com/ibm-cloud-architecture/refarch-kc/tree/master/docs"),". Also, each project, part of the solution, has its own installation explanations and scripts to build, package, test and deploy to the different Kubernetes deployment (private and public). We recommend studying those scripts."),Object(a.b)("h2",null,"Deployments"),Object(a.b)("p",null,"We can deploy the components of the solution into any Kubernetes-based environment - including OpenShift, IBM Cloud Kubernetes Service, and vanilla Kubernetes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",r({parentName:"strong"},{href:"/refarch-kc/fd9586b8846c2dc2aa983eccbb462317/backing-services.mdx"}),"Backing Services"))," documents the required environment configuration, as well as Kafka and Postgresql options to satisfy application dependencies."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",r({parentName:"strong"},{href:"deployments/application-components.md"}),"Application Components"),"x")," documents the deployment steps required for the K Container Reference Implementation, as well as integration tests to validate deployment.")),Object(a.b)("h2",null,"Still project under development"),Object(a.b)("p",null,"The following items are not yet completed:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Microprofile 2.2 container service with kafka streams"),Object(a.b)("li",{parentName:"ul"},"An end to end automated test scenario"),Object(a.b)("li",{parentName:"ul"},"A demonstration script to present the process execution from end users point of view"),Object(a.b)("li",{parentName:"ul"},"A set of tests to validate event sourcing, and Saga patterns"),Object(a.b)("li",{parentName:"ul"},"Cold chain predictive model"),Object(a.b)("li",{parentName:"ul"},"Container predictive maintenance model and deployment.")),Object(a.b)("h2",null,"Further readings"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture"}),"Event driven architecture in IBM Garage method")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/"}),"Event driven compagnion github with other best practices")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/eda-skill-journey/"}),"Event-driven training journey"))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-e534929fb151db89f323.js.map
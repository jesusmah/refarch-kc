(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"7f6p":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return o}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var i=t("7ljp"),s=t("013z");t("qKvR");function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var r={},n={_frontmatter:r},l=s.a;function o(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,i,s={},c=Object.keys(e);for(i=0;i<c.length;i++)t=c[i],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(i.b)(l,c({},n,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here you can find the order cancellation integration test for the Reefer Containers EDA reference implementation. This test case tests the compensation process that must happen once an order is cancelled. That is, if an order is cancelled, the container allocated to such order must become empty and available again as well as the voyage assigned to them that will now reflect the space the container was taking from the voyage as free to be used. The following diagram depics roughly this path on a flow base fashion where the blue square rectangles, purple rounded rectangles and orange rectangles represent actions taken by the test case, events produced to the event backbone (either Kafka or IBM Event Streams) and object statuses respectively."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABPklEQVQoz6WR22qDQBCGvSx9sPYJ2kcslN4Wivc9JBShORAiiVETD1mN62rUdWfdtWoSaNM0UDowCzPsxz/zj1L/IxTg0gm3hhvFGfwZLkGOrfBttEDJOViehJtkZZHE6Nc/sm3G/tLQnreBC7RwJ1qyXu6UxXi27n8YCBfHlBCSc9nB2NKtvkocg6bE7KnBfLjfWbcCbWRESfldT34duWJlVZAKQFQVZLjR34/NWZ4T/+e8PCbg+YK1XghRJdjd9VOCONA97OuD6YuaRmtapCuUTc2N7ZEciter6ztFsR/uWV3PrM370PQ2eYDpxAjnDmEgWhjbU2/cS6MAWG7729EMmU6cQ6bd3D5eXK7UJ1YLfRH2B6YbZAjTge7pNmZcKLKLk0YL2uxJ5Zk7H91SdlbJw4WauqvaRx48PMjVn2BRdTNn4802AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"flow",title:"flow",src:"/refarch-kc/static/b3ad4ac0b4d9e44f6e08abff0a58b204/2faef/Slide1.png",srcSet:["/refarch-kc/static/b3ad4ac0b4d9e44f6e08abff0a58b204/7fc1e/Slide1.png 288w","/refarch-kc/static/b3ad4ac0b4d9e44f6e08abff0a58b204/a5df1/Slide1.png 576w","/refarch-kc/static/b3ad4ac0b4d9e44f6e08abff0a58b204/2faef/Slide1.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h2",null,"Tests"),Object(i.b)("p",null,"The following sequence diagrams represent each of the tests within this order cancellation integration test case."),Object(i.b)("h3",null,"Test 1 - Create order"),Object(i.b)("p",null,"This test will make sure that a CreateOrderCommand event is created and delivered to the appropriate kafka topic and, as a result, a new order with the correspondent events are also created."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABkklEQVQoz32Rza7TMBCF8/6sWYDEAiQkNogFG650FyDxBFcImrRNkzZp49hxbKdO478x04QiVF0xskaW5W/mzJlEa52lab7ZVFW9Xq/TNGWs47zHoB0z1kaA4CyEgDkGf7s7AEjA+/zhU/bxnSLNvqoopWo4972QapBC+hir748/3748fHv49f714euX1Yc35ePnp1cvePojwcKaElkfzKgpH/RonHPWeTzG2ABxZK3YbUdGRJmPtJX7nW5PfLOyg0xijBCjGi2KLU5KahcCWIf6MAPCGMbH5dtdnmEAORihsKn3IU4WhtE9bXjdSsLEuqCrgpvp4ty1Bla9ujDnBEl82lairOmgVNdxpc7Yk3HVENZznpX9kZ5xFD/LCP/kpXMUSjdNkxVMni2+4L8AME5uQiTE4qiMmZ6H0XhKT7iefFfWx9PlMi2jcmW3h54QghbcYX/gWXVc5Szdol1CCDXZgL/RaedxJrDWeg/Pw39lE9JmZadusq/HL6bG/8LB9V2DcF7sUfzi/xwLe1sP3K/qN+p+dL48jRNgAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"create order",title:"create order",src:"/refarch-kc/static/059296f51ff7e45aee9042e4269aee44/2faef/Slide2.png",srcSet:["/refarch-kc/static/059296f51ff7e45aee9042e4269aee44/7fc1e/Slide2.png 288w","/refarch-kc/static/059296f51ff7e45aee9042e4269aee44/a5df1/Slide2.png 576w","/refarch-kc/static/059296f51ff7e45aee9042e4269aee44/2faef/Slide2.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 2 - Container Allocated"),Object(i.b)("p",null,"This test will make sure that the expected container is assigned to the new order."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABbklEQVQoz41RTU+EMBDl/3v2oIkXjYknPXhR48H4E4zRRVaFpcDSlkKBstKPqS34uV6cNK8vb2Z4ZSYQQjyF4ctyiVIURVEYhpRWrK4Z84dW1SAEaAXGGCWt0Q4nrgAgAK1fLs6i06OekFWWEYzbrq/rhvOWcz5qWN1ePRzupjeXj8f76c3F4uQguT6/29th4X1gAQQpOYrLIse02rzJt1Eq7WMcJVg7UNLEzxuKm+R1IKVDgQu2XMiOB9a6AovoJi1o1fTxugewxh3j3jTl7C808M2DiWq0ZrhqUx+o4d0opfuE1nOh/8cv1Gri2qNvNkY3rEjieJUilGGMqRiG7+ZPNwP+mkUzScGcjtJmVTQ1F69571yVBqn8RP82q61mAEUqmq9JksRFnrlNTQ/8n7NjvO3cbty0Ca26fjM7j9K4Uu35jGbWt5yBsrok9Bm1TnSzcCbORv3HGYyqWZlleZ4XekrCx5jtz/gU4WtV73NGdtVjwpSdAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"container allocated",title:"container allocated",src:"/refarch-kc/static/0c7cf8dca54a93c3dcb7c0c0828807e5/2faef/Slide3.png",srcSet:["/refarch-kc/static/0c7cf8dca54a93c3dcb7c0c0828807e5/7fc1e/Slide3.png 288w","/refarch-kc/static/0c7cf8dca54a93c3dcb7c0c0828807e5/a5df1/Slide3.png 576w","/refarch-kc/static/0c7cf8dca54a93c3dcb7c0c0828807e5/2faef/Slide3.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 3 - Voyage Assigned"),Object(i.b)("p",null,"This test will make sure that the expected voyage is assigned to the new order."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABPklEQVQoz5VRTU/DMAzt/+fMASQOICFxQRy4DGmHSfwDhGDdxr660a5N23VpujaJHZx02gYSiD0ptuP4yc+OJ4QY+P54NFoslsPh0Pd9xtIsz1maxkmSr9egNSiFAKCkAYqlixUieqj1uPMwuL8ponA6D1ZxvOFlTqRiQ0cCBs/dt+vzoPf0fnsZ9Dr9u6tZ9/Hl4izzXz2DKJJVGS5Bym1dA+hGKqUJ0DQSjKlYvJ5+bMnOJlUSF/OJiMNs1Je88IzDVmpSy7koSgWIgAaANBl0r79ZSyb1oqpp+LJqwrRGm7FJrV0N2hmt1fAj9tAVzCIRJZz4nLpXNa1DKbuUVhc4D84d211nmq7thk7zt85/k2nxgmeMsSiKwvAzy3JHNv8kk0LVBg54AtnWgdnjNNnt2Hsy7v/jkDtcj7/qC+IhfQ8DGG98AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"voyage assigned",title:"voyage assigned",src:"/refarch-kc/static/21310dd7723f2e47406fcc0b6e5f1e7e/2faef/Slide4.png",srcSet:["/refarch-kc/static/21310dd7723f2e47406fcc0b6e5f1e7e/7fc1e/Slide4.png 288w","/refarch-kc/static/21310dd7723f2e47406fcc0b6e5f1e7e/a5df1/Slide4.png 576w","/refarch-kc/static/21310dd7723f2e47406fcc0b6e5f1e7e/2faef/Slide4.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 4 - Order Assigned"),Object(i.b)("p",null,"This test will make sure that the resulting order is as expected. That is, it transitions to the assigned status and has a container and voyage assigned to it."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABYUlEQVQoz5WRTUsDMRCG9/979qDgQUTwIh68VOhBwV8got22rrTdanc3ZpPNZnebj4mTpIKUenAYHkKSd/JOJpFSTtM0m8/zPJ/NZmmaEvJFfdSEEM4bB2C1AmuRzpqftQaABIzJRjfT64u2Khf5uijKRrR1zXgjGOMKIH8cv5wfrx7uXi9PV/ejydXZYnz7dHJE0+cEC3dVwfMlrUrGuTFaKW1CKKXAuY6U9ftbYIbky3dZftL5RAmeOOfwhtya9cemomJZ9Naim5AWDeKhMx47BuzoxdYa2Q1bZWjNKRPagMbWjFVBj1W0tmgwEvv1NJ5BbFTbEMYYIZVsGwDc92FjfXwzPBoZvUTubPeDwt8WQvb4lwD/EOOi7TQqKWuzNddo1To0jDbxCFNpiDwkNrrhOByx2RQ439BzbNt/GKZS1hOLHRD7+W+1VsPQ44QO9Gz/tr0XECcBDn7thO5gb1Tf7dZ7OCOspj4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"order assigned",title:"order assigned",src:"/refarch-kc/static/3bafae8fa8ffc3a744c91ca77a79a580/2faef/Slide5.png",srcSet:["/refarch-kc/static/3bafae8fa8ffc3a744c91ca77a79a580/7fc1e/Slide5.png 288w","/refarch-kc/static/3bafae8fa8ffc3a744c91ca77a79a580/a5df1/Slide5.png 576w","/refarch-kc/static/3bafae8fa8ffc3a744c91ca77a79a580/2faef/Slide5.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 5 - Order Cancelled"),Object(i.b)("p",null,"This test will ensure that once the cancel order API is called, the appropriate CancelOrderCommand event is created so that the order is eventually cancelled as a result."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABpElEQVQoz1VRyY7UMBDN/3PmABIHkJC4IA5cBmkOIM0HIDRiOtNNL0p6sjuOHTvxUlXYyUyrxyo9r++9qnKilHpM0/1ul+fn7XabpmnbdiyOvu06zjkBgLO4IIF/WTtETND7/c23x6+fRFWesryuaiHHnnMh5DAMFim/u/378W3268fD5/fZz5vNlw+n2+9/3r1h6X1CiKqp5DmbxlGMynmw1hvrA86z9UhjU7P9bmrr/rjXTcVPB1UX3XZj5ZAEdyI6lCqvhNKTGEMYbcA4MBadR0By8Qn5BeEKE6I4V63MzkXLeM+F1hog1BUKWpQRvYOAbkF/QcIkygAIMbCuffhXMK6XE/SBv3oRuUXFL9trjGQEV5ZF0/ZVWdZ1o6c56IbEmLCxFqWNhVXiIrSuX2p+ksdzK4ZBSmUdhAjXUruqk03T6NmPUzxZ47Uz0SBVeHQqZCCsaQNiMJwtGE9Vp39vCibm+z0fRnso5Di5Z3L4ct7XXccOx5z1POTyqmFEs7E962z8uJiwUNbEhi3k0D1j5mmaAlprgmfgID4zLwOWPV7hf6YydaepprffAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"order cancelled",title:"order cancelled",src:"/refarch-kc/static/4b432a37f7a937a0034f6186febb16d5/2faef/Slide6.png",srcSet:["/refarch-kc/static/4b432a37f7a937a0034f6186febb16d5/7fc1e/Slide6.png 288w","/refarch-kc/static/4b432a37f7a937a0034f6186febb16d5/a5df1/Slide6.png 576w","/refarch-kc/static/4b432a37f7a937a0034f6186febb16d5/2faef/Slide6.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 6 - Order Cancelled REST"),Object(i.b)("p",null,"This tests will use the Order Command microservice’s and Order Query microservice’s API endpoints to ensure the order is eventually cancelled as expected."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABY0lEQVQoz5WRPU/DMBCG8/+ZGUBiASGxIAaWIhgqfgJC0LSlqGkKzUcdO46T1D6fOTsdUFUGTqcnlp33/J4vUkpN43gxn6dpOpvN4jguyy3zUdGnKIpaCASD1lqjnQViWBtEjBBgMbqb3l41Rb5M11mW17KpKi5qybnQgMnz49vl6Wr88H59vhqPJjcXy6f7l7MTFr9GDrEtMpEmrMi5EABGawMhtNboXLvNq8+PtiQuiCL5VPk3m0+0FJFzjv5QO1h/bQomk6yzltyEtGSQDh147BmwpxdbC6rtdxpYJRiXBtBQa2B10FMVYywZHEj9eoJnEINu6pJzXpaFampE2vdhh/p0Z7h04OBl4N5212t6bSlVR2+J+A8xLZrWkJLxZrEWhqxaR4bJJh1RaoMDj4nB1IKGIzebjOYbeh7a9g9GqbX1pGJHxH7+O2N033c0oSM9279tHwQOk0CHv3ZCd3gwqh9jv3sAMH/bVgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"order cancelled REST",title:"order cancelled REST",src:"/refarch-kc/static/cc696647e0531408d1fbbfac9a47e6e3/2faef/Slide7.png",srcSet:["/refarch-kc/static/cc696647e0531408d1fbbfac9a47e6e3/7fc1e/Slide7.png 288w","/refarch-kc/static/cc696647e0531408d1fbbfac9a47e6e3/a5df1/Slide7.png 576w","/refarch-kc/static/cc696647e0531408d1fbbfac9a47e6e3/2faef/Slide7.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 7 - Container Unassigned REST"),Object(i.b)("p",null,"This test will ensure the compensation process for the Containers microservice is properly executed so that the container previously allocated to the order is now empty and available to be used."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABXUlEQVQoz5VRTU/DMAzt/+fKBSQkhITEBXHgwJCQgL+AQKzbYB0brN9turVr49jBSbaxCS5Y1suLEzt+jlfX9cD330ej2exzOBz6vp+mWV4UeV5YzKMwrMpCEyFIjYqREBGAiDxS6r13Nbg8E9E8+JjFcVwtlkVRClEJITpF4/ubl9PD6ePt6/nx9KHXvziZ3F0/HR3k/rPHJeskWnxNoW3rppFSdh2AMiY7SVqvskQEb00ai8m4SaJyMq7jeT7qy4XwtOZ0jcTIN40hmi0i2aCJuAOHuBPxHBFiEQRBGKVJ2SGtDdfVjEaj2aICy5VBzxajpgXutlq2YVpz3DqBa4G0I2B7kUC2O3IvGwaKHVerlnVKyznChEuwOyIVGuRK+8mQZ6H5mzwry1LxFTuCzRA2yu2i1P7LrKZrWwDgUTO6Oe1oXg8J/04mI3Jr/0vetqQ3X0J2+Qn9at4dfQNF6HzNPVCtmwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"container unassigned",title:"container unassigned",src:"/refarch-kc/static/52894d9764e595c51f8100b9ca2f3770/2faef/Slide8.png",srcSet:["/refarch-kc/static/52894d9764e595c51f8100b9ca2f3770/7fc1e/Slide8.png 288w","/refarch-kc/static/52894d9764e595c51f8100b9ca2f3770/a5df1/Slide8.png 576w","/refarch-kc/static/52894d9764e595c51f8100b9ca2f3770/2faef/Slide8.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Test 8 - Voyage Compensated"),Object(i.b)("p",null,"This test will ensure the compensation process for the Voyage microservice is properly executed so that the voyage previously assigned to the order now reflects that space the container for such order was taking is available to be used."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABRUlEQVQoz41RTU/DMAzt/+fMASQuk5C4IA5cNolDfwNCsK5j7KMwrWvXdF3TJnYcvGQrkxBoVuO+OH6x/RLUdT2Kosl4nCSfcRxHUZRl+aYospxtw6sUghDIGAPaGmTvMBBRQIiT/sPovleultN5kqbpttoVhRDllpdCMw0Hr73LRTh4u71ehP3h3c3s6fH56mITvQSWqF6vtl+JbpudlFprpQEAEY1WQNbKfC2m7zJLxWwi16ty/lGnyzwe6qoMrGW6NZx1NMa0/6gL0i/vj/ZkHqFVqDSKstrVkscB4KGMBp6JAA0f8VYp5/XBH8hcB431gAuia8Q4QK6UB8ihPSbOBaSuMrZtw4PywKykv+K0bQ+M+7kbLHZkRGhkpZRqGslCOQnOJndt/yXY/2TCE7nPIYM5kn3xzrxIluxJ7Cfn8GBu8w2Uk36dm2x/RAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"voyage compensated",title:"voyage compensated",src:"/refarch-kc/static/b1a4e31c3ac33b041ad1d0b6fe7c3f34/2faef/Slide9.png",srcSet:["/refarch-kc/static/b1a4e31c3ac33b041ad1d0b6fe7c3f34/7fc1e/Slide9.png 288w","/refarch-kc/static/b1a4e31c3ac33b041ad1d0b6fe7c3f34/a5df1/Slide9.png 576w","/refarch-kc/static/b1a4e31c3ac33b041ad1d0b6fe7c3f34/2faef/Slide9.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-itg-tests-order-cancelled-order-cancelled-mdx-7a9b70934a3c21a93d0b.js.map
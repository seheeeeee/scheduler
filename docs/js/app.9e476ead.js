(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],s=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var s={},n={app:0},a=[];function i(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=s,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/scheduler/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"0eb5":function(t,e,o){},"11ca":function(t,e,o){"use strict";o("e576")},"2ab2":function(t,e,o){t.exports=o.p+"img/logo_bk.26e8e31f.png"},"2e7b":function(t,e,o){},"2efd":function(t,e,o){"use strict";o("50ae")},"38f7":function(t,e,o){"use strict";o("d4b9")},"50ae":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("main-logo"),o("add-btn"),o("transition",{attrs:{name:"page"}},[o("router-view")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logoWrap"},[s("router-link",{attrs:{to:"/home"}},[s("div",{staticClass:"mainLogo"},[s("span",{staticClass:"image"},[s("img",{attrs:{src:o("2ab2"),alt:"mainlogo"}})]),s("span",{staticClass:"name"},[t._v("What I have to do")])])])],1)},r=[],c={},l=c,d=(o("aaeb"),o("2877")),u=Object(d["a"])(l,i,r,!1,null,"de991e2a",null),m=u.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"addBtnWrap"},[o("router-link",{attrs:{to:"/addItem"}},[o("div",{staticClass:"addBtn shadow"},[o("i",{staticClass:"fas fa-plus"})])])],1)},f=[],h={},g=h,v=(o("6e5c"),Object(d["a"])(g,p,f,!1,null,"2d56e084",null)),I=v.exports,b={name:"App",components:{MainLogo:m,AddBtn:I}},_=b,y=(o("034f"),Object(d["a"])(_,n,a,!1,null,null,null)),w=y.exports,C=o("8c4f"),x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"homeWrap"},[o("none-item",{class:{hidden:t.isNoneItem}}),o("categories",{class:{block:t.isNoneItem}})],1)},S=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flexbox"},[o("ul",t._l(t.categories,(function(e){return o("li",{key:e},[o("router-link",{attrs:{to:{name:"list",params:{category:e}}}},[o("div",{staticClass:"box shadow"},[t._v(" "+t._s(e)+" ")])])],1)})),0)])},k=[],j=(o("a434"),{data:function(){return{todoItems:[],categories:[]}},methods:{addCategories:function(){for(var t=0;t<this.todoItems.length;t++)this.categories.push(this.todoItems[t].item.category);this.duplicateCategories()},duplicateCategories:function(){for(var t=0;t<this.categories.length;t++)this.categories.indexOf(this.categories[t])===this.categories.lastIndexOf(this.categories[t])||this.categories.splice(t,1)},addColorClass:function(){for(var t=document.querySelectorAll(".box"),e=0;e<t.length;e++)e%2!=0?t[e].classList.add("odd"):t[e].classList.add("even")}},created:function(){if(sessionStorage.length>0)for(var t=0;t<sessionStorage.length;t++)"loglevel:webpack-dev-server"!==sessionStorage.key(t)&&this.todoItems.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(t))));this.addCategories()},mounted:function(){this.addColorClass()}}),M=j,$=(o("2efd"),Object(d["a"])(M,O,k,!1,null,"ffaf6ea8",null)),N=$.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"noneWrap"},[o("span",[t._v("Add something to do...")])])}],P={},B=P,W=(o("11ca"),Object(d["a"])(B,E,T,!1,null,"3b3005ea",null)),J=W.exports,A={components:{categories:N,NoneItem:J},data:function(){return{isNoneItem:!1}},created:function(){sessionStorage.length>0&&(this.isNoneItem=!0)}},L=A,q=(o("38f7"),Object(d["a"])(L,x,S,!1,null,"76111c0d",null)),D=q.exports,z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"addWrap"},[o("div",{staticClass:"box"},[o("ul",[o("li",[o("label",{staticClass:"star",attrs:{for:"todoItem"}},[t._v("제목")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contents.todoItem,expression:"contents.todoItem"}],attrs:{type:"text",id:"todoItem",placeholder:"무엇을 해야하나요?",required:""},domProps:{value:t.contents.todoItem},on:{input:function(e){e.target.composing||t.$set(t.contents,"todoItem",e.target.value)}}})]),o("li",[o("label",{staticClass:"star",attrs:{for:"category"}},[t._v("분류")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contents.category,expression:"contents.category"}],attrs:{type:"text",id:"category",placeholder:"예)일상, 건강, 취업 etc.",required:""},domProps:{value:t.contents.category},on:{input:function(e){e.target.composing||t.$set(t.contents,"category",e.target.value)}}})]),o("li",[o("label",{staticClass:"star",attrs:{for:"deadline"}},[t._v("마감")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contents.deadline,expression:"contents.deadline"}],attrs:{type:"date",id:"deadline",required:""},domProps:{value:t.contents.deadline},on:{input:function(e){e.target.composing||t.$set(t.contents,"deadline",e.target.value)}}})]),o("li",[o("label",{attrs:{for:"detail"}},[t._v("내용")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contents.detail,expression:"contents.detail"}],attrs:{id:"detail",placeholder:"자세한 내용을 입력하세요."},domProps:{value:t.contents.detail},on:{input:function(e){e.target.composing||t.$set(t.contents,"detail",e.target.value)}}})])]),o("button",{staticClass:"addBtn",on:{click:t.addTodo}},[t._v("ADD")]),o("button",{staticClass:"clearBtn",on:{click:t.clearInput}},[t._v("CANCLE")])])])},F=[],G={data:function(){return{contents:{todoItem:"",category:"",deadline:"",detail:""}}},methods:{addTodo:function(){if(""!==this.contents.todoItem){var t={completed:!1,item:this.contents};sessionStorage.setItem(this.contents.todoItem,JSON.stringify(t)),this.clearInput()}},clearInput:function(){this.contents="",history.go(-1)}}},H=G,K=(o("8e66"),Object(d["a"])(H,z,F,!1,null,"5a42b0ce",null)),Q=K.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"listWrap"},[o("ul",t._l(t.dupliItems,(function(e,s){return o("li",{key:e.item.todoItem,staticClass:"shadow"},[o("i",{staticClass:"fas fa-check checkBtn",class:{checkBtnCompleted:e.completed},on:{click:function(o){return t.toggleComplete(e)}}}),o("span",{staticClass:"text",class:{textCompleted:e.completed},on:{click:function(e){return t.openModal(s)}}},[t._v(t._s(e.item.todoItem))]),o("span",{on:{click:function(o){return t.removeTodo(e,s)}}},[o("i",{staticClass:"fas fa-trash-alt"})])])})),0),o("modal-todo",{class:{hidden:this.showModal},attrs:{showIndex:t.showIndex},on:{closeModal:t.closeModal}})],1)},U=[],V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal"},[o("ul",{staticClass:"shadow"},[o("li",{staticClass:"closeBtn",on:{click:t.closeModal}},[o("i",{staticClass:"fas fa-times"})]),o("li",[o("span",[t._v("제목")]),o("span",[t._v(t._s(t.showItem[0].todoItem))])]),o("li",[o("span",[t._v("분류")]),o("span",[t._v(t._s(t.showItem[0].category))])]),o("li",[o("span",[t._v("마감")]),o("span",[t._v(t._s(t.showItem[0].deadline))])]),o("li",[o("span",[t._v("내용")]),o("span",[t._v(t._s(t.showItem[0].detail))])])])])},X=[],Y={props:["showIndex"],data:function(){return{todoItems:[],showItem:[],dupliItems:[]}},computed:{category:function(){return this.$route.params.category}},watch:{showIndex:function(){this.sliceItem(this.dupliItems,"item",this.showIndex)}},methods:{sliceItem:function(t,e,o){return this.showItem=[],this.showItem.push(t[o][e]),this.showItem},closeModal:function(){var t=document.querySelector(".modal");t.classList.remove("hidden"),this.$emit("closeModal")},duplicateTodoItems:function(){for(var t=this.category,e=0;e<this.todoItems.length;e++)-1!==this.todoItems[e]["item"]["category"].indexOf(t)&&this.dupliItems.push(this.todoItems[e])}},created:function(){if(sessionStorage.length>0)for(var t=0;t<sessionStorage.length;t++)"loglevel:webpack-dev-server"!==sessionStorage.key(t)&&this.todoItems.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(t))));this.duplicateTodoItems()},mounted:function(){this.sliceItem(this.dupliItems,"item",this.showIndex)}},Z=Y,tt=(o("8d43"),Object(d["a"])(Z,V,X,!1,null,"5e584584",null)),et=tt.exports,ot={components:{ModalTodo:et},data:function(){return{todoItems:[],showModal:!1,showIndex:"",dupliItems:[]}},computed:{category:function(){return this.$route.params.category}},methods:{removeTodo:function(t,e){sessionStorage.removeItem(t),this.dupliItems.splice(e,1)},toggleComplete:function(t){t.completed=!t.completed,sessionStorage.removeItem(t.item.todoItem),sessionStorage.setItem(t.item.todoItem,JSON.stringify(t))},openModal:function(t){this.showModal=!this.showModal,this.showIndex=t},closeModal:function(){this.showModal=!1},duplicateTodoItems:function(){for(var t=this.category,e=0;e<this.todoItems.length;e++)-1!==this.todoItems[e]["item"]["category"].indexOf(t)&&this.dupliItems.push(this.todoItems[e])}},created:function(){if(sessionStorage.length>0)for(var t=0;t<sessionStorage.length;t++)"loglevel:webpack-dev-server"!==sessionStorage.key(t)&&this.todoItems.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(t))));this.duplicateTodoItems()}},st=ot,nt=(o("d6e9"),Object(d["a"])(st,R,U,!1,null,"1c1f962d",null)),at=nt.exports,it=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"addCategoryWrap"},[t._v(" addCategory ")])},rt=[],ct={},lt=ct,dt=Object(d["a"])(lt,it,rt,!1,null,null,null),ut=dt.exports;s["a"].use(C["a"]);var mt=new C["a"]({mode:"history",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:D},{path:"/addItem",name:"add",component:Q},{path:"/list/:category",name:"list",component:at},{path:"/addCategory",component:ut}]});s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(w)},router:mt}).$mount("#app")},"633e":function(t,e,o){},"6e5c":function(t,e,o){"use strict";o("7393")},7393:function(t,e,o){},"85ec":function(t,e,o){},"8d43":function(t,e,o){"use strict";o("9bc3")},"8e66":function(t,e,o){"use strict";o("2e7b")},"9bc3":function(t,e,o){},aaeb:function(t,e,o){"use strict";o("0eb5")},d4b9:function(t,e,o){},d6e9:function(t,e,o){"use strict";o("633e")},e576:function(t,e,o){}});
//# sourceMappingURL=app.9e476ead.js.map
(function(e){function t(t){for(var n,i,c=t[0],u=t[1],o=t[2],f=0,m=[];f<c.length;f++)i=c[f],a[i]&&m.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,o||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/chat-firebase/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1335:function(e,t,r){},"18c1":function(e,t,r){"use strict";var n=r("1335"),a=r.n(n);a.a},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return r(t)}function s(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("router-view")],1)},s=[],i=(r("5c0b"),r("2877")),c={},u=Object(i["a"])(c,a,s,!1,null,null,null),o=u.exports,l=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chat"},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",placement:"sticky"}},[r("b-navbar-brand",[e._v("Chat")]),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{text:"Welcome "+e.displayName,right:""}},[r("b-dropdown-item",{on:{click:e.onLogout}},[e._v("Logout")])],1)],1)],1),r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-md-4"},[r("Channels",{attrs:{items:e.channels,active:e.activeChannel},on:{input:e.onChannelChange}}),r("Invite",{staticClass:"mt-3",attrs:{loading:e.sendingInvite},on:{input:e.onInvite}})],1),r("div",{staticClass:"col-md-8"},[r("router-view")],1)])],1)},m=[],d=r("cebc"),h=(r("96cf"),r("3b8d")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"channels"},[r("h5",[e._v("Channels")]),r("div",{staticClass:"channels-list border rounded overflow-auto"},[r("ul",{staticClass:"list-unstyled"},e._l(e.items,function(t){return r("li",{key:t.id,staticClass:"p-2",class:{active:e.activeChannelId===t.id},on:{click:function(r){return e.onSelect(t)}}},[e._v("\n        "+e._s(t.name)+"\n        "),t.owner===e.currentUser.email?r("span",[e._v("(default)")]):e._e()])}),0)])])},b=[],g=r("2f62"),v={name:"Channels",props:{items:{type:Array,default:function(){return[]},required:!0},active:{type:Object,default:null,required:!1}},computed:Object(d["a"])({},Object(g["c"])(["currentUser"]),{activeChannelId:function(){return this.active?this.active.id:null}}),methods:{onSelect:function(e){this.$emit("input",e)}}},j=v,w=(r("18c1"),Object(i["a"])(j,p,b,!1,null,"486a9722",null)),y=w.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",{staticClass:"row",on:{submit:e.onSubmit}},[r("div",{staticClass:"col-md-8"},[r("b-input",{attrs:{type:"email",value:e.value,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("div",{staticClass:"col-md-4 pl-0"},[r("b-button",{attrs:{type:"submit",variant:"success",block:"",disabled:!e.canSubmit}},[e._v(e._s(e.buttonLabel))])],1)])},x=[],k={name:"Invite",props:{value:{type:String,default:""},loading:{type:Boolean,default:!1}},computed:{canSubmit:function(){return!!this.email&&this.email.length>0||!this.loading},buttonLabel:function(){return this.loading?"Sending...":"Invite"}},methods:{onSubmit:function(e){e.preventDefault(),this.canSubmit&&(this.$emit("input",this.email),this.email=null)}},data:function(){return{email:null}}},O=k,E=Object(i["a"])(O,C,x,!1,null,null,null),R=E.exports,_={name:"Chat",components:{Invite:R,Channels:y},created:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getChannels();case 2:return e.next=4,this.createChatChannel();case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:Object(d["a"])({},Object(g["c"])(["currentUser","channels","activeChannel"]),{displayName:function(){return this.currentUser.displayName||""}}),methods:Object(d["a"])({},Object(g["b"])(["logout","createChatChannel","sendChatChannelInvite","getChannels"]),{onLogout:function(){this.logout(),this.$router.push({name:"login"})},onChannelChange:function(e){this.$router.push({name:"channel",params:{channel:e.id}})},onInvite:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.sendingInvite=!0,e.next=4,this.sendChatChannelInvite(t);case 4:return e.prev=4,this.sendingInvite=!1,e.finish(4);case 7:case"end":return e.stop()}},e,this,[[0,,4,7]])}));function t(t){return e.apply(this,arguments)}return t}()}),data:function(){return{sendingInvite:!1}}},S=_,U=Object(i["a"])(S,f,m,!1,null,null,null),N=U.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("div",{staticClass:"row justify-content-md-center mt-5"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"jumbotron"},[r("router-view")],1)])])])},$=[],I={name:"Security"},F=I,z=Object(i["a"])(F,M,$,!1,null,null,null),A=z.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h5",{staticClass:"display-4"},[e._v("Login")]),e.formErrors.$?r("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.formErrors.$))]):e._e(),r("b-form",{on:{submit:e.onSubmit}},[r("b-form-input",{attrs:{id:"username",state:e.inputState.username,type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),e.formErrors.username?r("b-form-invalid-feedback",[e._v(e._s(e.formErrors.username))]):e._e(),r("b-form-input",{staticClass:"mt-2",attrs:{state:e.inputState.password,id:"password",type:"password",required:"",placeholder:"Enter password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e.formErrors.password?r("b-form-invalid-feedback",[e._v(e._s(e.formErrors.password))]):e._e(),r("div",{staticClass:"mt-2"},[r("b-button",{attrs:{variant:"primary",size:"lg",type:"submit"}},[e._v("Login")]),r("b-button",{staticClass:"ml-2",attrs:{variant:"secondary",size:"lg",to:"register",type:"button"}},[e._v("Register")])],1)],1)],1)},L=[],B={name:"Login",created:function(){this.resetFormErrors()},computed:Object(d["a"])({},Object(g["c"])({formErrors:"loginFormErrors"}),{inputState:function(){var e={username:null,password:null};return this.formErrors.username&&(e.username=!1),this.formErrors.password&&(e.password=!1),e}}),methods:Object(d["a"])({},Object(g["d"])(["resetFormErrors"]),Object(g["b"])(["login"]),{onSubmit:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,this.login(this.form);case 4:this.$router.push({name:"chat"}),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](1);case 9:case"end":return e.stop()}},e,this,[[1,7]])}));function t(t){return e.apply(this,arguments)}return t}()}),data:function(){return{form:{username:null,password:null}}}},T=B,P=Object(i["a"])(T,q,L,!1,null,null,null),D=P.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h5",{staticClass:"display-4"},[e._v("Register")]),e.formErrors.$?r("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.formErrors.$))]):e._e(),r("b-form",{on:{submit:e.onSubmit}},[r("b-form-input",{attrs:{id:"firstName",type:"text",state:e.inputState.firstName,required:"",placeholder:"Enter first name"},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}}),e.formErrors.firstName?r("b-form-invalid-feedback",[e._v(e._s(e.formErrors.firstName))]):e._e(),r("b-form-input",{staticClass:"mt-2",attrs:{state:e.inputState.lastName,id:"lastName",type:"text",required:"",placeholder:"Enter last name"},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}}),e.formErrors.lastName?r("b-form-invalid-feedback",[e._v(e._s(e.formErrors.lastName))]):e._e(),r("b-form-input",{staticClass:"mt-2",attrs:{state:e.inputState.username,id:"username",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),e.formErrors.username?r("b-form-invalid-feedback",[e._v(e._s(e.formErrors.username))]):e._e(),r("b-form-input",{staticClass:"mt-2",attrs:{state:e.inputState.password,id:"password",type:"password",required:"",placeholder:"Enter password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e.formErrors.password?r("b-form-invalid-feedback",[e._v(e._s(e.formErrors.password))]):e._e(),r("div",{staticClass:"mt-2"},[r("b-button",{staticClass:"mr-2",attrs:{type:"submit",variant:"primary",size:"lg"}},[e._v("Register")]),r("b-button",{attrs:{variant:"secondary",size:"lg",to:"login",type:"button"}},[e._v("Login")])],1)],1)],1)},G=[],J={name:"Register",created:function(){this.resetFormErrors()},computed:Object(d["a"])({},Object(g["c"])({formErrors:"registerFormErrors"}),{inputState:function(){var e={firstName:null,lastName:null,username:null,password:null};return this.formErrors.firstName&&(e.firstName=!1),this.formErrors.lastName&&(e.lastName=!1),this.formErrors.username&&(e.username=!1),this.formErrors.password&&(e.password=!1),e}}),methods:Object(d["a"])({},Object(g["d"])(["resetFormErrors"]),Object(g["b"])(["createUser"]),{onSubmit:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,this.createUser(this.form);case 4:this.$router.push("login"),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](1);case 9:case"end":return e.stop()}},e,this,[[1,7]])}));function t(t){return e.apply(this,arguments)}return t}()}),data:function(){return{form:{firstName:null,lastName:null,username:null,password:null}}}},V=J,H=Object(i["a"])(V,W,G,!1,null,null,null),K=H.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.activeChannel?r("Messaging",{attrs:{channel:e.activeChannel,sending:e.sendingMessage,messages:e.messages},on:{input:e.onSendMessage}}):e._e()},X=[],Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"messaging"},[r("div",{staticClass:"row",staticStyle:{height:"90%"}},[r("div",{ref:"messages",staticClass:"col-md-12 messages p-3 border rounded overflow-auto"},e._l(e.messages,function(e){return r("Message",{key:e.id,staticClass:"mb-2",attrs:{from:e.user,body:e.message,at:e.timestamp}})}),1)]),r("b-form",{staticClass:"row mt-3",on:{submit:e.onSend}},[r("div",{staticClass:"col-md-10 p-0"},[r("b-input",{attrs:{type:"text",block:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),r("div",{staticClass:"col-md-2 pr-0"},[r("b-button",{attrs:{type:"submit",variant:"primary",block:"",disabled:!e.canSubmit}},[e._v(e._s(e.buttonLabel))])],1)])],1)},Z=[],ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message"},[r("div",{staticClass:"small"},[r("span",{staticClass:"font-weight-bold",class:e.userClass},[e._v(e._s(e.from))]),r("span",{staticClass:"text-secondary"},[e._v(" "+e._s(e.displayAt))])]),r("div",[e._v(e._s(e.body))])])},te=[],re=(r("c5f6"),r("c1df")),ne=r.n(re),ae={name:"Message",props:{from:{type:String,required:!0},at:{type:Number,required:!0},body:{type:String,required:!0}},computed:Object(d["a"])({},Object(g["c"])(["currentUser"]),{displayAt:function(){return ne()(1e3*this.at).fromNow()},userClass:function(){return this.from===this.currentUser.email?"text-success":"text-primary"}})},se=ae,ie=Object(i["a"])(se,ee,te,!1,null,"4afa0d18",null),ce=ie.exports,ue={name:"Messaging",components:{Message:ce},props:{channel:{type:Object,required:!0},sending:{type:Boolean,required:!1,default:!1},messages:{type:Array,required:!0,default:function(){return[]}}},computed:{canSubmit:function(){return!!this.message&&this.message.length>0&&!this.sending},buttonLabel:function(){return this.sending?"Sending...":"Send"}},methods:{onSend:function(e){e.preventDefault(),this.canSubmit&&(this.$emit("input",this.message),this.message=null)}},watch:{messages:function(){var e=this;this.$nextTick(function(){e.$refs.messages.scrollTop=e.$refs.messages.scrollHeight})}},data:function(){return{message:null}}},oe=ue,le=(r("9820"),Object(i["a"])(oe,Y,Z,!1,null,"59770c3c",null)),fe=le.exports,me={name:"Channel",components:{Messaging:fe},created:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getChannels();case 2:if(t=this.channelById(this.$route.params.channel),t){e.next=6;break}return this.$router.push({name:"chat"}),e.abrupt("return");case 6:this.setActiveChannel(t),this.getChatChannelMessages(t);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:Object(d["a"])({},Object(g["c"])(["currentUser","channels","activeChannel","messages","channelById"])),methods:Object(d["a"])({},Object(g["d"])(["setActiveChannel"]),Object(g["b"])(["sendChatMessage","getChatChannelMessages","getChannels"]),{onSendMessage:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.sendingMessage=!0,e.next=4,this.sendChatMessage(t);case 4:return e.prev=4,this.sendingMessage=!1,e.finish(4);case 7:case"end":return e.stop()}},e,this,[[0,,4,7]])}));function t(t){return e.apply(this,arguments)}return t}()}),data:function(){return{sendingMessage:!1}}},de=me,he=Object(i["a"])(de,Q,X,!1,null,null,null),pe=he.exports,be=r("795b"),ge=r.n(be),ve=r("59ca"),je=r.n(ve),we=(r("ea7b"),r("e71f"),{firebase:{apiKey:"AIzaSyCivoVC4wosTRramV6474Pke4gE4BtXvoQ",authDomain:"chat-65d62.firebaseapp.com",databaseURL:"https://chat-65d62.firebaseio.com",projectId:"chat-65d62",storageBucket:"chat-65d62.appspot.com",messagingSenderId:"937565872619"}});je.a.initializeApp(we.firebase);var ye=je.a,Ce={isAuthenticated:function(){return new ge.a(function(e){ye.auth().onAuthStateChanged(function(t){e(!!t)})})},currentUser:function(){return new ge.a(function(e){ye.auth().onAuthStateChanged(function(t){e(t)})})}},xe=function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some(function(e){return!!e.meta.guest})){e.next=2;break}return e.abrupt("return",ke(n));case 2:if(!t.matched.some(function(e){return e.meta.requiresAuth})){e.next=4;break}return e.abrupt("return",Ee(n));case 4:n();case 5:case"end":return e.stop()}},e)}));return function(t,r,n){return e.apply(this,arguments)}}();function ke(e){return Oe.apply(this,arguments)}function Oe(){return Oe=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ce.isAuthenticated();case 2:if(r=e.sent,!r){e.next=6;break}return t({name:"chat"}),e.abrupt("return");case 6:t();case 7:case"end":return e.stop()}},e)})),Oe.apply(this,arguments)}function Ee(e){return Re.apply(this,arguments)}function Re(){return Re=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ce.isAuthenticated();case 2:if(r=e.sent,!r){e.next=6;break}return t(),e.abrupt("return");case 6:t({name:"login"});case 7:case"end":return e.stop()}},e)})),Re.apply(this,arguments)}n["default"].use(l["a"]),console.info("router");var _e=new l["a"]({mode:"hash",base:"/chat-firebase/",routes:[{path:"/",name:"chat",component:N,meta:{requiresAuth:!0},children:[{path:"channels/:channel",name:"channel",component:pe,meta:{requiresAuth:!0}}]},{path:"/s",component:A,redirect:"/s/login",children:[{path:"login",name:"login",component:D,meta:{guest:!0}},{path:"register",name:"register",component:K,meta:{guest:!0}}]}]});_e.beforeEach(xe);var Se=_e,Ue=(r("ac6a"),r("7514"),r("5df3"),r("0a0d")),Ne=r.n(Ue),Me=r("bd86"),$e={createUser:function(e){return ye.auth().createUserAndRetrieveDataWithEmailAndPassword(e.username,e.password)},login:function(e,t){return ye.auth().signInWithEmailAndPassword(e,t)},logout:function(){return ye.auth().signOut()}},Ie={createChannel:function(e,t,r){return ye.firestore().collection("channels").doc(e).set({name:t,id:e,owner:r},{merge:!0})},addUserToChannel:function(e,t){return ye.firestore().collection("users").doc(e).set({channels:Object(Me["a"])({},t,!0)},{merge:!0})},createInvite:function(e,t,r){return ye.firestore().collection("invites").add({from:e,to:t,channel:r})},invite:function(e,t){return ye.firestore().collection("users").doc(e).set({channels:Object(Me["a"])({},t,!0)},{merge:!0})},createMessage:function(e,t,r){var n=Math.floor(Ne()()/1e3);return ye.firestore().collection("messages").add({user:e,message:r,timestamp:n,channel:t})},getMessagesForChannel:function(e){return ye.firestore().collection("messages").where("channel","==",e).orderBy("timestamp","desc").limit(100).get()},getUser:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ye.firestore().collection("users").doc(t).get();case 2:return r=e.sent,e.abrupt("return",r.data());case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),getChannelsByIds:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=ye.firestore(),n=[],t.forEach(function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=new ge.a(function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.collection("channels").doc(t).get();case 2:a=e.sent,n(a.data());case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),n.push(a);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",ge.a.all(n));case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},Fe={security:$e,chat:Ie},ze="auth/email-already-in-use",Ae="auth/invalid-email",qe="auth/weak-password",Le="auth/user-not-found",Be="auth/wrong-password",Te=r("a4bb"),Pe=r.n(Te),De=r("5176"),We=r.n(De),Ge={createChannel:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Fe.chat.createChannel(t,r,n.email);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));function t(t,r,n){return e.apply(this,arguments)}return t}(),addUserToChannel:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Fe.chat.addUserToChannel(t.email,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),createChannelForUser:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.createChannel(t.email,t.displayName,t);case 2:return e.next=4,this.addUserToChannel(t,t.email);case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),invite:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ce.currentUser();case 2:return r=e.sent,e.next=5,Fe.chat.invite(t,r.email);case 5:return e.next=7,Fe.chat.createInvite(r.email,t,r.email);case 7:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),sendMessage:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ce.currentUser();case 2:return n=e.sent,e.next=5,Fe.chat.createMessage(n.email,t,r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),getMessagesForChannel:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Fe.chat.getMessagesForChannel(t);case 2:return r=e.sent,n=[],r.docs.forEach(function(e){n.push(We()({id:e.id},Object(d["a"])({},e.data())))}),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),getCurrentUser:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ce.currentUser();case 2:return t=e.sent,e.next=5,Fe.chat.getUser(t.email);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),getChannels:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrentUser();case 2:return t=e.sent,e.next=5,Fe.chat.getChannelsByIds(Pe()(t.channels));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},Je=function(){},Ve={channels:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=ye.firestore(),e.next=3,Ce.currentUser();case 3:if(r=e.sent,r){e.next=6;break}return e.abrupt("return");case 6:t.collection("users").doc(r.email).onSnapshot(function(e){var r=e.data(),n=Pe()(r.channels),a=[];n.forEach(function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.collection("channels").where("id","==",r).get();case 2:n=e.sent,n.docs.forEach(function(e){a.push(e.data())});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),Qe.commit("setChannels",a)});case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),messages:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=ye.firestore(),Je(),Je=r.collection("messages").where("channel","==",t).orderBy("timestamp","desc").limit(50).onSnapshot(function(e){var t=[];e.docs.forEach(function(e){var r=We()({id:e.id},Object(d["a"])({},e.data()));t.push(r)}),Qe.commit("addMessages",t)});case 3:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},He=r("2ef0"),Ke=r.n(He);n["default"].use(g["a"]);var Qe=new g["a"].Store({state:{currentUser:{},formErrors:{register:{},login:{}},channels:[],activeChannel:null,messages:[],messagesIds:{}},getters:{registerFormErrors:function(e){var t=e.formErrors;return t.register},loginFormErrors:function(e){var t=e.formErrors;return t.login},currentUser:function(e){var t=e.currentUser;return t},isAuthenticated:function(e){var t=e.currentUser;return t&&!!t.uid},channels:function(e){var t=e.channels;return t},activeChannel:function(e){var t=e.activeChannel;return t},defaultChannel:function(e){var t=e.channels,r=e.currentUser;return t.find(function(e){return e.owner=r.email})},messages:function(e){var t=e.messages;return Ke.a.sortBy(t,function(e){return e.timestamp})},channelById:function(e){var t=e.channels;return function(e){return t.find(function(t){return t.id===e})}}},mutations:{setRegisterFormErrors:function(e,t){var r=e.formErrors;r.register=t},setLoginFormErrors:function(e,t){var r=e.formErrors;r.login=t},resetFormErrors:function(e){var t=e.formErrors,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!r)return t.register={},void(t.login={});t[r]={}},setCurrentUser:function(e,t){e.currentUser=t},resetCurrentUser:function(e){e.currentUser={}},setChannels:function(e,t){e.channels=t},setActiveChannel:function(e,t){e.activeChannel=t},setMessages:function(e,t){e.messages=t,e.messagesIds={},t.forEach(function(t){return e.messagesIds[t.id]=!0})},addMessages:function(e,t){t.forEach(function(t){e.messagesIds[t.id]||(e.messages.push(t),e.messagesIds[t.id]=t.id)})},resetMessages:function(e){e.messages={}}},actions:{resetState:function(e){var t=e.commit;t("resetCurrentUser"),t("resetMessages"),t("setActiveChannel",null),t("resetFormErrors")},createUser:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s,i,c,u,o,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.username,s=r.password,i=r.firstName,c=r.lastName,u="".concat(i," ").concat(c),e.prev=3,n("resetFormErrors"),e.next=7,Fe.security.createUser({username:a,password:s});case 7:return o=e.sent,l=o.user,e.next=11,l.updateProfile({displayName:u});case 11:return n("setCurrentUser",{uid:l.uid,displayName:l.displayName,email:l.email}),e.abrupt("return",l);case 15:if(e.prev=15,e.t0=e["catch"](3),e.t0.code!==ze&&e.t0.code!==Ae){e.next=20;break}throw n("setRegisterFormErrors",{username:e.t0.message}),e.t0;case 20:if(e.t0.code!==qe){e.next=23;break}throw n("setRegisterFormErrors",{password:e.t0.message}),e.t0;case 23:throw n("setRegisterFormErrors",{$:e.t0.message}),e.t0;case 25:case"end":return e.stop()}},e,null,[[3,15]])}));function t(t,r){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s,i,c,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,s=r.username,i=r.password,e.prev=2,n("resetFormErrors"),e.next=6,Fe.security.login(s,i);case 6:return c=e.sent,u=c.user,a("resetState"),n("setCurrentUser",{uid:u.uid,displayName:u.displayName,email:u.email}),e.abrupt("return",u);case 13:if(e.prev=13,e.t0=e["catch"](2),e.t0.code!==Ae&&e.t0.code!==Le){e.next=18;break}throw n("setLoginFormErrors",{username:e.t0.message}),e.t0;case 18:if(e.t0.code!==Be){e.next=21;break}throw n("setLoginFormErrors",{password:e.t0.message}),e.t0;case 21:throw n("setLoginFormErrors",{$:e.t0.message}),e.t0;case 23:case"end":return e.stop()}},e,null,[[2,13]])}));function t(t,r){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,e.next=3,Fe.security.logout();case 3:return n=e.sent,r("resetState"),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),getCurrentUser:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ce.currentUser();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),createChatChannel:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ce.currentUser();case 2:return t=e.sent,e.next=5,Ge.createChannelForUser(t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),sendChatChannelInvite:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ge.invite(r);case 2:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),sendChatMessage:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.getters,e.next=3,Ge.sendMessage(n.activeChannel.id,r);case 3:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),getChatChannelMessages:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.id,e.next=4,Ge.getMessagesForChannel(a);case 4:s=e.sent,Ve.messages(a),n("setMessages",s);case 7:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),getChannels:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Ge.getChannels();case 3:return n=e.sent,r("setChannels",n),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),getChatCurrentUser:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ge.getCurrentUser();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}}),Xe=r("9483");Object(Xe["a"])("".concat("/chat-firebase/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ye=r("9f7b"),Ze=r.n(Ye);n["default"].config.productionTip=!1,n["default"].use(Ze.a),ye.auth().onAuthStateChanged(function(e){console.info("authStateChanged",e),e?Qe.commit("setCurrentUser",{uid:e.uid,email:e.email,displayName:e.displayName}):Qe.dispatch("resetState")}),Ve.channels(),new n["default"]({router:Se,store:Qe,render:function(e){return e(o)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(e,t,r){},9820:function(e,t,r){"use strict";var n=r("fbf2"),a=r.n(n);a.a},fbf2:function(e,t,r){}});
//# sourceMappingURL=app.94ecc8b0.js.map
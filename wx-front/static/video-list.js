(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["video-list"],{"093a":function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return r})),i.d(e,"d",(function(){return o}));var a=i("a8d4");function n(t){return Object(a["a"])({url:"/wx/video/list",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/wx/video/"+t,method:"get"})}function r(t){return Object(a["a"])({url:"/wx/video/list/relate",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/wx/video",method:"put",data:t})}},2994:function(t,e,i){"use strict";i("68ef"),i("e3b3"),i("c0c2")},"2bdd":function(t,e,i){"use strict";var a=i("d282");function n(t){var e=window.getComputedStyle(t),i="none"===e.display,a=null===t.offsetParent&&"fixed"!==e.position;return i||a}var s=i("a8c1"),r=i("5fbe"),o=i("543e"),c=Object(a["a"])("list"),l=c[0],d=c[1],u=c[2];e["a"]=l({mixins:[Object(r["a"])((function(t){this.scroller||(this.scroller=Object(s["c"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,a=t.scroller,s=t.offset,r=t.direction;e=a.getBoundingClientRect?a.getBoundingClientRect():{top:0,bottom:a.innerHeight};var o=e.bottom-e.top;if(!o||n(i))return!1;var c=!1,l=t.$refs.placeholder.getBoundingClientRect();c="up"===r?e.top-l.top<=s:l.bottom-e.bottom<=s,c&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{key:"loading",class:d("loading")},[this.slots("loading")||t(o["a"],{attrs:{size:"16"}},[this.loadingText||u("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:d("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:d("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",key:"placeholder",class:d("placeholder")});return t("div",{class:d(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},"4df4":function(t,e,i){"use strict";var a=i("0366"),n=i("7b0b"),s=i("9bdd"),r=i("e95a"),o=i("50c4"),c=i("8418"),l=i("35a1");t.exports=function(t){var e,i,d,u,h,f,g=n(t),v="function"==typeof this?this:Array,m=arguments.length,p=m>1?arguments[1]:void 0,b=void 0!==p,y=l(g),x=0;if(b&&(p=a(p,m>2?arguments[2]:void 0,2)),void 0==y||v==Array&&r(y))for(e=o(g.length),i=new v(e);e>x;x++)f=b?p(g[x],x):g[x],c(i,x,f);else for(u=y.call(g),h=u.next,i=new v;!(d=h.call(u)).done;x++)f=b?s(u,p,[d.value,x],!0):d.value,c(i,x,f);return i.length=x,i}},5852:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04"),i("1146"),i("f032")},"58e6":function(t,e,i){"use strict";var a=i("d282"),n=i("1325"),s=i("a8c1"),r=i("3875"),o=i("543e"),c=Object(a["a"])("pull-refresh"),l=c[0],d=c[1],u=c[2],h=50,f=["pulling","loosing","success"];e["a"]=l({mixins:[r["a"]],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,value:{type:Boolean,required:!0},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:h}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},headStyle:function(){if(this.headHeight!==h)return{height:this.headHeight+"px"}}},watch:{value:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.slots("success")||this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scrollEl=Object(s["c"])(this.$el)},methods:{checkPullStart:function(t){this.ceiling=0===Object(s["b"])(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(Object(n["c"])(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var e=+this.headHeight;return t>e&&(t=t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4),Math.round(t)},setStatus:function(t,e){var i;i=e?"loading":0===t?"normal":t<this.headHeight?"pulling":"loosing",this.distance=t,i!==this.status&&(this.status=i)},genStatus:function(){var t=this.$createElement,e=this.status,i=this.distance,a=this.slots(e,{distance:i});if(a)return a;var n=[],s=this[e+"Text"]||u(e);return-1!==f.indexOf(e)&&n.push(t("div",{class:d("text")},[s])),"loading"===e&&n.push(t(o["a"],{attrs:{size:"16"}},[s])),n},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}},render:function(){var t=arguments[0],e={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""};return t("div",{class:d()},[t("div",{ref:"track",class:d("track"),style:e},[t("div",{class:d("head"),style:this.headStyle},[this.genStatus()]),this.slots()])])}})},"6ab3":function(t,e,i){},"7e1b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAA7klEQVQ4T72UMW5CMRBE36RLkTNwGcRREikKJwjUiBpScAvoKdNyCnKCKIrSwKIhjoSAj21ZyjZfX7afZsezFo2lxvO0AyLCkAHwA7xL2tWoUkQsAh59SLABniT5W1QGfAfc/+0WWMEMGEv6ylG0j4hrmwQfwIuk1S1IJ+BE0RIYSjLworKA5I1bGQHzc5OLACdqLkyuAiQ1NtkGT47/XSbeNA5sfE/S9v8BKSevkqbVLVxLalELAl/j2AmtvkaBk+hE1gUpRdkJdBI7y8P0GfBwNkxzJ69omCLiLeC5ZZzvgP7vc8C6+kHJzXtu/QA8TXMXzFaROQAAAABJRU5ErkJggg=="},"8cfb":function(t,e,i){},"99af":function(t,e,i){"use strict";var a=i("23e7"),n=i("d039"),s=i("e8b5"),r=i("861d"),o=i("7b0b"),c=i("50c4"),l=i("8418"),d=i("65f0"),u=i("1dde"),h=i("b622"),f=i("2d00"),g=h("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",p=f>=51||!n((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=u("concat"),y=function(t){if(!r(t))return!1;var e=t[g];return void 0!==e?!!e:s(t)},x=!p||!b;a({target:"Array",proto:!0,forced:x},{concat:function(t){var e,i,a,n,s,r=o(this),u=d(r,0),h=0;for(e=-1,a=arguments.length;e<a;e++)if(s=-1===e?r:arguments[e],y(s)){if(n=c(s.length),h+n>v)throw TypeError(m);for(i=0;i<n;i++,h++)i in s&&l(u,h,s[i])}else{if(h>=v)throw TypeError(m);l(u,h++,s)}return u.length=h,u}})},"9bdd":function(t,e,i){var a=i("825a"),n=i("2a62");t.exports=function(t,e,i,s){try{return s?e(a(i)[0],i[1]):e(i)}catch(r){throw n(t),r}}},a46a:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video-list"},[a("div",{staticClass:"list-title"},[a("form",{attrs:{action:"1"}},[a("van-search",{attrs:{placeholder:"按内容搜索"},on:{search:t.handlequery},model:{value:t.queryParams.videoName,callback:function(e){t.$set(t.queryParams,"videoName",e)},expression:"queryParams.videoName"}})],1)]),a("div",{staticClass:"gap"}),a("van-empty",{directives:[{name:"show",rawName:"v-show",value:!t.list.length,expression:"!list.length"}],attrs:{description:"没有数据..."}}),a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.list.length,expression:"list.length"}],staticClass:"list"},[a("van-list",{attrs:{finished:t.finished,"finished-text":t.finishText,error:t.error,"error-text":"请求失败，点击重新加载"},on:{load:t.onLoad,"update:error":function(e){t.error=e}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e){return a("div",{key:e.videoId,staticClass:"item",on:{click:function(i){return t.toVideoDetail(e.videoId)}}},[a("div",{staticClass:"left"},[a("div",{staticClass:"video-img",style:{backgroundImage:"url("+e.imagAddr+")"}},[a("div",{staticClass:"bg"}),a("div",{staticClass:"arrow"},[a("img",{attrs:{src:i("7e1b")}}),a("div",{staticClass:"pl-4"},[t._v(t._s(e.videoDuration))])])])]),a("div",{staticClass:"right"},[a("div",{staticClass:"f16 video-title"},[t._v(t._s(e.videoName))]),a("div",{staticClass:"video-tip"},[t._v("观看人数"+t._s(e.count))])])])})),0)],1)])],1)},n=[];i("b0c0");function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function r(t){if(Array.isArray(t))return s(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}i("fb6a"),i("25f0");function c(t,e){if(t){if("string"===typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return r(t)||o(t)||c(t)||l()}var u,h=i("ade3"),f=(i("91d5"),i("f0ca")),g=(i("ab71"),i("58e6")),v=(i("ac1e"),i("543e")),m=(i("4056"),i("44bf")),p=(i("c194"),i("7744")),b=(i("2994"),i("2bdd")),y=(i("5852"),i("d961")),x=(i("66b9"),i("b650")),k=(i("8cfb"),i("093a")),w={components:(u={},Object(h["a"])(u,x["a"].name,x["a"]),Object(h["a"])(u,y["a"].name,y["a"]),Object(h["a"])(u,b["a"].name,b["a"]),Object(h["a"])(u,p["a"].name,p["a"]),Object(h["a"])(u,m["a"].name,m["a"]),Object(h["a"])(u,v["a"].name,v["a"]),Object(h["a"])(u,g["a"].name,g["a"]),Object(h["a"])(u,f["a"].name,f["a"]),u),computed:{finishText:function(){return this.list.length>10?"没有数据了...":""}},data:function(){return{list:[],loading:!1,finished:!1,refreshing:!1,error:!1,queryParams:{pageNum:1,pageSize:10,oldManType:null,takeCareType:null,status:0,videoName:null,beginTime:null,endTime:null,tags:null,videoId:null}}},created:function(){this.queryParams.videoId=this.$route.query.id,this.onLoad()},methods:{onLoad:function(){var t=this;Object(k["a"])(this.queryParams).then((function(e){var i;200===e.code&&e.rows.length?((i=t.list).push.apply(i,d(e.rows)),t.total=parseInt(e.total),t.queryParams.pageNum+=1,t.loading=!1,t.list.length>=t.total-1&&(t.finished=!0)):t.finished=!0})).catch((function(){t.loading=!1,t.error=!0}))},handlequery:function(){this.queryParams.pageNum=1,this.list=[],this.loading=!0,this.finished=!1,this.onLoad()},onRefresh:function(){this.queryParams.pageNum=1,this.list=[],this.finished=!1,this.loading=!0,this.onLoad()},toVideoDetail:function(t){this.$router.push({path:"/video/"+t})}}},j=w,S=i("2877"),T=Object(S["a"])(j,a,n,!1,null,null,null),A=T.exports;e["default"]=A},a630:function(t,e,i){var a=i("23e7"),n=i("4df4"),s=i("1c7e"),r=!s((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:r},{from:n})},a8d4:function(t,e,i){"use strict";i("caad"),i("fb6a"),i("b64b"),i("d3b7"),i("2532"),i("e7e5");var a=i("d399"),n=i("53ca"),s=i("bc3a"),r=i.n(s),o={401:"认证失败，无法访问系统资源",403:"当前操作没有权限",404:"访问资源不存在",default:"系统未知错误，请反馈给管理员"},c=r.a.create({baseURL:"http://101.201.211.8:8080/wx",timeout:5e3});c.interceptors.request.use((function(t){if(t.headers["Content-Type"]="application/json;charset=UTF-8",t.headers.timestamp=Math.floor((new Date).getTime()/1e3),"get"===t.method&&t.params){for(var e=t.url+"?",i=0,a=Object.keys(t.params);i<a.length;i++){var s=a[i],r=t.params[s],o=encodeURIComponent(s)+"=";if(null!==r&&"undefined"!==typeof r&&""!==r)if("object"===Object(n["a"])(r))for(var c=0,l=Object.keys(r);c<l.length;c++){var d=l[c],u=s+"["+d+"]",h=encodeURIComponent(u)+"=";e+=h+encodeURIComponent(r[d])+"&"}else e+=o+encodeURIComponent(r)+"&"}e=e.slice(0,-1),t.params={},t.url=e}return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){var e=t.data.code||200,i=o[e]||t.data.msg||o.default;return 500==e?(Object(a["a"])({type:"fail",message:i,duration:300}),Promise.reject(new Error(i))):200!==e?(Object(a["a"])({type:"fail",message:i,duration:300}),Promise.reject("error")):t.data}),(function(t){var e=t.message;return"Network Error"===e?e="后端接口连接异常":e.includes("timeout")?e="系统接口请求超时":e.includes("Request failed with status code")&&(e="系统接口"+e.substr(e.length-3)+"异常"),Object(a["a"])({type:"fail",message:e,duration:300}),Promise.reject(t)}));e["a"]=c},ab71:function(t,e,i){"use strict";i("68ef"),i("e3b3"),i("6ab3")},ac1e:function(t,e,i){"use strict";i("68ef"),i("e3b3")},c0c2:function(t,e,i){},c194:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04")},cc89:function(t,e,i){"use strict";i.r(e);var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video-list"},[a("div",{staticClass:"list-title"},[a("div",[a("span",{staticClass:"f14 c-111"},[t._v(t._s(t.name)+" "+t._s(t.name&&t.type?"/ ":""))]),a("span",{staticClass:"f20 bold"},[t._v(t._s(t.type))])]),a("form",{attrs:{action:"1"}},[a("van-search",{attrs:{placeholder:"按内容搜索"},on:{search:t.handlequery},model:{value:t.queryParams.videoName,callback:function(e){t.$set(t.queryParams,"videoName",e)},expression:"queryParams.videoName"}})],1)]),a("div",{staticClass:"gap"}),a("van-empty",{directives:[{name:"show",rawName:"v-show",value:!t.list.length,expression:"!list.length"}],attrs:{description:"没有数据..."}}),a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.list.length,expression:"list.length"}],staticClass:"list"},[a("van-list",{attrs:{finished:t.finished,"finished-text":t.finishText,error:t.error,"error-text":"请求失败，点击重新加载"},on:{load:t.onLoad,"update:error":function(e){t.error=e}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e){return a("div",{key:e.videoId,staticClass:"item",on:{click:function(i){return t.toVideoDetail(e.videoId)}}},[a("div",{staticClass:"left"},[a("div",{staticClass:"video-img",style:{backgroundImage:"url("+e.imagAddr+")"}},[a("div",{staticClass:"bg"}),a("div",{staticClass:"arrow"},[a("img",{attrs:{src:i("7e1b")}}),a("div",{staticClass:"pl-4"},[t._v(t._s(t._f("formatTime")(e.videoDuration)))])])])]),a("div",{staticClass:"right"},[a("div",{staticClass:"f16 video-title"},[t._v(t._s(e.videoName))]),a("div",{staticClass:"video-tip"},[t._v("观看人数"+t._s(e.count))])])])})),0)],1)])],1)},s=[],r=(i("99af"),i("c975"),i("b0c0"),i("ade3")),o=(i("91d5"),i("f0ca")),c=(i("ab71"),i("58e6")),l=(i("ac1e"),i("543e")),d=(i("4056"),i("44bf")),u=(i("c194"),i("7744")),h=(i("2994"),i("2bdd")),f=(i("5852"),i("d961")),g=(i("66b9"),i("b650")),v=(i("d286"),i("093a")),m=["高龄老人","失智老人","失能老人","半失能老人","自理老人"],p=["生活照料","身体照护","慢病管理","康复照护","心理健康"],b={components:(a={},Object(r["a"])(a,g["a"].name,g["a"]),Object(r["a"])(a,f["a"].name,f["a"]),Object(r["a"])(a,h["a"].name,h["a"]),Object(r["a"])(a,u["a"].name,u["a"]),Object(r["a"])(a,d["a"].name,d["a"]),Object(r["a"])(a,l["a"].name,l["a"]),Object(r["a"])(a,c["a"].name,c["a"]),Object(r["a"])(a,o["a"].name,o["a"]),a),computed:{finishText:function(){return this.list.length>8?"没有数据了...":""}},data:function(){return{name:"",type:"",list:[],loading:!1,finished:!1,refreshing:!1,error:!1,queryParams:{pageNum:1,pageSize:10,oldManType:null,takeCareType:null,status:0,videoName:null,beginTime:null,endTime:null,tags:null}}},created:function(){var t=this.$route.query.type;-1!==m.indexOf(t)&&(this.name="老人状态",this.type=t,this.queryParams.oldManType=t),-1!==p.indexOf(t)&&(this.name="养老照护",this.type=t,this.queryParams.takeCareType=t),this.onLoad()},methods:{onLoad:function(){var t=this;Object(v["c"])(this.queryParams).then((function(e){200===e.code&&e.rows.length&&(t.list=t.list.concat(e.rows),t.total=parseInt(e.total),t.queryParams.pageNum+=1,t.loading=!1,t.list.length>=t.total&&(t.finished=!0))})).catch((function(){t.loading=!1,t.error=!0}))},handlequery:function(){this.queryParams.pageNum=1,this.list=[],this.loading=!0,this.finished=!1,this.onLoad()},onRefresh:function(){this.queryParams.pageNum=1,this.list=[],this.finished=!1,this.loading=!0,this.onLoad()},toVideoDetail:function(t){this.$router.push({path:"/video/"+t})}}},y=b,x=i("2877"),k=Object(x["a"])(y,n,s,!1,null,null,null),w=k.exports;e["default"]=w},d286:function(t,e,i){},d961:function(t,e,i){"use strict";var a=i("2638"),n=i.n(a),s=i("c31d"),r=i("d282"),o=i("ba31"),c=i("1325"),l=i("565f"),d=Object(r["a"])("search"),u=d[0],h=d[1],f=d[2];function g(t,e,i,a){function r(){if(i.label||e.label)return t("div",{class:h("label")},[i.label?i.label():e.label])}function d(){if(e.showAction)return t("div",{class:h("action"),attrs:{role:"button",tabindex:"0"},on:{click:n}},[i.action?i.action():e.actionText||f("cancel")]);function n(){i.action||(Object(o["a"])(a,"input",""),Object(o["a"])(a,"cancel"))}}var u={attrs:a.data.attrs,on:Object(s["a"])({},a.listeners,{keypress:function(t){13===t.keyCode&&(Object(c["c"])(t),Object(o["a"])(a,"search",e.value)),Object(o["a"])(a,"keypress",t)}})},g=Object(o["b"])(a);return g.attrs=void 0,t("div",n()([{class:h({"show-action":e.showAction}),style:{background:e.background}},g]),[null==i.left?void 0:i.left(),t("div",{class:h("content",e.shape)},[r(),t(l["a"],n()([{attrs:{type:"search",border:!1,value:e.value,leftIcon:e.leftIcon,rightIcon:e.rightIcon,clearable:e.clearable,clearTrigger:e.clearTrigger},scopedSlots:{"left-icon":i["left-icon"],"right-icon":i["right-icon"]}},u]))]),d()])}g.props={value:String,label:String,rightIcon:String,actionText:String,background:String,showAction:Boolean,clearTrigger:String,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},leftIcon:{type:String,default:"search"}},e["a"]=u(g)},f032:function(t,e,i){}}]);
(function(t){function e(e){for(var r,a,u=e[0],c=e[1],l=e[2],o=0,f=[];o<u.length;o++)a=u[o],i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);v&&v(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i={app:0},s=[];function u(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c0fd8":"b5f9cb5f","chunk-c0e04426":"46ddd0ed"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-c0e04426":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0c0fd8":"31d6cfe0","chunk-c0e04426":"d182605c"}[t]+".css",i=c.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var l=s[u],o=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(o===r||o===i))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],o=l.getAttribute("data-href");if(o===r||o===i)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],v.parentNode.removeChild(v),n(s)},v.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(v)}).then(function(){a[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=s);var l,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=u(t),l=function(e){o.onerror=o.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}i[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:o})},12e4);o.onerror=o.onload=l,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var v=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01da":function(t,e,n){},"025a":function(t,e,n){t.exports=n.p+"img/headshot.d24cf016.jpg"},"03db":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"command-ls"}},[t._l(t.contents,function(e){return n("div",{staticClass:"item"},[e.dir?n("div",[n("span",{staticClass:"blue"},[t._v(" "+t._s(e.name)+" ")])]):n("div",{staticStyle:{display:"inline"}},[t._v(t._s(e.name)+" ")])])}),n("br")],2)},a=[],i=n("9ca1"),s={name:"ls",props:{input:String,path:String},computed:{contents:function(){var t=Object(i["c"])(this.path);return t}}},u=s,c=(n("a4be"),n("2877")),l=Object(c["a"])(u,r,a,!1,null,"8bf56f00",null);e["default"]=l.exports},"1de7":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  TODO: Writeup an overview of vulnerability management\n")])},a=[],i=n("2877"),s={},u=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports},"1ff8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home-readme"}},[n("div",{staticClass:"seperated"},[t._v("\n    Hi, I'm "),n("span",{staticClass:"blue bold"},[t._v("Garret Kern")]),t._v(". "),n("br"),t._v("I study\n    "),n("span",{staticClass:"magneta"},[t._v("computer science")]),t._v(" as a junior at\n    "),n("span",{staticClass:"magneta"},[t._v("Brown University")]),t._v(".\n  ")]),n("div",{staticClass:"seperated"},[t._v("\n    I have experience in\n    "),n("span",{staticClass:"blue"},[t._v(" full-stack engineering ")]),t._v("\n    and "),n("span",{staticClass:"blue"},[t._v("infosecurity")]),t._v(".\n  ")]),n("div",{staticClass:"seperated"},[t._v("\n    This is my personal website, emulating a\n    "),n("span",{staticClass:"green"},[t._v("*nix")]),t._v(" style terminal. "),n("br"),t._v("\n    I upload security tutorials and project writeups.\n  ")]),n("div",{staticClass:"seperated"},[t._v("\n    Type commands and hit enter to see the output. "),n("br"),t._v("\n    Type "),n("span",{staticClass:"magneta"},[t._v("help")]),t._v(" to learn how to navigate. "),n("br"),t._v("\n    Type "),n("span",{staticClass:"magneta"},[t._v("treeview")]),t._v(" to access traditional view\n  ")])])}],i={name:"Garret"},s=i,u=n("2877"),c=Object(u["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports},"2b33":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  TODO: embed a map with pins of where I've hiked and a few stories\n")])},a=[],i=n("2877"),s={},u=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports},"34f9":function(t,e,n){var r={"./about/backpacking-bp.vue":"2b33","./about/headshot-aboutme.vue":"f8a5","./engineering/projects-projects.vue":"370e","./old-old.vue":"6e44","./readme-garret.vue":"1ff8","./resume-resume.vue":"b960","./security/hackthebox/luke-luke.vue":"d00f","./security/owasp_top_10-owasp.vue":"3680","./security/readme-security.vue":"3b6b","./security/vulnerability_management-vuln.vue":"1de7"};function a(t){var e=i(t);return n(e)}function i(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="34f9"},3680:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  TODO: Writeup the top 10 owasp vulnerabilities\n")])},a=[],i=n("2877"),s={},u=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports},"370e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("TODO: My "),n("span",{staticClass:"blue"},[t._v("project")]),t._v(" writeups "),n("br")])}],i=n("2877"),s={},u=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports},"3b6b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  TODO: My "),n("span",{staticClass:"blue"},[t._v("Security")]),t._v(" writeups "),n("br")])}],i=n("2877"),s={},u=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports},4920:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"command-help"}},[n("span",{staticClass:"magneta"},[t._v(t._s(t.input))]),t._v(": invalid command\n")])},a=[],i={name:"invalid",props:{input:String}},s=i,u=n("2877"),c=Object(u["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}}),n("keep-alive",[n("router-view")],1)],1)},i=[],s=n("1157"),u=n.n(s),c=(n("28a5"),n("ac6a"),n("34f9"));function l(t){for(var e=0;e<t.length;e++){var n=t[e].split("/"),r=n[n.length-1].split(".")[0].split("-")[1];o(t[e],r)}}function o(t,e){var n=c(t);r["a"].component(e,n.default||n)}l(c.keys());n("a481");var f=n("d20e");f.keys().forEach(function(t){var e=f(t),n=t.replace("./","").split(".")[0];r["a"].component(n,e.default||e)});var v={},d=v,p=(n("5c0b"),n("2877")),m=Object(p["a"])(d,a,i,!1,null,null,null),h=m.exports,_=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Terminal")],1)},g=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"terminal"}},t._l(t.command_history,function(e){return n("div",[t._v("\n    "+t._s(e.path)+" $\n    "),n("span",{staticClass:"white"},[t._v(t._s(e.input))]),e.active?n("span",{staticClass:"blink"},[t._v(" ")]):t._e(),e.active?n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"item.input"}],attrs:{type:"text",id:"input",autofocus:""},domProps:{value:e.input},on:{input:function(n){n.target.composing||t.$set(e,"input",n.target.value)}}}):t._e(),n("br"),e.command?n("div",{staticClass:"output white seperated"},[n(e.command,{tag:"component",attrs:{input:e.input,path:e.path},on:{"change-directory":t.change_directory}})],1):t._e()])}),0)},O=[],w=n("9ca1"),C=["ls","help","cd","cat","treeview","clear"],j={name:"terminal",data:function(){return{command_history:[{path:"~/Home/Garret",input:"",command:"",active:!0}]}},methods:{focus:function(t){u()("#input").focus()},process:function(t){if(this.focus(),13===t.keyCode&&this.command(),9===t.keyCode){t.preventDefault&&t.preventDefault();var e=this.current_command(),n=e.input.split(" "),r=n.slice(0,n.length-1),a=n[n.length-1],i=Object(w["d"])(e.path,a);i&&(r.push(i),e.input=r.join(" "))}},current_command:function(){return this.command_history[this.command_history.length-1]},change_directory:function(t){this.current_command().path=t},command:function(){var t=this.current_command(),e=t.input.split(" ")[0];""!=e&&-1===C.indexOf(e)&&(e="invalid"),"clear"===e&&(this.command_history=[]);var n=t.path;t.command=e,t.active=!1,this.command_history.push({path:n,input:"",command:"",active:!0})}},created:function(){u()(document).keydown(this.process),u()(document).click(this.focus),this.command_history[this.command_history.length-1].input="cat readme",this.command()},updated:function(){window.scrollTo(0,u()("#app")[0].scrollHeight)}},k=j,x=(n("7233"),Object(p["a"])(k,y,O,!1,null,"208c153e",null)),E=x.exports,$={name:"home",components:{Terminal:E}},T=$,S=Object(p["a"])(T,b,g,!1,null,null,null),D=S.exports;r["a"].use(_["a"]);var N=new _["a"]({routes:[{path:"/",name:"home",component:D},{path:"/resume",name:"resume",component:function(){return n.e("chunk-c0e04426").then(n.bind(null,"1ba2"))}},{path:"*",name:"404",component:function(){return n.e("chunk-2d0c0fd8").then(n.bind(null,"43ad"))}}]}),L=n("2f62");r["a"].use(L["a"]);var P=new L["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:N,store:P,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5c8d":function(t,e,n){},"5e27":function(t,e,n){},"6e44":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Click\n  "),n("a",{attrs:{href:"https://garretkern.github.io/personal-website-old/"}},[n("span",{staticClass:"green underline"},[t._v("here")])]),t._v("\n  to view my old website. "),n("br"),t._v("\n  Last updated "),n("span",{staticClass:"blue"},[t._v(" July 12th")])])}],i=n("2877"),s={},u=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports},7233:function(t,e,n){"use strict";var r=n("7eea"),a=n.n(r);a.a},7236:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"command-cat"}},[t.file?n(t.file,{tag:"component"}):n("p",[n("span",{staticClass:"magneta"},[t._v(t._s(t.input))]),t._v(": No such file\n  ")])],1)},a=[],i=(n("28a5"),n("9ca1")),s={name:"cat",props:{input:String,path:String},computed:{file:function(){var t=this.input.split(" ")[1],e=this.path+"/"+t;if(!Object(i["a"])(e,!1))return"";var n=Object(i["b"])(e);return n}}},u=s,c=n("2877"),l=Object(c["a"])(u,r,a,!1,null,null,null);e["default"]=l.exports},"792f":function(t,e,n){"use strict";var r=n("01da"),a=n.n(r);a.a},"7ba0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"command-help"}},[n("span",{staticClass:"magneta"},[t._v("help")]),t._v(": List of available commands\n  "),n("br"),n("span",{staticClass:"magneta"},[t._v("ls")]),t._v(": List the contents of current directory\n  "),n("br"),n("span",{staticClass:"magneta"},[t._v("cd <directory>")]),t._v(": Move into a new directory\n  directory ("),n("span",{staticClass:"magneta"},[t._v("cd ..")]),t._v(" to move up)"),n("br"),n("span",{staticClass:"magneta"},[t._v("cat <file>")]),t._v(": Display contents of a file\n  "),n("br"),n("span",{staticClass:"magneta"},[t._v("clear")]),t._v(": Clear history\n\n  "),n("br"),n("span",{staticClass:"magneta"},[t._v("treeview")]),t._v(": Display entire file structure\n  "),n("br"),t._v("\n  Includes "),n("span",{staticClass:"blue"},[t._v("tab completion")]),n("br")])}],i=n("2877"),s={},u=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports},"7eea":function(t,e,n){},"9ca1":function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return c}),n.d(e,"d",function(){return u});n("7f7f"),n("a481"),n("28a5"),n("ac6a");var r=n("34f9"),a=i(r.keys());function i(t){for(var e=[],n=function(){var n=t[r].replace(".","~/Home/Garret").split("/"),a=n[n.length-1].split(".")[0].split("-"),i=a[1],s=a[0],u=n.slice(0,n.length-1).join("/"),c=u+"/"+s,l={name:s,path:c,dir:!1,component:i};if(e.push(l),0===e.filter(function(t){return t.dir&&t.path===u}).length){var o=u.split("/")[u.split("/").length-1];e.push({name:o,path:u,dir:!0})}},r=0;r<t.length;r++)n();return e}function s(t){a.filter(function(e){return e.dir&&e.path===t})[0];var e=a.filter(function(e){return e.path===t+"/"+e.name});return e}function u(t,e){var n=a.filter(function(n){return n.path===t+"/"+n.name&&n.name.substring(0,e.length)===e});return 1===n.length?n[0].name:""}function c(t){var e=a.filter(function(e){return e.path===t})[0];return e.component}function l(t,e){return a.filter(function(n){return n.path===t&&n.dir===e}).length>0}},a4be:function(t,e,n){"use strict";var r=n("5c8d"),a=n.n(r);a.a},b78b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  TODO: Treeview will display file structure and incude links to each page\n")])},a=[],i=n("2877"),s={},u=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports},b960:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home-readme"}},[t._v("\n  Click\n  "),n("router-link",{attrs:{to:"/resume"}},[n("span",{staticClass:"green underline"},[t._v("here")])]),t._v("\n  to view my resume. "),n("br"),t._v("\n  Last updated "),n("span",{staticClass:"blue"},[t._v(" July 12th")])],1)},a=[],i=n("2877"),s={},u=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports},ca85:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"command-cd"}},[t.exists?n("div"):n("div",[n("span",{staticClass:"magneta"},[t._v(t._s(t.input))]),t._v(": No such directory\n  ")])])},a=[],i=(n("28a5"),n("9ca1")),s={name:"cd",props:{input:String,path:String},created:function(){var t=this.input.split(" ")[1],e=this.path+"/"+t;if(".."===t){console.log(t);var n=this.path.split("/");e=n.slice(0,n.length-1).join("/")}var r=Object(i["a"])(e,!0);this.exists=r,r&&this.$emit("change-directory",e)}},u=s,c=n("2877"),l=Object(c["a"])(u,r,a,!1,null,null,null);e["default"]=l.exports},d00f:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  TODO: A Writeup for the luke hackthebox.eu\n")])},a=[],i=n("2877"),s={},u=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=u.exports},d20e:function(t,e,n){var r={"./cat.vue":"7236","./cd.vue":"ca85","./help.vue":"7ba0","./invalid.vue":"4920","./ls.vue":"03db","./treeview.vue":"b78b"};function a(t){var e=i(t);return n(e)}function i(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="d20e"},f8a5:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{alt:"Resume",src:n("025a"),id:"headshot"}})])}],i=(n("792f"),n("2877")),s={},u=Object(i["a"])(s,r,a,!1,null,"3667ed5b",null);e["default"]=u.exports}});
//# sourceMappingURL=app.3a8256ff.js.map
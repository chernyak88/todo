(function(){"use strict";var t={1268:function(t,e,n){var i=n(5130),o=n(6768);function r(t,e,n,i,r,l){const s=(0,o.g2)("ToDo");return(0,o.uX)(),(0,o.Wv)(s)}n(8992),n(4520);var l=n(4232);const s={style:{"margin-bottom":"20px"}},u={class:"list"},c={class:"title"},a=["onClick"],d=["onUpdate:modelValue"];function f(t,e,n,r,f,p){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("div",s,[(0,o.bo)((0,o.Lk)("input",{style:{"margin-right":"20px"},type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>f.input=t)},null,512),[[i.Jo,f.input]]),(0,o.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>p.addItem&&p.addItem(...t))},"Добавить")]),(0,o.Lk)("div",null,[(0,o.Lk)("button",{style:{"margin-right":"20px"},onClick:e[2]||(e[2]=t=>f.filter=null)},"Все"),(0,o.Lk)("button",{style:{"margin-right":"20px"},onClick:e[3]||(e[3]=t=>f.filter=!0)}," Выполнены "),(0,o.Lk)("button",{onClick:e[4]||(e[4]=t=>f.filter=!1)},"Невыполнены")]),(0,o.Lk)("ul",u,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(p.filteredItems,(t=>((0,o.uX)(),(0,o.CE)("li",{class:"item",key:t.id},[(0,o.Lk)("div",c,(0,l.v_)(t.title),1),(0,o.Lk)("div",null,(0,l.v_)(t.description),1),(0,o.Lk)("button",{onClick:e=>p.removeItem(t.id)},"Удалить",8,a),(0,o.bo)((0,o.Lk)("input",{type:"checkbox","onUpdate:modelValue":e=>t.done=e,onChange:e[5]||(e[5]=(...t)=>p.changeStateItem&&p.changeStateItem(...t))},null,40,d),[[i.lH,t.done]])])))),128))])])}n(4114);var p={name:"ToDo",data(){return{input:"",items:[{id:1,title:"title1",description:"description1",done:!1},{id:2,title:"title2",description:"description2",done:!1},{id:3,title:"title3",description:"description3",done:!1}],filter:null}},mounted(){const t=localStorage.getItem("items");t&&(this.items=JSON.parse(t))},computed:{filteredItems(){return null!==this.filter?this.items.filter((t=>t.done===this.filter)):this.items}},methods:{addItem(){this.items.push({id:this.items.length+1,title:this.input,description:`description${this.items.length+1}`,done:!1}),this.input="",localStorage.setItem("items",JSON.stringify(this.items))},removeItem(t){this.items.splice(this.items.findIndex((e=>e.id===t)),1),localStorage.setItem("items",JSON.stringify(this.items))},changeStateItem(){localStorage.setItem("items",JSON.stringify(this.items))}}},m=n(1241);const h=(0,m.A)(p,[["render",f],["__scopeId","data-v-260d7d68"]]);var v=h,g={name:"App",components:{ToDo:v}};const k=(0,m.A)(g,[["render",r]]);var b=k;(0,i.Ef)(b).mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var l=1/0;for(a=0;a<t.length;a++){i=t[a][0],o=t[a][1],r=t[a][2];for(var s=!0,u=0;u<i.length;u++)(!1&r||l>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(s=!1,r<l&&(l=r));if(s){t.splice(a--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var a=t.length;a>0&&t[a-1][2]>r;a--)t[a]=t[a-1];t[a]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,l=i[0],s=i[1],u=i[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var a=u(n)}for(e&&e(i);c<l.length;c++)r=l[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(a)},i=self["webpackChunkto_do"]=self["webpackChunkto_do"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(1268)}));i=n.O(i)})();
//# sourceMappingURL=app.413dbd62.js.map
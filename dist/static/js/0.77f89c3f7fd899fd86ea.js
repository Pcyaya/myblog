webpackJsonp([0],{LqM4:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={data:function(){return{activeIndex2:"1",msg:"播放",item:{},selected:{},list:[{src:"https://music.163.com/song/media/outer/url?id=546279760.mp3",name:"目不转睛",singer:"王以太"},{src:"https://music.163.com/song/media/outer/url?id=557581476.mp3",name:"去年夏天",singer:"王大毛"},{src:"https://music.163.com/song/media/outer/url?id=531295576.mp3",name:"最美的期待",singer:"周笔畅"}]}},mounted:function(){this.item=this.list[0]},methods:{handleSelect:function(t,i){console.log(t,i)},toBack:function(){},play:function(){var t=document.getElementById("autio");t.paused?(t.play(),this.msg="暂停"):(t.pause(),this.msg="继续")},playAuto:function(){document.getElementById("autio").play()},pre:function(){for(var t=this,i=0;i<this.list.length;i++)this.item.name===this.list[i].name&&(0===i?this.item=this.list[this.list.length-1]:(i--,this.item=this.list[i],console.log(this.item)),setTimeout(function(){t.playAuto()},0))},next:function(){for(var t=this,i=0;i<this.list.length;i++)this.item.name===this.list[i].name&&(i===this.list.length-1?this.item=this.list[0]:(i++,this.item=this.list[i],console.log(this.item)),setTimeout(function(){t.playAuto()},0))}}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"home"},[e("div",{ref:"audio"},[e("audio",{attrs:{id:"autio",src:t.item.src}})]),t._v(" "),e("div",[t._v(t._s(t.item.name)+"—"+t._s(t.item.singer))]),t._v(" "),e("button",{on:{click:t.pre}},[t._v("上一首")]),e("button",{on:{click:t.play}},[t._v(t._s(t.msg))]),e("button",{on:{click:t.next}},[t._v("下一首")])])},staticRenderFns:[]};var o=e("VU/8")(s,n,!1,function(t){e("nVUb")},null,null);i.default=o.exports},nVUb:function(t,i){}});
//# sourceMappingURL=0.77f89c3f7fd899fd86ea.js.map
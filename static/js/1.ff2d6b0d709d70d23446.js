webpackJsonp([1],{139:function(e,i,t){function A(e){t(149)}var o=t(1)(t(142),t(152),A,null,null);e.exports=o.exports},142:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var A=t(3),o=t.n(A),n=t(2);i.default={computed:o()({},t.i(n.a)(["storiesHeight","favoriteStories"])),created:function(){this.storiesHeight.length||this.$router.push("/")},activated:function(){this.setFavoriteShow(!0)},deactivated:function(){this.setFavoriteShow(!1)},methods:o()({showSidebar:function(){this.setSidebarShow(!0)},selectItem:function(e){var i=this;this.$router.push("../../detail/"+e.id),this.setStories(e),setTimeout(function(){i.setDetailShow(!0)},500)}},t.i(n.b)({setDetailShow:"SET_DETAIL_SHOW",setStories:"SET_STORIES_STATE",setSidebarShow:"SET_SIDEBAR_SHOW",setFavoriteShow:"SET_FAVORITE_SHOW"}))}},146:function(e,i,t){i=e.exports=t(136)(!0),i.push([e.i,".fadeout-enter-active,.fadeout-leave-active{-webkit-transition:all .6s;transition:all .6s}.fadeout-leave-to,.leave{opacity:1}.favorite-wrapper{position:absolute;z-index:100;top:0;left:0;right:0;bottom:0;background:#fff}.favorite-wrapper .favorite-header{display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;z-index:100;top:0;width:100%;height:1.333rem;background:#00a2ea;color:#fff}.favorite-wrapper .favorite-header .icon{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center}.favorite-wrapper .favorite-header .icon .icon-font{font-size:20px;line-height:1.413rem}.favorite-wrapper .favorite-header .title{-webkit-box-flex:6;-ms-flex:6;flex:6;margin:0;padding-left:.267rem;font-size:18px;line-height:1.413rem}.favorite-wrapper .favorite-main{position:relative;top:1.333rem;width:100%;margin:0;padding:0;background:#fff}.favorite-wrapper .favorite-main ul{width:100%;padding:0;margin:0}.favorite-wrapper .favorite-main .list{padding:10px;margin:10px;min-height:1rem;width:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;position:relative;border-radius:5px;border:1px solid #eaeaea;border-bottom:1px solid #d0d0d0;background:#fff}.favorite-wrapper .favorite-main .list .text-box{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-right:20px}.favorite-wrapper .favorite-main .list .text-box .text{margin-top:5px;font-size:16px;font-weight:300;color:#2c3e50;line-height:1.4}.favorite-wrapper .favorite-main .list .img-box{width:2rem;height:1.867rem;position:relative}.favorite-wrapper .favorite-main .list .img-box .img{width:2rem;height:1.867rem}.favorite-wrapper .favorite-main .list .img-box .tip{color:#fff;position:absolute;bottom:0;right:0;font-size:.267rem;padding:.053rem .107rem;background:rgba(0,0,0,.5)}.favorite-wrapper .favorite-main .list .img-box .tip .icon-font{font-size:.267rem;color:#fff;margin-right:.08rem}","",{version:3,sources:["C:/Users/jie/Desktop/zhihu-daily/src/base/favorite/favorite.vue"],names:[],mappings:"AACA,4CAEE,2BAA6B,AAC7B,kBAAqB,CACtB,AACD,yBAEE,SAAW,CACZ,AACD,kBACE,kBAAmB,AACnB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,eAAiB,CAClB,AACD,mCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,WAAY,AACZ,gBAAiB,AACjB,mBAAoB,AACpB,UAAY,CACb,AACD,yCACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,iBAAmB,CACpB,AACD,oDACE,eAAgB,AAChB,oBAAsB,CACvB,AACD,0CACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,SAAU,AACV,qBAAuB,AACvB,eAAgB,AAChB,oBAAsB,CACvB,AACD,iCACE,kBAAmB,AACnB,aAAc,AACd,WAAY,AACZ,SAAU,AACV,UAAW,AACX,eAAiB,CAClB,AACD,oCACE,WAAY,AACZ,UAAW,AACX,QAAU,CACX,AACD,uCACE,aAAc,AACd,YAAa,AACb,gBAAiB,AACjB,WAAY,AACZ,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AAC/B,6BAA8B,AAC1B,uBAAwB,AACpB,mBAAoB,AAC5B,kBAAmB,AACnB,kBAAmB,AACnB,yBAA0B,AAC1B,gCAAiC,AACjC,eAAiB,CAClB,AACD,iDACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,iBAAmB,CACpB,AACD,uDACE,eAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,cAAe,AACf,eAAiB,CAClB,AACD,gDACE,WAAY,AACZ,gBAAiB,AACjB,iBAAmB,CACpB,AACD,qDACE,WAAY,AACZ,eAAiB,CAClB,AACD,qDACE,WAAY,AACZ,kBAAmB,AACnB,SAAU,AACV,QAAS,AACT,kBAAoB,AACpB,wBAA2B,AAC3B,yBAA4B,CAC7B,AACD,gEACE,kBAAoB,AACpB,WAAY,AACZ,mBAAsB,CACvB",file:"favorite.vue",sourcesContent:["\n.fadeout-enter-active,\n.fadeout-leave-active {\n  -webkit-transition: all 0.6s;\n  transition: all 0.6s;\n}\n.fadeout-leave-to,\n.leave {\n  opacity: 1;\n}\n.favorite-wrapper {\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n}\n.favorite-wrapper .favorite-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  width: 100%;\n  height: 1.333rem;\n  background: #00a2ea;\n  color: #fff;\n}\n.favorite-wrapper .favorite-header .icon {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n.favorite-wrapper .favorite-header .icon .icon-font {\n  font-size: 20px;\n  line-height: 1.413rem;\n}\n.favorite-wrapper .favorite-header .title {\n  -webkit-box-flex: 6;\n      -ms-flex: 6;\n          flex: 6;\n  margin: 0;\n  padding-left: 0.267rem;\n  font-size: 18px;\n  line-height: 1.413rem;\n}\n.favorite-wrapper .favorite-main {\n  position: relative;\n  top: 1.333rem;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: #fff;\n}\n.favorite-wrapper .favorite-main ul {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n.favorite-wrapper .favorite-main .list {\n  padding: 10px;\n  margin: 10px;\n  min-height: 1rem;\n  width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  position: relative;\n  border-radius: 5px;\n  border: 1px solid #eaeaea;\n  border-bottom: 1px solid #d0d0d0;\n  background: #fff;\n}\n.favorite-wrapper .favorite-main .list .text-box {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-right: 20px;\n}\n.favorite-wrapper .favorite-main .list .text-box .text {\n  margin-top: 5px;\n  font-size: 16px;\n  font-weight: 300;\n  color: #2c3e50;\n  line-height: 1.4;\n}\n.favorite-wrapper .favorite-main .list .img-box {\n  width: 2rem;\n  height: 1.867rem;\n  position: relative;\n}\n.favorite-wrapper .favorite-main .list .img-box .img {\n  width: 2rem;\n  height: 1.867rem;\n}\n.favorite-wrapper .favorite-main .list .img-box .tip {\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-size: 0.267rem;\n  padding: 0.053rem 0.107rem;\n  background: rgba(0,0,0,0.5);\n}\n.favorite-wrapper .favorite-main .list .img-box .tip .icon-font {\n  font-size: 0.267rem;\n  color: #fff;\n  margin-right: 0.08rem;\n}"],sourceRoot:""}])},149:function(e,i,t){var A=t(146);"string"==typeof A&&(A=[[e.i,A,""]]),A.locals&&(e.exports=A.locals);t(137)("afe927f6",A,!0)},152:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("transition",{attrs:{name:"fadeout"}},[t("div",{staticClass:"favorite-wrapper"},[t("div",{staticClass:"favorite-header"},[t("div",{staticClass:"icon",on:{click:e.showSidebar}},[t("i",{staticClass:"icon-font"},[e._v("")])]),e._v(" "),t("h1",{staticClass:"title"},[e._v(e._s(e.favoriteStories.length)+" 条收藏")])]),e._v(" "),t("div",{staticClass:"favorite-main"},[t("ul",e._l(e.favoriteStories,function(i){return t("li",{staticClass:"list",on:{click:function(t){e.selectItem(i)}}},[t("div",{staticClass:"text-box"},[t("p",{staticClass:"text"},[e._v(e._s(i.title))])]),e._v(" "),i.images&&i.images.length?t("div",{staticClass:"img-box"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.images[0],expression:"item.images[0]"}],staticClass:"img"}),e._v(" "),i.multipic?t("p",{staticClass:"tip"},[t("i",{staticClass:"icon-font"},[e._v("")]),e._v("多图")]):e._e()]):e._e()])}))])])])},staticRenderFns:[]}}});
//# sourceMappingURL=1.ff2d6b0d709d70d23446.js.map
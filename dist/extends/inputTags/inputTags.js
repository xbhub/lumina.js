"use strict";layui.define(["jquery","layer"],function(n){function t(n){var e=this;e.config=i.extend({},e.config,o.config,n),e.render()}var i=layui.jquery,o=(layui.layer,{config:{},set:function(n){var e=this;return e.config=i.extend({},e.config,n),e},on:function(n,e){return layui.onevent.call(this,c,n,e)}}),c="inputTags";t.prototype.config={close:!1,theme:"",content:[],aldaBtn:!1},t.prototype.init=function(){var t="",n=this.config,e=document.createElement("span"),o=i(e).text("获取全部数据").addClass("albtn");n.aldaBtn&&i("body").append(o),i.each(n.content,function(n,e){t+="<span><em>"+e+'</em><button type="button" class="close">×</button></span>'}),n.elem.before(t),this.events()},t.prototype.render=function(){var n=this.config;n.elem=i(n.elem),this.enter()},t.prototype.enter=function(){var t=this,o="",i=t.config;i.elem.focus(),i.elem.keypress(function(n){if("13"==(n.keyCode?n.keyCode:n.which)){var e=i.elem.val().trim();if(!e)return!1;-1==i.content.indexOf(e)&&(i.content.push(e),t.render(),o="<span><em>"+e+'</em><button type="button" class="close">×</button></span>',i.elem.before(o)),i.done&&"function"==typeof i.done&&i.done(e),i.elem.val("")}})},t.prototype.events=function(){var t=this.config;i(".albtn").on("click",function(){}),i("#tags").on("click",".close",function(){var n=i(this).parent("span").remove(),e=i(n).find("em").text();t.content.splice(i.inArray(e,t.content),1)})},o.render=function(n){var e=new t(n);return e.init(),function(){return{config:this.config}}.call(e)},n("inputTags",o)}).link(layui.cache.base+"extends/inputTags/inputTags.css");
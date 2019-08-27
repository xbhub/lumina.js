"use strict";layui.define(["laytpl","form"],function(e){function i(){var a=this,e=a.config,t=e.id||a.index;return i.that[t]=a,{config:i.config[t]=e,reload:function(e){a.reload.call(a,e)},getData:function(){return a.getData.call(a)}}}function a(e){return['<div class="layui-transfer-box" data-index="'+(e=e||{}).index+'">','<div class="layui-transfer-header">','<input type="checkbox" name="'+e.checkAllName+'" lay-filter="layTransferCheckbox" lay-type="all" lay-skin="primary" title="{{ d.data.title['+e.index+"] || 'list"+(e.index+1)+"' }}\">","</div>","{{# if(d.data.showSearch){ }}",'<div class="layui-transfer-search">','<i class="layui-icon layui-icon-search"></i>','<input type="input" class="layui-input" placeholder="关键词搜索">',"</div>","{{# } }}",'<ul class="layui-transfer-data"></ul>',"</div>"].join("")}function t(e){var a=this;a.index=++c.index,a.config=u.extend({},a.config,c.config,e),a.render()}var u=layui.$,n=layui.laytpl,l=layui.form,r="transfer",c={config:{},index:layui[r]?layui[r].index+1e4:0,set:function(e){var a=this;return a.config=u.extend({},a.config,e),a},on:function(e,a){return layui.onevent.call(this,r,e,a)}},h="layui-hide",f="layui-btn-disabled",o="layui-none",d="layui-transfer-box",y="layui-transfer-header",s="layui-transfer-search",p="layui-transfer-data",v=['<div class="layui-transfer layui-form layui-border-box" lay-filter="LAY-transfer-{{ d.index }}">',a({index:0,checkAllName:"layTransferLeftCheckAll"}),'<div class="layui-transfer-active">','<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="0">','<i class="layui-icon layui-icon-next"></i>',"</button>",'<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="1">','<i class="layui-icon layui-icon-prev"></i>',"</button>","</div>",a({index:1,checkAllName:"layTransferRightCheckAll"}),"</div>"].join("");t.prototype.config={title:["列表一","列表二"],width:200,height:360,data:[],value:[],showSearch:!1,id:"",text:{none:"无数据",searchNone:"无匹配数据"}},t.prototype.reload=function(e){var t=this;layui.each(e,function(e,a){a.constructor===Array&&delete t.config[e]}),t.config=u.extend(!0,{},t.config,e),t.render()},t.prototype.render=function(){var e=this,a=e.config,t=e.elem=u(n(v).render({data:a,index:e.index})),i=a.elem=u(a.elem);i[0]&&(a.data=a.data||[],a.value=a.value||[],e.key=a.id||e.index,i.html(e.elem),e.layBox=e.elem.find("."+d),e.layHeader=e.elem.find("."+y),e.laySearch=e.elem.find("."+s),e.layData=t.find("."+p),e.layBtn=t.find(".layui-transfer-active .layui-btn"),e.layBox.css({width:a.width,height:a.height}),e.layData.css({height:a.height-e.layHeader.outerHeight()-e.laySearch.outerHeight()-2}),e.renderData(),e.events())},t.prototype.renderData=function(){var e=this,i=(e.config,[{checkName:"layTransferLeftCheck",views:[]},{checkName:"layTransferRightCheck",views:[]}]);e.parseData(function(e){var a=e.selected?1:0,t=["<li>",'<input type="checkbox" name="'+i[a].checkName+'" lay-skin="primary" lay-filter="layTransferCheckbox" title="'+e.title+'"'+(e.disabled?" disabled":"")+(e.checked?" checked":"")+' value="'+e.value+'">',"</li>"].join("");i[a].views.push(t),delete e.selected}),e.layData.eq(0).html(i[0].views.join("")),e.layData.eq(1).html(i[1].views.join("")),e.renderCheckBtn()},t.prototype.renderForm=function(e){l.render(e,"LAY-transfer-"+this.index)},t.prototype.renderCheckBtn=function(o){var d=this,s=d.config;o=o||{},d.layBox.each(function(e){var a=u(this),t=a.find("."+p),i=a.find("."+y).find('input[type="checkbox"]'),n=t.find('input[type="checkbox"]'),l=0,r=!1;if(n.each(function(){var e=u(this).data("hide");(this.checked||this.disabled||e)&&l++,this.checked&&!e&&(r=!0)}),i.prop("checked",r&&l===n.length),d.layBtn.eq(e)[r?"removeClass":"addClass"](f),!o.stopNone){var c=t.children("li:not(."+h+")").length;d.noneView(t,c?"":s.text.none)}}),d.renderForm("checkbox")},t.prototype.noneView=function(e,a){var t=u('<p class="layui-none">'+(a||"")+"</p>");e.find("."+o)[0]&&e.find("."+o).remove(),a.replace(/\s/g,"")&&e.append(t)},t.prototype.setValue=function(){var e=this.config,a=[];return this.layBox.eq(1).find("."+p+' input[type="checkbox"]').each(function(){u(this).data("hide")||a.push(this.value)}),e.value=a,this},t.prototype.parseData=function(a){var i=this.config,n=[];return layui.each(i.data,function(e,t){t=("function"==typeof i.parseData?i.parseData(t):t)||t,n.push(t=u.extend({},t)),layui.each(i.value,function(e,a){a==t.value&&(t.selected=!0)}),a&&a(t)}),i.data=n,this},t.prototype.getData=function(e){var a=this.config,i=[];return layui.each(e||a.value,function(e,t){layui.each(a.data,function(e,a){delete a.selected,t==a.value&&i.push(a)})}),i},t.prototype.events=function(){var l=this,r=l.config;l.elem.on("click",'input[lay-filter="layTransferCheckbox"]+',function(){var e=u(this).prev(),a=e[0].checked,t=e.parents("."+d).eq(0).find("."+p);e[0].disabled||("all"===e.attr("lay-type")&&t.find('input[type="checkbox"]').each(function(){this.disabled||(this.checked=a)}),l.renderCheckBtn({stopNone:!0}))}),l.layBtn.on("click",function(){var e=u(this),a=e.data("index"),i=l.layBox.eq(a),n=[];if(!e.hasClass(f)){l.layBox.eq(a).each(function(e){u(this).find("."+p).children("li").each(function(){var e=u(this),a=e.find('input[type="checkbox"]'),t=a.data("hide");a[0].checked&&!t&&(a[0].checked=!1,i.siblings("."+d).find("."+p).append(e.clone()),e.remove(),n.push(a[0].value)),l.setValue()})}),l.renderCheckBtn();var t=i.siblings("."+d).find("."+s+" input");""===t.val()||t.trigger("keyup"),r.onchange&&r.onchange(l.getData(n),a)}}),l.laySearch.find("input").on("keyup",function(){var i=this.value,e=u(this).parents("."+s).eq(0).siblings("."+p),a=e.children("li");a.each(function(){var e=u(this),a=e.find('input[type="checkbox"]'),t=-1!==a[0].title.indexOf(i);e[t?"removeClass":"addClass"](h),a.data("hide",!t)}),l.renderCheckBtn();var t=a.length===e.children("li."+h).length;l.noneView(e,t?r.text.searchNone:"")})},i.that={},i.config={},c.reload=function(e,a){var t=i.that[e];return t.reload(a),i.call(t)},c.getData=function(e){return i.that[e].getData()},c.render=function(e){var a=new t(e);return i.call(a)},e(r,c)});
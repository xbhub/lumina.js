"use strict";!function(){function e(e,n){this.container=e,this.datas=n,this.initInterface()}e.prototype={render:function(e,n){0<(e=e||[]).length&&this.setAlready(e),0<(n=n||[]).length&&this.setChecked(n)},initInterface:function(){var e=this;$(e.container).append($("<div/>",{class:"place-div"}).append($("<div/>",{}).append($("<div/>",{class:"checkbtn"}).append($("<label/>",{}).append($("<input/>",{type:"checkbox",change:function(){var e=$(this).is(":checked"),n=$(".place").find("input[type=checkbox]");$(".ratio").html(""),n.prop("checked",e)}})).append(" 全国")).append($("<a/>",{class:"clearCheck",text:"清空",click:function(){e.destroy()}}))).append($("<div/>",{class:"place clearfloat"}).append(e.getSmallPlace()))))},getSmallPlace:function(){var n=this;return $("<div/>",{class:"smallplace clearfloat"}).append($.map(n.datas,function(e){return $("<div/>",{class:"place-tooltips"}).append($("<label/>",{}).append($("<input/>",{id:e.id,type:"checkbox",class:"province",change:function(){var e=$(this),n=e.parent().next(".citys").find("input"),t=e.parents(".place-tooltips");e.prop("checked")?(n.prop("checked",!0),t.find(".ratio").html("("+n.length+"/"+n.length+")")):(n.prop("checked",!1),t.find(".ratio").html(""))}})).append($("<span/>",{class:"province_name",text:e.name})).append(function(){if(e.city)return $("<span/>",{class:"ratio"})})).append(function(){if(e.children)return $("<div/>",{class:"citys"}).append($("<i/>",{class:"jt"}).append($("<i/>",{}))).append(n.getSmallCitys(e.children))})}))},getSmallCitys:function(e){return $("<div/>",{class:"row-div clearfloat"}).append($.map(e,function(e){return $("<p/>",{}).append($("<label/>",{}).append($("<input/>",{id:e.id,type:"checkbox",name:"city[]",class:"city",change:function(){var e=$(this).parents(".citys"),n=$(this).parents(".place-tooltips"),t=e.find("input:checked").length,i=n.find(".province"),n=n.find(".ratio");0<t?(i.prop("checked",!0),n.html("("+t+"/"+e.find("input").length+")")):0===t&&(i.prop("checked",!1),n.html(""))}})).append($("<span/>",{text:e.name})))}))},getCheckedIds:function(){var t=[];return $('input[type=checkbox][name="city[]"]:checked').each(function(e,n){t.push(n.id)}),t},getCheckedTree:function(){var c=this,l=[];return $("input.province:checked").each(function(e,n){var t=$(this),i=t.parent().next().find("input.city:checked"),a=[];_.find(c.datas,{id:parseInt($(n).attr("id"))}).children.length!==i.length&&i.each(function(e,n){a.push({id:n.id,name:$(this).next().text()})}),l.push({id:n.id,name:t.next().text(),city:a})}),l},getCheckedContent:function(){var t,e=this.getCheckedTree(),n=this.getCheckedIds();return{content:373===n.length?"全国":(t="",e.forEach(function(e){var n;t+=e.name,0<e.city.length&&(n="",e.city.forEach(function(e){n+=e.name+"、"}),t+=' (<span class="am-link-muted">'+n.substring(0,n.length-1)+"</span>)"),t+="、"}),t.substring(0,t.length-1)),ids:n}},setChecked:function(e){var t=$(".place-div");$.each(e,function(e,n){t.find("#"+n).trigger("click")})},setAlready:function(e){var t=$(".place-div");$.each(e,function(e,n){n=t.find("#"+n).parent().parent();(0<n.siblings().length?n:n.closest(".place-tooltips")).remove()})},destroy:function(){var e=$(".place-div");e.find("input[type=checkbox]").prop("checked",!1),e.find(".ratio").html("")}},window.RegionalChoice=e}(window),layui.define(["layer"],function(e){var a=layui.layer,t={elem:"",done:void 0};e("delivery",{init:function(){var e=$("<div class='regional-choice' style='display:none' />");$("body").append(e),this.RegionalChoice=new RegionalChoice(e,t.data),this.dtable=$(t.elem).parents("table"),this.handleEvents(),t.value.length},handleEvents:function(){var i=this,e=i.dtable;e.on("click",t.elem,function(){var t="";$(i.tableElement).find("input[type=hidden]").each(function(e,n){t+=$(n).val()+","});var e=0<t.length?t.substring(0,t.length-1).split(","):[];if(373===e.length)return a.msg("已经选择了所有区域~"),!1;i.RegionalChoice.render(e),i.showRegionalModal(function(){var e=i.RegionalChoice.getCheckedContent();0<e.ids.length&&i.appendRulesTr(e.content,e.ids)})}),e.on("click",".delete",function(){var n=$(this);a.confirm("确定要删除吗？",function(e){n.parents("tr").remove(),a.close(e)})}),e.on("click",".edit",function(){var n=e.find(".selected-content"),t=e.find("input[type=hidden]");i.RegionalChoice.render([],t.val().split(",")),i.showRegionalModal(function(){var e=i.RegionalChoice.getCheckedContent();0<e.ids.length&&(n.html(e.content),t.val(e.ids))})})},showRegionalModal:function(n){var e=this;a.open({type:1,shade:!1,title:"选择可配送区域",btn:["确定","取消"],area:["820px","520px"],content:$(".regional-choice"),yes:function(e){n&&n(),a.close(e)},end:function(){e.RegionalChoice.destroy()}})},appendRulesTr:function(e,n){var t=this.dtable.find("tbody>tr").length,t=$('<tr><td class="am-text-left">   <p class="selected-content am-margin-bottom-xs">   '+e+'   </p>   <p class="operation am-margin-bottom-xs">       <a class="edit" href="javascript:;">编辑</a>       <a class="delete" href="javascript:;">删除</a>   </p>   <input type="hidden" name="rule['+t+'][region]" value="'+n+'"></td><td>   <input type="number" name="rule['+t+'][first]" value="" required class="layui-input"></td><td>   <input type="number" name="rule['+t+'][first_fee]" value="" required class="layui-input"></td><td>   <input type="number" name="rule['+t+'][additional]" value="" class="layui-input"></td><td>   <input type="number" name="rule['+t+'][additional_fee]" value="" class="layui-input"></td></tr>');$(this.dtable).find("tbody").append(t)},render:function(e,n){t=$.extend(!0,{},t,e),this.init()}})});
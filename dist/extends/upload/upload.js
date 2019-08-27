"use strict";layui.extend({webuploader:"extends/upload/webuploader/webuploader"}).define(["webuploader","admin"],function(e){function i(e){var i=this;i.uploadObj={},i.uploadFiles=[],i.config=F.extend({},i.config,s.config,e),i.render()}var F=layui.jquery,T=layui.layer,l=layui.admin,C=layui.webuploader,a="upload",s={config:{},set:function(e){var i=this;return i.config=F.extend({},i.config,e),i},on:function(e,i){return layui.onevent.call(this,a,e,i)},open:function(){}};i.prototype.config={fileNumLimit:9,imgVal:".img_val"},i.prototype.render=function(){var s,n=this.config,t=this,o=0,e=['<div class="p-4"><input type="text" placeholder="请输入网络图片地址" id="push_img" class="border w-full h-12 px-4"></div>'].join("");t.$el=F(this),s=T.tab({area:["660px","535px"],skin:"m-upload-dialog layui-layer-tab",tab:[{title:"图片上传",content:'<div id="uploader">                <div class="queueList">                    <div id="dndArea" class="placeholder">                        <div id="filePicker"></div>                        <p>或将照片拖到这里，单次最多可选300张</p>                    </div>                </div>                <div class="statusBar" style="display:none;">                    <div class="progress">                        <span class="text">0%</span>                        <span class="percentage"></span>                    </div><div class="info"></div>                </div>            </div>'},{title:"网络图片",content:e},{title:"相册",content:"内容3"}],btn:["确认使用","取消"],yes:function(i,e){if(0==o)t.done(s,i);else if(1==o){var a=F("#push_img").val();l.request.post(n.url,{type:"fetch",url:a},function(e){t.uploadFiles.push(e.data.url),t.done(s,i)})}else 2==o&&t.done(s,i)},btn2:function(e,i){return!0},success:function(i,e){i.find(".layui-layer-title").children().on("mousedown",function(e){o=i.find(".layui-this").index()}),t.uploadFiles=[],t.uploadObj=C.create({pick:{id:"#filePicker",label:"点击选择图片"},auto:!0,dnd:"#dndArea",paste:"#uploader",swf:layui.cache.base+"/extends/upload/webuploader/Uploader.swf",server:n.url,headers:F.extend({"X-CSRF-TOKEN":F('meta[name="csrf-token"]').attr("content"),"X-Requested-With":"XMLHttpRequest"},n.headers),fileNumLimit:9,fileSizeLimit:209715200,fileSingleSizeLimit:52428800,accept:{title:"Images",extensions:"gif,jpg,jpeg,bmp,png",mimeTypes:"image/gif,image/jpg,image/jpeg,image/bmp,image/png"}}),t.events(),t.uploadObj.refresh()}})},i.prototype.events=function(e){function a(){var e,a=0,s=0,i=m.children();F.each(w,function(e,i){s+=i[0],a+=i[0]*i[1]}),e=s?a/s:0,i.eq(0).text(Math.round(100*e)+"%"),i.eq(1).css("width",Math.round(100*e)+"%"),n()}function n(){var e,i="";"ready"===x?i="选中"+g+"张图片，共"+C.formatSize(h)+"。":"confirm"===x?(e=d.getStats()).uploadFailNum&&(i="已成功上传"+e.successNum+"张照片至XX相册，"+e.uploadFailNum+'张照片上传失败，<a class="retry" href="#">重新上传</a>失败图片或<a class="ignore" href="#">忽略</a>'):(e=d.getStats(),i="共"+g+"张（"+C.formatSize(h)+"），已上传"+e.successNum+"张",e.uploadFailNum&&(i+="，失败"+e.uploadFailNum+"张")),c.html(i)}function s(e){var i;if(e!==x){switch(p.removeClass("state-"+x),p.addClass("state-"+e),x=e){case"pedding":f.removeClass("element-invisible"),u.hide(),r.addClass("element-invisible"),d.refresh();break;case"ready":f.addClass("element-invisible"),u.show(),r.removeClass("element-invisible"),d.refresh();break;case"uploading":m.show(),p.text("暂停上传");break;case"paused":m.show(),p.text("继续上传");break;case"confirm":if(m.hide(),p.text("开始上传").addClass("disabled"),(i=d.getStats()).successNum&&!i.uploadFailNum)return void s("finish");break;case"finish":(i=d.getStats()).successNum||(x="done",location.reload())}n()}}var i,t,o=this,d=o.uploadObj,l=(o.config,F("#uploader")),u=F('<ul class="filelist"></ul>').appendTo(l.find(".queueList")),r=l.find(".statusBar"),c=r.find(".info"),p=l.find(".uploadBtn"),f=l.find(".placeholder"),m=r.find(".progress").hide(),g=0,h=0,v=window.devicePixelRatio||1,b=110*v,y=110*v,x="pedding",w={},k=(i=document.createElement("p").style,t="transition"in i||"WebkitTransition"in i||"MozTransition"in i||"msTransition"in i||"OTransition"in i,i=null,t);d.onUploadProgress=function(e,i){F("#"+e.id).find(".progress span").css("width",100*i+"%"),w[e.id][1]=i,a()},d.onFileQueued=function(e){g++,h+=e.size,1===g&&(f.addClass("element-invisible"),r.show()),function(a){function s(e){switch(e){case"exceed_size":i="文件大小超出";break;case"interrupt":i="上传暂停";break;default:i="上传失败，请重试"}r.text(i).appendTo(n)}var n=F('<li id="'+a.id+'"><p class="title">'+a.name+'</p><p class="imgWrap"></p><p class="progress"><span></span></p></li>'),i="",t=F('<div class="file-panel"><span class="cancel">删除</span><span class="rotateRight">向右旋转</span><span class="rotateLeft">向左旋转</span></div>').appendTo(n),o=n.find("p.progress span"),l=n.find("p.imgWrap"),r=F('<p class="error"></p>');"invalid"===a.getStatus()?s(a.statusText):(l.text("预览中"),d.makeThumb(a,function(e,i){if(e)l.text("不能预览");else{var a=F('<img src="'+i+'">');l.empty().append(a)}},b,y),w[a.id]=[a.size,0],a.rotation=0),a.on("statuschange",function(e,i){"progress"===i?o.hide().width(0):"queued"===i&&(n.off("mouseenter mouseleave"),t.remove()),"error"===e||"invalid"===e?(s(a.statusText),w[a.id][1]=1):"interrupt"===e?s("interrupt"):"queued"===e?w[a.id][1]=0:"progress"===e?(r.remove(),o.css("display","block")):"complete"===e&&n.append('<span class="success"></span>'),n.removeClass("state-"+i).addClass("state-"+e)}),n.on("mouseenter",function(){t.stop().animate({height:30})}),n.on("mouseleave",function(){t.stop().animate({height:0})}),t.on("click","span",function(){var e;switch(F(this).index()){case 0:return void d.removeFile(a);case 1:a.rotation+=90;break;case 2:a.rotation-=90}k?(e="rotate("+a.rotation+"deg)",l.css({"-webkit-transform":e,"-mos-transform":e,"-o-transform":e,transform:e})):l.css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation="+~~(a.rotation/90%4+4)%4+")")}),n.appendTo(u)}(e),s("ready"),a()},d.onFileDequeued=function(e){g--,h-=e.size,g||s("pedding"),function(e){var i=F("#"+e.id);delete w[e.id],a(),i.off().find(".file-panel").off().end().remove()}(e),a()},d.onUploadSuccess=function(e,i){0==i.errcode&&o.uploadFiles.push(i.data.url)},d.on("all",function(e){switch(e){case"uploadFinished":s("confirm");break;case"startUpload":s("uploading");break;case"stopUpload":s("paused")}}),d.onError=function(e){T.msg("Eroor: "+e)},p.on("click",function(){if(F(this).hasClass("disabled"))return!1;"ready"===x?d.upload():"paused"===x?d.upload():"uploading"===x&&d.stop()}),c.on("click",".retry",function(){d.retry()}),c.on("click",".ignore",function(){alert("todo")}),p.addClass("state-"+x),a()},i.prototype.done=function(e,i){var a=this;a.uploadFiles.length<1?T.msg("请选择图片",{icon:5}):(T.close(e),a.$el.next(a.config.imgVal).val(a.uploadFiles[0]),"function"==typeof a.config.done&&a.config.done(a.uploadFiles,a.$el))},s.render=function(e){return new i(e)},e(a,s)});
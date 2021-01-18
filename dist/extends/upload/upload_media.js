"use strict";layui.extend({webuploader:"extends/upload/webuploader/webuploader"}).define(["webuploader","admin","util"],function(e){function i(e){var i=this;i.uploadObj={},i.uploadFiles=[],i.config=F.extend({},i.config,s.config,e),i.render()}var F=layui.jquery,T=layui.layer,C=(layui.admin,layui.util,layui.webuploader),a="uploadmedia",s={config:{},set:function(e){var i=this;return i.config=F.extend({},i.config,e),i},on:function(e,i){return layui.onevent.call(this,a,e,i)},open:function(){}};i.prototype.config={fileNumLimit:9,imgVal:".img_val"},i.prototype.render=function(){var s,a=this.config,n=this,t=0,e=['<div class="p-4"><input type="text" placeholder="请输入网络多媒体地址" id="push_img" class="border w-full h-12 px-4"></div>'].join("");n.$el=F(this),s=T.tab({area:["660px","535px"],skin:"m-upload-dialog layui-layer-tab",tab:[{title:"多媒体上传",content:'<div id="uploader">                <div class="queueList">                    <div id="dndArea" class="placeholder">                        <div id="filePicker"></div>                    </div>                </div>                <div class="statusBar" style="display:none;">                    <div class="progress">                        <span class="text">0%</span>                        <span class="percentage"></span>                    </div><div class="info"></div>                </div>            </div>'},{title:"网络地址",content:e}],btn:["确认使用","取消"],yes:function(e,i){var a;0==t?n.done(s,e):1==t&&(a=F("#push_img").val(),n.uploadFiles.push(a),n.done(s,e))},btn2:function(e,i){return!0},success:function(i,e){i.find(".layui-layer-title").children().on("mousedown",function(e){t=i.find(".layui-this").index()}),n.uploadFiles=[],n.uploadObj=new C.Uploader({pick:{id:"#filePicker",label:"点击选择多媒体"},auto:!0,dnd:"#dndArea",paste:"#uploader",offset:"60px",chunked:!1,swf:layui.cache.base+"/extends/upload/webuploader/Uploader.swf",server:a.url,headers:F.extend({"X-CSRF-TOKEN":F('meta[name="csrf-token"]').attr("content"),"X-Requested-With":"XMLHttpRequest"},a.headers),fileNumLimit:1,fileSizeLimit:524288e3,fileSingleSizeLimit:524288e3,accept:{title:"Media",extensions:"mp3,mp4",mimeTypes:"video/mp4,audio/mpeg"}}),n.events(),n.uploadObj.refresh()}})},i.prototype.events=function(e){function a(){var e,a=0,s=0,i=m.children();F.each(k,function(e,i){s+=i[0],a+=i[0]*i[1]}),e=s?a/s:0,i.eq(0).text(Math.round(100*e)+"%"),i.eq(1).css("width",Math.round(100*e)+"%"),n()}function n(){var e,i="";"ready"===x?i="选中"+h+"个多媒体，共"+C.formatSize(v)+"。":"confirm"===x?(e=r.getStats()).uploadFailNum&&(i="已成功上传"+e.successNum+"个文件至XX相册，"+e.uploadFailNum+'个文件上传失败，<a class="retry" href="#">重新上传</a>失败多媒体或<a class="ignore" href="#">忽略</a>'):(e=r.getStats(),i="共"+h+"个（"+C.formatSize(v)+"），已上传"+e.successNum+"个",e.uploadFailNum&&(i+="，失败"+e.uploadFailNum+"个")),c.html(i)}function s(e){var i;if(e!==x){switch(p.removeClass("state-"+x),p.addClass("state-"+e),x=e){case"pedding":f.removeClass("element-invisible"),u.hide(),l.addClass("element-invisible"),r.refresh();break;case"ready":f.addClass("element-invisible"),u.show(),l.removeClass("element-invisible"),r.refresh();break;case"uploading":m.show(),p.text("暂停上传");break;case"paused":m.show(),p.text("继续上传");break;case"confirm":if(m.hide(),p.text("开始上传").addClass("disabled"),(i=r.getStats()).successNum&&!i.uploadFailNum)return void s("finish");break;case"finish":(i=r.getStats()).successNum||(x="done")}n()}}function t(a){function s(e){switch(e){case"exceed_size":i="文件大小超出";break;case"interrupt":i="上传暂停";break;default:i="上传失败，请重试"}l.text(i).appendTo(n)}var n=F('<li id="'+a.id+'"><p class="title">'+a.name+'</p><p class="imgWrap"></p><p class="progress"><span></span></p></li>'),i="",t=F('<div class="file-panel"><span class="cancel">删除</span><span class="rotateRight">向右旋转</span><span class="rotateLeft">向左旋转</span></div>').appendTo(n),o=n.find("p.progress span"),d=n.find("p.imgWrap"),l=F('<p class="error"></p>');"invalid"===a.getStatus()?s(a.statusText):(d.text("预览中"),r.makeThumb(a,function(e,i){e?d.text("不能预览"):(i=F('<img src="'+i+'">'),d.empty().append(i))},b,y),k[a.id]=[a.size,0],a.rotation=0),a.on("statuschange",function(e,i){"progress"===i?o.hide().width(0):"queued"===i&&(n.off("mouseenter mouseleave"),t.remove()),"error"===e||"invalid"===e?(s(a.statusText),k[a.id][1]=1):"interrupt"===e?s("interrupt"):"queued"===e?k[a.id][1]=0:"progress"===e?(l.remove(),o.css("display","block")):"complete"===e&&n.append('<span class="success"></span>'),n.removeClass("state-"+i).addClass("state-"+e)}),n.on("mouseenter",function(){t.stop().animate({height:30})}),n.on("mouseleave",function(){t.stop().animate({height:0})}),t.on("click","span",function(){var e;switch(F(this).index()){case 0:return void r.removeFile(a);case 1:a.rotation+=90;break;case 2:a.rotation-=90}w?(e="rotate("+a.rotation+"deg)",d.css({"-webkit-transform":e,"-mos-transform":e,"-o-transform":e,transform:e})):d.css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation="+~~(a.rotation/90%4+4)%4+")")}),n.appendTo(u)}var o=this,r=o.uploadObj,d=o.config,i=F("#uploader"),u=F('<ul class="filelist"></ul>').appendTo(i.find(".queueList")),l=i.find(".statusBar"),c=l.find(".info"),p=i.find(".uploadBtn"),f=i.find(".placeholder"),m=l.find(".progress").hide(),h=0,v=0,g=window.devicePixelRatio||1,b=110*g,y=110*g,x="pedding",k={},w=(g="transition"in(i=document.createElement("p").style)||"WebkitTransition"in i||"MozTransition"in i||"msTransition"in i||"OTransition"in i,i=null,g);r.onUploadProgress=function(e,i){F("#"+e.id).find(".progress span").css("width",100*i+"%"),k[e.id][1]=i,a()},r.onFileQueued=function(i){h++,v+=i.size,1===h&&(f.addClass("element-invisible"),l.show()),r.md5File(i.source).then(function(e){layui.util.request.post(d.url,{type:"checkexist",md5:e},function(e){e.data.url?(F("#dndArea").hide(),r.skipFile(i),o.uploadFiles.push(e.data.url),s("success"),a()):r.upload()})}),t(i),s("ready"),a()},r.onFileDequeued=function(e){var i;h--,v-=e.size,h||s("pedding"),e=F("#"+(i=e).id),delete k[i.id],a(),e.off().find(".file-panel").off().end().remove(),a()},r.onUploadSuccess=function(e,i){0==i.errcode&&o.uploadFiles.push(i.data.url)},r.on("all",function(e){switch(e){case"uploadFinished":s("confirm");break;case"startUpload":s("uploading");break;case"stopUpload":s("paused")}}),r.onError=function(e){T.msg("Eroor: "+e)},p.on("click",function(){return!F(this).hasClass("disabled")&&void("ready"===x||"paused"===x?r.upload():"uploading"===x&&r.stop())}),c.on("click",".retry",function(){r.retry()}),c.on("click",".ignore",function(){alert("todo")}),p.addClass("state-"+x),a()},i.prototype.done=function(e,i){var a=this;a.uploadFiles.length<1?T.msg("请选择多媒体",{icon:5}):(T.close(e),a.$el.next(a.config.imgVal).val(a.uploadFiles[0]),"function"==typeof a.config.done&&a.config.done(a.uploadFiles,a.$el))},s.render=function(e){return new i(e)},e(a,s)});
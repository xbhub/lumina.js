"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(u){function t(e){var t=this;t.index=++p.index,t.config=y.extend({},t.config,c.config,e),document.body?t.creat():setTimeout(function(){t.creat()},30)}function d(e){return i.skin?" "+i.skin+" "+i.skin+"-"+e:""}u.layui&&layui.define;var y,f,e,c={getPath:(e=document.currentScript?document.currentScript.src:function(){for(var e,t=document.scripts,i=t.length-1,n=i;0<n;n--)if("interactive"===t[n].readyState){e=t[n].src;break}return e||t[i].src}()).substring(0,e.lastIndexOf("/")+1),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"],getStyle:function(e,t){e=e.currentStyle||u.getComputedStyle(e,null);return e[e.getPropertyValue?"getPropertyValue":"getAttribute"](t)},link:function(e,t,i){var n,a;p.path&&(n=document.getElementsByTagName("head")[0],a=document.createElement("link"),"string"==typeof t&&(i=t),i="layuicss-"+(i||e).replace(/\.|\//g,""),a.rel="stylesheet",a.href=p.path+e,a.id=i,document.getElementById(i)||n.appendChild(a))}},p={v:"3.1.1",ie:(e=navigator.userAgent.toLowerCase(),!!(u.ActiveXObject||"ActiveXObject"in u)&&((e.match(/msie\s(\d+)/)||[])[1]||"11")),index:u.layer&&u.layer.v?1e5:0,path:c.getPath,config:function(e,t){return e=e||{},p.cache=c.config=y.extend({},c.config,e),p.path=c.config.path||p.path,"string"==typeof e.extend&&(e.extend=[e.extend]),c.config.path&&p.ready(),e.extend,this},ready:function(e){return this},alert:function(e,t,i){var n="function"==typeof t;return n&&(i=t),p.open(y.extend({content:e,yes:i},n?{}:t))},confirm:function(e,t,i,n){var a="function"==typeof t;return a&&(n=i,i=t),p.open(y.extend({content:e,btn:c.btn,yes:i,btn2:n},a?{}:t))},msg:function(e,t,i){var n="function"==typeof t,a=c.config.skin,o=(a?a+" "+a+"-msg":"")||"layui-layer-msg",a=h.anim.length-1;return n&&(i=t),p.open(y.extend({content:e,time:3e3,shade:!1,skin:o,title:!1,closeBtn:!1,btn:!1,resize:!1,end:i},n&&!c.config.skin?{skin:o+" layui-layer-hui",anim:a}:(-1!==(t=t||{}).icon&&(void 0!==t.icon||c.config.skin)||(t.skin=o+" "+(t.skin||"layui-layer-hui")),t)))},load:function(e,t){return p.open(y.extend({type:3,icon:e||1,resize:!1,shade:.01},t))},tips:function(e,t,i){return p.open(y.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},i))}};t.pt=t.prototype;var h=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];h.anim=["layer-anim-00","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],t.pt.config={type:0,shade:.3,fixed:!0,move:h[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},t.pt.vessel=function(e,t){var i=this.index,n=this.config,a=n.zIndex+i,o="object"===_typeof(n.title),r=n.maxmin&&(1===n.type||2===n.type),o=n.title?'<div class="layui-layer-title" style="'+(o?n.title[1]:"")+'">'+(o?n.title[0]:n.title)+"</div>":"";return n.zIndex=a,t([n.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+i+'" times="'+i+'" style="z-index:'+(a-1)+'; "></div>':"",'<div class="'+h[0]+" layui-layer-"+c.type[n.type]+(0!=n.type&&2!=n.type||n.shade?"":" layui-layer-border")+" "+(n.skin||"")+'" id="'+h[0]+i+'" type="'+c.type[n.type]+'" times="'+i+'" showtime="'+n.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+a+"; width:"+n.area[0]+";height:"+n.area[1]+(n.fixed?"":";position:absolute;")+'">'+(e&&2!=n.type?"":o)+'<div id="'+(n.id||"")+'" class="layui-layer-content'+(0==n.type&&-1!==n.icon?" layui-layer-padding":"")+(3==n.type?" layui-layer-loading"+n.icon:"")+'">'+(0==n.type&&-1!==n.icon?'<i class="layui-layer-ico layui-layer-ico'+n.icon+'"></i>':"")+((1!=n.type||!e)&&n.content||"")+'</div><span class="layui-layer-setwin">'+(r=r?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"",n.closeBtn&&(r+='<a class="layui-layer-ico '+h[7]+" "+h[7]+(n.title?n.closeBtn:4==n.type?"1":"2")+'" href="javascript:;"></a>'),r)+"</span>"+(n.btn?function(){var e="";"string"==typeof n.btn&&(n.btn=[n.btn]);for(var t=0,i=n.btn.length;t<i;t++)e+='<a class="'+h[6]+t+'">'+n.btn[t]+"</a>";return'<div class="'+h[6]+" layui-layer-btn-"+(n.btnAlign||"")+'">'+e+"</div>"}():"")+(n.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],o,y('<div class="layui-layer-move"></div>')),this},t.pt.creat=function(){var e,n=this,a=n.config,o=n.index,r="object"===_typeof(l=a.content),s=y("body");if(!a.id||!y("#"+a.id)[0]){switch("string"==typeof a.area&&(a.area="auto"===a.area?["",""]:[a.area,""]),a.shift&&(a.anim=a.shift),6==p.ie&&(a.fixed=!1),a.type){case 0:a.btn="btn"in a?a.btn:c.btn[0],p.closeAll("dialog");break;case 2:var l=a.content=r?a.content:[a.content||"","auto"];a.content='<iframe scrolling="'+(a.content[1]||"auto")+'" allowtransparency="true" id="'+h[4]+o+'" name="'+h[4]+o+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+a.content[0]+'"></iframe>';break;case 3:delete a.title,delete a.closeBtn,-1===a.icon&&a.icon,p.closeAll("loading");break;case 4:r||(a.content=[a.content,"body"]),a.follow=a.content[1],a.content=a.content[0]+'<i class="layui-layer-TipsG"></i>',delete a.title,a.tips="object"===_typeof(a.tips)?a.tips:[a.tips,!0],a.tipsMore||p.closeAll("tips")}n.vessel(r,function(e,t,i){s.append(e[0]),r?2==a.type||4==a.type?y("body").append(e[1]):l.parents("."+h[0])[0]||(l.data("display",l.css("display")).show().addClass("layui-layer-wrap").wrap(e[1]),y("#"+h[0]+o).find("."+h[5]).before(t)):s.append(e[1]),y(".layui-layer-move")[0]||s.append(c.moveElem=i),n.layero=y("#"+h[0]+o),a.scrollbar||h.html.css("overflow","hidden").attr("layer-full",o)}).auto(o),y("#layui-layer-shade"+n.index).css({"background-color":a.shade[1]||"#000",opacity:a.shade[0]||a.shade}),2==a.type&&6==p.ie&&n.layero.find("iframe").attr("src",l[0]),4==a.type?n.tips():n.offset(),a.fixed&&f.on("resize",function(){n.offset(),(/^\d+%$/.test(a.area[0])||/^\d+%$/.test(a.area[1]))&&n.auto(o),4==a.type&&n.tips()}),a.time<=0||setTimeout(function(){p.close(n.index)},a.time),n.move().callback(),h.anim[a.anim]&&(e="layer-anim "+h.anim[a.anim],n.layero.addClass(e).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){y(this).removeClass(e)})),a.isOutAnim&&n.layero.data("isOutAnim",!0)}},t.pt.auto=function(e){var t=this.config,i=y("#"+h[0]+e);""===t.area[0]&&0<t.maxWidth&&(p.ie&&p.ie<8&&t.btn&&i.width(i.innerWidth()),i.outerWidth()>t.maxWidth&&i.width(t.maxWidth));var n=[i.innerWidth(),i.innerHeight()],a=i.find(h[1]).outerHeight()||0,o=i.find("."+h[6]).outerHeight()||0,e=function(e){(e=i.find(e)).height(n[1]-a-o-2*(0|parseFloat(e.css("padding-top"))))};return 2===t.type?e("iframe"):""===t.area[1]?0<t.maxHeight&&i.outerHeight()>t.maxHeight?(n[1]=t.maxHeight,e("."+h[5])):t.fixed&&n[1]>=f.height()&&(n[1]=f.height(),e("."+h[5])):e("."+h[5]),this},t.pt.offset=function(){var e=this,t=e.config,i=e.layero,n=[i.outerWidth(),i.outerHeight()],a="object"===_typeof(t.offset);e.offsetTop=(f.height()-n[1])/2,e.offsetLeft=(f.width()-n[0])/2,a?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&("t"===t.offset?e.offsetTop=0:"r"===t.offset?e.offsetLeft=f.width()-n[0]:"b"===t.offset?e.offsetTop=f.height()-n[1]:"l"===t.offset?e.offsetLeft=0:"lt"===t.offset?(e.offsetTop=0,e.offsetLeft=0):"lb"===t.offset?(e.offsetTop=f.height()-n[1],e.offsetLeft=0):"rt"===t.offset?(e.offsetTop=0,e.offsetLeft=f.width()-n[0]):"rb"===t.offset?(e.offsetTop=f.height()-n[1],e.offsetLeft=f.width()-n[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?f.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?f.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=f.scrollTop(),e.offsetLeft+=f.scrollLeft()),i.attr("minLeft")&&(e.offsetTop=f.height()-(i.find(h[1]).outerHeight()||0),e.offsetLeft=i.css("left")),i.css({top:e.offsetTop,left:e.offsetLeft})},t.pt.tips=function(){var e=this.config,t=this.layero,i=[t.outerWidth(),t.outerHeight()],n=y(e.follow);n[0]||(n=y("body"));var a={width:n.outerWidth(),height:n.outerHeight(),top:n.offset().top,left:n.offset().left},o=t.find(".layui-layer-TipsG"),n=e.tips[0];e.tips[1]||o.remove(),a.autoLeft=function(){0<a.left+i[0]-f.width()?(a.tipLeft=a.left+a.width-i[0],o.css({right:12,left:"auto"})):a.tipLeft=a.left},a.where=[function(){a.autoLeft(),a.tipTop=a.top-i[1]-10,o.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",e.tips[1])},function(){a.tipLeft=a.left+a.width+10,a.tipTop=a.top,o.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",e.tips[1])},function(){a.autoLeft(),a.tipTop=a.top+a.height+10,o.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",e.tips[1])},function(){a.tipLeft=a.left-i[0]-10,a.tipTop=a.top,o.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",e.tips[1])}],a.where[n-1](),1===n?a.top-(f.scrollTop()+i[1]+16)<0&&a.where[2]():2===n?0<f.width()-(a.left+a.width+i[0]+16)||a.where[3]():3===n?0<a.top-f.scrollTop()+a.height+i[1]+16-f.height()&&a.where[0]():4===n&&0<i[0]+16-a.left&&a.where[1](),t.find("."+h[5]).css({"background-color":e.tips[1],"padding-right":e.closeBtn?"30px":""}),t.css({left:a.tipLeft-(e.fixed?f.scrollLeft():0),top:a.tipTop-(e.fixed?f.scrollTop():0)})},t.pt.move=function(){var o=this,r=o.config,e=y(document),s=o.layero,t=s.find(r.move),i=s.find(".layui-layer-resize"),l={};return r.move&&t.css("cursor","move"),t.on("mousedown",function(e){e.preventDefault(),r.move&&(l.moveStart=!0,l.offset=[e.clientX-parseFloat(s.css("left")),e.clientY-parseFloat(s.css("top"))],c.moveElem.css("cursor","move").show())}),i.on("mousedown",function(e){e.preventDefault(),l.resizeStart=!0,l.offset=[e.clientX,e.clientY],l.area=[s.outerWidth(),s.outerHeight()],c.moveElem.css("cursor","se-resize").show()}),e.on("mousemove",function(e){var t,i,n,a;l.moveStart&&(n=e.clientX-l.offset[0],a=e.clientY-l.offset[1],i="fixed"===s.css("position"),e.preventDefault(),l.stX=i?0:f.scrollLeft(),l.stY=i?0:f.scrollTop(),r.moveOut||(t=f.width()-s.outerWidth()+l.stX,i=f.height()-s.outerHeight()+l.stY,n<l.stX&&(n=l.stX),t<n&&(n=t),a<l.stY&&(a=l.stY),i<a&&(a=i)),s.css({left:n,top:a})),r.resize&&l.resizeStart&&(n=e.clientX-l.offset[0],a=e.clientY-l.offset[1],e.preventDefault(),p.style(o.index,{width:l.area[0]+n,height:l.area[1]+a}),l.isResize=!0,r.resizing&&r.resizing(s))}).on("mouseup",function(e){l.moveStart&&(delete l.moveStart,c.moveElem.hide(),r.moveEnd&&r.moveEnd(s)),l.resizeStart&&(delete l.resizeStart,c.moveElem.hide())}),o},t.pt.callback=function(){var t=this,i=t.layero,n=t.config;t.openLayer(),n.success&&(2==n.type?i.find("iframe").on("load",function(){n.success(i,t.index)}):n.success(i,t.index)),6==p.ie&&t.IE6(i),i.find("."+h[6]).children("a").on("click",function(){var e=y(this).index();0===e?n.yes?n.yes(t.index,i):n.btn1?n.btn1(t.index,i):p.close(t.index):!1===(n["btn"+(e+1)]&&n["btn"+(e+1)](t.index,i))||p.close(t.index)}),i.find("."+h[7]).on("click",function(){!1===(n.cancel&&n.cancel(t.index,i))||p.close(t.index)}),n.shadeClose&&y("#layui-layer-shade"+t.index).on("click",function(){p.close(t.index)}),i.find(".layui-layer-min").on("click",function(){!1===(n.min&&n.min(i))||p.min(t.index,n)}),i.find(".layui-layer-max").on("click",function(){y(this).hasClass("layui-layer-maxmin")?(p.restore(t.index),n.restore&&n.restore(i)):(p.full(t.index,n),setTimeout(function(){n.full&&n.full(i)},100))}),n.end&&(c.end[t.index]=n.end)},c.reselect=function(){y.each(y("select"),function(e,t){var i=y(this);i.parents("."+h[0])[0]||1==i.attr("layer")&&y("."+h[0]).length<1&&i.removeAttr("layer").show(),i=null})},t.pt.IE6=function(e){y("select").each(function(e,t){var i=y(this);i.parents("."+h[0])[0]||"none"===i.css("display")||i.attr({layer:"1"}).hide(),i=null})},t.pt.openLayer=function(){p.zIndex=this.config.zIndex,p.setTop=function(e){return p.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",function(){p.zIndex++,e.css("z-index",p.zIndex+1)}),p.zIndex}},c.record=function(e){var t=[e.width(),e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},c.rescollbar=function(e){h.html.attr("layer-full")==e&&(h.html[0].style.removeProperty?h.html[0].style.removeProperty("overflow"):h.html[0].style.removeAttribute("overflow"),h.html.removeAttr("layer-full"))},(u.layer=p).getChildFrame=function(e,t){return t=t||y("."+h[4]).attr("times"),y("#"+h[0]+t).find("iframe").contents().find(e)},p.getFrameIndex=function(e){return y("#"+e).parents("."+h[4]).attr("times")},p.iframeAuto=function(e){var t,i,n;e&&(t=p.getChildFrame("html",e).outerHeight(),n=(i=y("#"+h[0]+e)).find(h[1]).outerHeight()||0,e=i.find("."+h[6]).outerHeight()||0,i.css({height:t+n+e}),i.find("iframe").css({height:t}))},p.iframeSrc=function(e,t){y("#"+h[0]+e).find("iframe").attr("src",t)},p.style=function(e,t,i){var n=y("#"+h[0]+e),a=n.find(".layui-layer-content"),o=n.attr("type"),r=n.find(h[1]).outerHeight()||0,e=n.find("."+h[6]).outerHeight()||0;n.attr("minLeft");o!==c.type[3]&&o!==c.type[4]&&(i||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-r-e<=64&&(t.height=64+r+e)),n.css(t),e=n.find("."+h[6]).outerHeight(),o===c.type[2]?n.find("iframe").css({height:parseFloat(t.height)-r-e}):a.css({height:parseFloat(t.height)-r-e-parseFloat(a.css("padding-top"))-parseFloat(a.css("padding-bottom"))}))},p.min=function(e,t){var i=y("#"+h[0]+e),n=i.find(h[1]).outerHeight()||0,a=i.attr("minLeft")||181*c.minIndex+"px",o=i.css("position");c.record(i),c.minLeft[0]&&(a=c.minLeft[0],c.minLeft.shift()),i.attr("position",o),p.style(e,{width:180,height:n,left:a,top:f.height()-n,position:"fixed",overflow:"hidden"},!0),i.find(".layui-layer-min").hide(),"page"===i.attr("type")&&i.find(h[4]).hide(),c.rescollbar(e),i.attr("minLeft")||c.minIndex++,i.attr("minLeft",a)},p.restore=function(e){var t=y("#"+h[0]+e),i=t.attr("area").split(",");t.attr("type");p.style(e,{width:parseFloat(i[0]),height:parseFloat(i[1]),top:parseFloat(i[2]),left:parseFloat(i[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(h[4]).show(),c.rescollbar(e)},p.full=function(t){var i=y("#"+h[0]+t),n=y("#layui-layer-iframe"+t);timer,c.record(i),h.html.attr("layer-full")||h.html.css("overflow","hidden").attr("layer-full",t),clearTimeout(timer),timer=setTimeout(function(){var e="fixed"===i.css("position");p.style(t,{top:e?0:f.scrollTop(),left:e?0:f.scrollLeft(),width:f.width(),height:f.height()},!0),n.css("height",f.height()),i.find(".layui-layer-min").hide()},100)},p.title=function(e,t){y("#"+h[0]+(t||p.index)).find(h[1]).html(e)},p.close=function(n){var a,e,o=y("#"+h[0]+n),r=o.attr("type");o[0]&&(a="layui-layer-wrap",e=function(){if(r===c.type[1]&&"object"===o.attr("conType")){o.children(":not(."+h[5]+")").remove();for(var e=o.find("."+a),t=0;t<2;t++)e.unwrap();e.css("display",e.data("display")).removeClass(a)}else{if(r===c.type[2])try{var i=y("#"+h[4]+n)[0];i.contentWindow.document.write(""),i.contentWindow.close(),o.find("."+h[5])[0].removeChild(i)}catch(e){}o[0].innerHTML="",o.remove()}"function"==typeof c.end[n]&&c.end[n](),delete c.end[n]},o.data("isOutAnim")&&o.addClass("layer-anim layer-anim-close"),y("#layui-layer-moves, #layui-layer-shade"+n).remove(),6==p.ie&&c.reselect(),c.rescollbar(n),o.attr("minLeft")&&(c.minIndex--,c.minLeft.push(o.attr("minLeft"))),p.ie&&p.ie<10||!o.data("isOutAnim")?e():setTimeout(function(){e()},200))},p.closeAll=function(t){y.each(y("."+h[0]),function(){var e=y(this);(t?e.attr("type")===t:1)&&p.close(e.attr("times"))})};var i=p.cache||{};p.prompt=function(i,n){var e,t="";"function"==typeof(i=i||{})&&(n=i),i.area&&(t='style="width: '+(e=i.area)[0]+"; height: "+e[1]+';"',delete i.area);var a,t=2==i.formType?'<textarea class="layui-layer-input"'+t+"></textarea>":'<input type="'+(1==i.formType?"password":"text")+'" class="layui-layer-input">',o=i.success;return delete i.success,p.open(y.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:t,skin:"layui-layer-prompt"+d("prompt"),maxWidth:f.width(),success:function(e){(a=e.find(".layui-layer-input")).val(i.value||"").focus(),"function"==typeof o&&o(e)},resize:!1,yes:function(e){var t=a.val();""===t?a.focus():t.length>(i.maxlength||500)?p.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(i.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",a,{tips:1}):n&&n(t,e,a)}},i))},p.tab=function(n){var a=(n=n||{}).tab||{},o="layui-this",r=n.success;return delete n.success,p.open(y.extend({type:1,skin:"layui-layer-tab"+d("tab"),resize:!1,title:function(){var e=a.length,t=1,i="";if(0<e)for(i='<span class="'+o+'">'+a[0].title+"</span>";t<e;t++)i+="<span>"+a[t].title+"</span>";return i}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=a.length,t=1,i="";if(0<e)for(i='<li class="layui-layer-tabli '+o+'">'+(a[0].content||"no content")+"</li>";t<e;t++)i+='<li class="layui-layer-tabli">'+(a[t].content||"no  content")+"</li>";return i}()+"</ul>",success:function(e){var t=e.find(".layui-layer-title").children(),i=e.find(".layui-layer-tabmain").children();t.on("mousedown",function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0;var t=y(this),e=t.index();t.addClass(o).siblings().removeClass(o),i.eq(e).show().siblings().hide(),"function"==typeof n.change&&n.change(e)}),"function"==typeof r&&r(e)}},n))},p.photos=function(i,e,n){var a={};if((i=i||{}).photos){var t=i.photos.constructor===Object,o=t?i.photos:{},r=o.data||[],s=o.start||0;a.imgIndex=1+(0|s),i.img=i.img||"img";var l=i.success;if(delete i.success,t){if(0===r.length)return p.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var f=y(i.photos),c=function(){r=[],f.find(i.img).each(function(e){var t=y(this);t.attr("layer-index",e),r.push({alt:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("src"),thumb:t.attr("src")})})};if(c(),0===r.length)return;if(e||f.on("click",i.img,function(){var e=y(this).attr("layer-index");p.photos(y.extend(i,{photos:{start:e,data:r,tab:i.tab},full:i.full}),!0),c()}),!e)return}a.imgprev=function(e){a.imgIndex--,a.imgIndex<1&&(a.imgIndex=r.length),a.tabimg(e)},a.imgnext=function(e,t){a.imgIndex++,a.imgIndex>r.length&&(a.imgIndex=1,t)||a.tabimg(e)},a.keyup=function(e){var t;a.end||(t=e.keyCode,e.preventDefault(),37===t?a.imgprev(!0):39===t?a.imgnext(!0):27===t&&p.close(a.index))},a.tabimg=function(e){if(!(r.length<=1))return o.start=a.imgIndex-1,p.close(a.index),p.photos(i,!0,e)},a.event=function(){a.bigimg.hover(function(){a.imgsee.show()},function(){a.imgsee.hide()}),a.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),a.imgprev()}),a.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),a.imgnext()}),y(document).on("keyup",a.keyup)},a.loadi=p.load(1,{shade:!("shade"in i)&&.9,scrollbar:!1}),function(e,t,i){var n=new Image;if(n.src=e,n.complete)return t(n);n.onload=function(){n.onload=null,t(n)},n.onerror=function(e){n.onerror=null,i(e)}}(r[s].src,function(e){var t;p.close(a.loadi),a.index=p.open(y.extend({type:1,id:"layui-layer-photos",area:(t=[e.width,e.height],e=[y(u).width()-100,y(u).height()-100],!i.full&&(t[0]>e[0]||t[1]>e[1])&&((e=[t[0]/e[0],t[1]/e[1]])[1]<e[0]?(t[0]=t[0]/e[0],t[1]=t[1]/e[0]):e[0]<e[1]&&(t[0]=t[0]/e[1],t[1]=t[1]/e[1])),[t[0]+"px",t[1]+"px"]),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,isOutAnim:!1,skin:"layui-layer-photos"+d("photos"),content:'<div class="layui-layer-phimg"><img src="'+r[s].src+'" alt="'+(r[s].alt||"")+'" layer-pid="'+r[s].pid+'"><div class="layui-layer-imgsee">'+(1<r.length?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(n?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(r[s].alt||"")+"</a><em>"+a.imgIndex+"/"+r.length+"</em></span></div></div></div>",success:function(e,t){a.bigimg=e.find(".layui-layer-phimg"),a.imgsee=e.find(".layui-layer-imguide,.layui-layer-imgbar"),a.event(e),i.tab&&i.tab(r[s],e),"function"==typeof l&&l(e)},end:function(){a.end=!0,y(document).off("keyup",a.keyup)}},i))},function(){p.close(a.loadi),p.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){1<r.length&&a.imgnext(!0,!0)}})})}},c.run=function(e){f=(y=e)(u),h.html=y("html"),p.open=function(e){return new t(e).index}},u.layui&&layui.define?(p.ready(),layui.define("jquery",function(e){p.path=layui.cache.dir,c.run(layui.$),e("layer",u.layer=p)})):"function"==typeof define&&define.amd?define([],function(){return c.run(u.jQuery),p}):(c.run(u.jQuery),p.ready())}(window);
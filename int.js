
var _0x2f06=['classList','7nmbWuY','126691bQIGnc','137CtyJoe','14XsOjal','10951aRYApo','toggle','175700TCxMkS','14gwnTNr','2eTDEWv','16431vHYRhM','17257DmLzSW','2985Pebuhu','367169lmneyo','sidebar','active','getElementById'];function _0x4339(_0x57a99d,_0x51114b){_0x57a99d=_0x57a99d-0xfe;var _0x2f0691=_0x2f06[_0x57a99d];return _0x2f0691;}(function(_0x1dbf85,_0x3ca47f){var _0x3f74fa=_0x4339;while(!![]){try{var _0x2da35a=parseInt(_0x3f74fa(0x10e))+-parseInt(_0x3f74fa(0x103))+-parseInt(_0x3f74fa(0xff))*parseInt(_0x3f74fa(0x10c))+-parseInt(_0x3f74fa(0x10a))*parseInt(_0x3f74fa(0x102))+parseInt(_0x3f74fa(0xfe))*-parseInt(_0x3f74fa(0x101))+-parseInt(_0x3f74fa(0x100))*-parseInt(_0x3f74fa(0x10b))+parseInt(_0x3f74fa(0x108))*parseInt(_0x3f74fa(0x109));if(_0x2da35a===_0x3ca47f)break;else _0x1dbf85['push'](_0x1dbf85['shift']());}catch(_0x5a8f22){_0x1dbf85['push'](_0x1dbf85['shift']());}}}(_0x2f06,0x3dc1d));function toggleSidebar(){var _0x358663=_0x4339;document[_0x358663(0x106)](_0x358663(0x104))[_0x358663(0x107)][_0x358663(0x10d)](_0x358663(0x105));}


function toggleSidebar2()  {

   
    document.getElementById("sidebarmobile").classList.toggle('active');
    
}


const _0x2f48=['114030hPrGBr','translateY(','5utinZw','transform','1AYEzDk','14869RrHYlo','querySelectorAll','230054jWXKek','clientHeight','143668etzcvQ','34585VRwXeu','.right-slide','top','style','4mHLjwb','down','addEventListener','div','106195bnHBCp','querySelector','155SNEegT','length','1iBmiNF','263pKKQfP','translateY(-','click','.up-button','.down-button','2uidbPV'];function _0x13cc(_0x3e4af0,_0x4160ec){_0x3e4af0=_0x3e4af0-0x79;let _0x2f48a9=_0x2f48[_0x3e4af0];return _0x2f48a9;}const _0xb83168=_0x13cc;(function(_0x2026ac,_0x5369cd){const _0x4f0f36=_0x13cc;while(!![]){try{const _0x18c5b3=parseInt(_0x4f0f36(0x8a))*parseInt(_0x4f0f36(0x81))+parseInt(_0x4f0f36(0x90))*-parseInt(_0x4f0f36(0x93))+parseInt(_0x4f0f36(0x7c))*parseInt(_0x4f0f36(0x7b))+-parseInt(_0x4f0f36(0x80))*-parseInt(_0x4f0f36(0x85))+-parseInt(_0x4f0f36(0x86))*-parseInt(_0x4f0f36(0x92))+parseInt(_0x4f0f36(0x83))+-parseInt(_0x4f0f36(0x8e))*parseInt(_0x4f0f36(0x7e));if(_0x18c5b3===_0x5369cd)break;else _0x2026ac['push'](_0x2026ac['shift']());}catch(_0x44f29a){_0x2026ac['push'](_0x2026ac['shift']());}}}(_0x2f48,0x1e4c7));const sliderContainer=document[_0xb83168(0x8f)]('.slider-container'),slideRight=document[_0xb83168(0x8f)](_0xb83168(0x87)),slideLeft=document[_0xb83168(0x8f)]('.left-slide'),upButton=document[_0xb83168(0x8f)](_0xb83168(0x79)),downButton=document[_0xb83168(0x8f)](_0xb83168(0x7a)),slidesLength=slideLeft[_0xb83168(0x82)](_0xb83168(0x8d))[_0xb83168(0x91)];let activeSlideIndex=0x0;slideLeft[_0xb83168(0x89)][_0xb83168(0x88)]='-'+(slidesLength-0x1)*0x64+'vh',upButton[_0xb83168(0x8c)](_0xb83168(0x95),()=>changeSlide('up')),downButton[_0xb83168(0x8c)](_0xb83168(0x95),()=>changeSlide('down'));const changeSlide=_0x3288f7=>{const _0x438b28=_0xb83168,_0x94b87c=sliderContainer[_0x438b28(0x84)];if(_0x3288f7==='up')activeSlideIndex++,activeSlideIndex>slidesLength-0x1&&(activeSlideIndex=0x0);else _0x3288f7===_0x438b28(0x8b)&&(activeSlideIndex--,activeSlideIndex<0x0&&(activeSlideIndex=slidesLength-0x1));slideRight[_0x438b28(0x89)][_0x438b28(0x7f)]=_0x438b28(0x94)+activeSlideIndex*_0x94b87c+'px)',slideLeft['style'][_0x438b28(0x7f)]=_0x438b28(0x7d)+activeSlideIndex*_0x94b87c+'px)';};


(function () {
    var options = {
        instagram: "fanyees", 
        instagram_color: "#000000", 
        call_to_action: "Envia-nos uma mensagem", 
        position: "right",
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
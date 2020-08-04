// 作用：重置html的font-size

function resetRootFZ(){
    var oHtml= document.querySelector('html');
    var width = oHtml.getBoundingClientRect().width;
    //
    oHtml.style.fontSize = width/10 + 'px';
}

resetRootFZ();

window.addEventListener('resize',function(){
    resetRootFZ();
})
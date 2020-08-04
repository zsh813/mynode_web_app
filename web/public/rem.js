// 作用：重置html的font-size，webapp需要的配置文件，

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
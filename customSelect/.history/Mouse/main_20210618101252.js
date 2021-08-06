var boxEl = document.querySelector('.box')

function getOffset(element){
    if(!element) return;

    if(!element.getClientRects().length){
        return {
            top:0,
            left:0
        }
    }
    var rect = element.getBoundingClientRect();
    var win  = element.ownerDocument.defaultView;

    return {
        top:rect.top + win.pageYOffset,
        left:rect.left + win.pageXOffset
    }
}
boxEl.addEventListener('mouseover',function(e){
    // console.log('mouseover',e);
    
})
boxEl.addEventListener('mousemove',function(e){


    boxEl.querySelector('#screen').innerHTML = `ScreenX : ${e.screenX} - ScreenY : ${e.screenY}`;
    boxEl.querySelector('#page').innerHTML = `PageX : ${e.pageX} - PageY : ${e.pageY}`;
    boxEl.querySelector('#client').innerHTML = `ClientX : ${e.clientX} - ClientY : ${e.clientY}`;
    boxEl.querySelector('#offset').innerHTML = `OffsetX : ${e.offsetX} - OffsetY : ${e.offsetY}`;
    boxEl.querySelector('#xy').innerHTML = `X : ${e.x} - Y : ${e.y}`;
    boxEl.querySelector('#layout').innerHTML = `LayerX : ${e.layerX} - LayerY : ${e.layerY}`;
    boxEl.querySelector('#offsetLefTop').innerHTML = `OffsetLeft : ${getOffset.layerX} - LayerY : ${e.layerY}`;


    
})
boxEl.addEventListener('mouseleave',function(e){
    // console.log('mouseleave',e);
    
})
boxEl.addEventListener('mouseout',function(e){
    // console.log('mouseout',e);
    
})
/* 
    OFFsetX -> la k/c tu mouse den vien ben trai cua chinh no
    offsetY -> la k/c tu mouse den vien ben tren cua chinh no

    ScreenX -> la kc/ tu mouse den vien ben trai cua man hinh may tinh (ko phai cua trinh duyet)
    ScreenY -> la kc/ tu mouse den vien ben tren cua man hinh may tinh (ko phai cua trinh duyet)

    PageX -> la kc/ tu mouse den vien ben trai cua trang web
    PageY -> la kc/ tu mouse den vien ben tren cua trang web

    ClientX -> la kc/ tu mouse den vien ben trai cua viewport
    ClientY -> la kc/ tu mouse den vien ben tren cua viewport


 */
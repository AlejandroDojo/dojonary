function changeInner(id,text) {
    document.querySelector('#'+id).innerHTML = text;
}
function disable(element){
    document.querySelector('#'+element).style.display = 'none';
}
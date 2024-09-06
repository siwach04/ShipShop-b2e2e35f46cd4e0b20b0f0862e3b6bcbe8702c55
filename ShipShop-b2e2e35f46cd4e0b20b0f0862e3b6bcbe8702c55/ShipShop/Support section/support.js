let menutoggle = document.querySelector('#menuslide');
let buttontoggle = document.querySelector('#menubutton');
let menulist = document.querySelector('#listslide');
buttontoggle.addEventListener('click',function(){
    menutoggle.classList.toggle('active');
});
buttontoggle.addEventListener('reload',function(){
    menutoggle.classList.toggle('not-active');
});
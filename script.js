// Functions for showing and hiding sidebar
function openNav(){
    document.getElementById('sidebar').style.width="250px";
    document.getElementById('main').style.marginLeft="250px";
}
function closeNav(){
    document.getElementById('sidebar').style.width="0";
    document.getElementById('main').style.marginLeft="0";
}
// Code for active page indicator in sidebar
const navLinks=document.getElementById('sidebar').querySelectorAll('li a');
const activeClass='active';
navLinks.forEach((link)=>{if(link.href==window.location.href){
    link.classList.add(activeClass);
}});
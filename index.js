const slider= document.querySelector('.slider')
const menuItems=document.querySelectorAll('.menuItem')

menuItems.forEach((item,index)=> {
    item.addEventListener('click',()=>{
        slider.style.transform=`translateX(${-100 *index}vw)`;
    })
});

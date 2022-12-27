document.querySelector('.showcase').onmousemove=( e)=>{
    document.querySelectorAll('.move').forEach(elm => {
        let speed = elm.getAttribute('data-speed');
        let x =(window.innerWidth - e.pageX * speed)/90;
        let y =( window.innerHeight - e.pageY * speed)/90;

        elm.style.transform=`translateX(${y}px) translateY(${x}px)`;
    });
};
document.querySelector('.showcase').onmouseleave=( e)=>{
    document.querySelectorAll('.move').forEach(elm => {
   

        elm.style.transform=`translateX(0px) translateY(0px)`;
    });
};
const nav = document.querySelector('nav')
const backgroundHome =document.querySelector
('#background')
const body = document.querySelector('body')
const data = new Date()
const hours = data.getHours()
const minutos = data.getMinutes()
if((horas<=5 && minutos<=59)||(horas>=17 &&
minutos<=59)){
    backgroundHome.computedStyleMap.backgroundImage = "url('/assets/images/backgrounnd.jpg')"
    body.style.backgroundColor = '#0c1220'
    window.addEventListener('scroll', function(){
        nav.classList.toggle('scrolldark', window.
        scrolly)
    })
}else{
    window.addEventListener('scroll',function(){
        nav.classList.toggle('scrolldark', window.
        scrolly)
    })
}

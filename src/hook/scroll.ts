export function registerScroll(){
    const header = document.querySelector('.header')
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 0){
            header?.classList.add('fix')
        }
        else {
            header?.classList.remove('fix')
        }
    })
}
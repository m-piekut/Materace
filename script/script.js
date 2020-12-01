const burgerBtn = document.querySelector('.burger-btn')
const menu = document.querySelector('.nav')

burgerBtn.addEventListener('click', ()=>menu.classList.toggle('show-menu'))


let tel = document.getElementsByClassName('products__card-buy--phone')



window.addEventListener('resize', ()=>{
    if(window.innerWidth >= 900){
        console.log(window.innerWidth)
        for (const el of tel) {
            console.log(el.innerHTML)
                const changeTonuber =(e)=>{
                    e.preventDefault()
                    el.outerHTML = '<p class="products__card-buy products__card-buy--phone">728 823 920</p>'
                }
            el.addEventListener('click', changeTonuber)
        }
            
        }else{
        console.log(tel)
        for (const el of tel) {
            el.outerHTML = '<a class="products__card-buy products__card-buy--phone" href="tel:728 823 920">zamów przez telefon</a>'
        }
        
    }
})

if(window.innerWidth >= 900){
    console.log(window.innerWidth)
    for (const el of tel) {
        console.log(el.innerHTML)
            const changeTonuber =(e)=>{
                e.preventDefault()
                el.outerHTML = '<p class="products__card-buy products__card-buy--phone">728 823 920</p>'
            }
        el.addEventListener('click', changeTonuber)
    }
}
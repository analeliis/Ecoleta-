const buttonSearch = document.querySelector("#page-home main a") //page home procura ali dentro do man o a 
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click",function(){
  modal.classList.toggle("hide")
})

close.addEventListener("click",function(){
  modal.classList.add("hide")
})
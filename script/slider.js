const btnInfo = document.querySelector(".bnt-info")
const btnGo = document.querySelector("#depois")
const container = document.querySelector("#container-item")
const btnReturn = document.querySelector("#antes")

const loadImages = (image, container) => {
    images.forEach(image => {
        container.innerHTML += `            
        <div class="itens ${image.identidade}">
            <img src="${image.url_image}" alt="${image.alt}">
        </div>
    `
    });
}
loadImages(images,container)

const divInfo = document.querySelector(".information")
btnInfo.addEventListener("click", () => divInfo.classList.toggle("active") )


let itens = document.querySelectorAll(".itens")


btnGo.addEventListener("click", () => {
  container.appendChild(itens[0])
  itens = document.querySelectorAll(".itens")
  updateInfo()
})

btnReturn.addEventListener("click", () => {
  const lastItem =  itens[itens.length - 1]
  container.insertBefore(lastItem,itens[0])
  itens = document.querySelectorAll(".itens")
  updateInfo()
})
window.addEventListener("load", () => {
  divInfo.innerHTML = `
    <div class="logo" style="background-image : url(${images[1].url_logo})"></div>
    <div class="lançamento">${images[1].ano}</div>
    <div class="sinopse"><p>${images[1].sinopse}</p></div>  `
})

function updateInfo(){
  if(itens[1].classList.contains("naruto")){
    divInfo.innerHTML = `
    <div class="logo" style="background-image : url(${images[2].url_logo})"></div>
    <div class="lançamento">${images[2].ano}</div>
    <div class="sinopse"><p>${images[2].sinopse}</p></div>  `
  } else if (itens[1].classList.contains("op")){
    divInfo.innerHTML = `
    <div class="logo" style="background-image : url(${images[3].url_logo})"></div>
    <div class="lançamento">${images[3].ano}</div>
    <div class="sinopse"><p>${images[3].sinopse}</p></div>  `
  }else if (itens[1].classList.contains("snk")){
    divInfo.innerHTML = `
    <div class="logo" style="background-image : url(${images[4].url_logo})"></div>
    <div class="lançamento">${images[4].ano}</div>
    <div class="sinopse"><p>${images[4].sinopse}</p></div>  `
  }else if (itens[1].classList.contains("agk")){
    divInfo.innerHTML = `
    <div class="logo" style="background-image : url(${images[0].url_logo})"></div>
    <div class="lançamento">${images[0].ano}</div>
    <div class="sinopse"><p>${images[0].sinopse}</p></div>  `
  }else if (itens[1].classList.contains("dr")){
    divInfo.innerHTML = `
    <div class="logo" style="background-image : url(${images[1].url_logo})"></div>
    <div class="lançamento">${images[1].ano}</div>
    <div class="sinopse"><p>${images[1].sinopse}</p></div>  `
  }
}
setInterval(() => {
  container.appendChild(itens[0])
  itens = document.querySelectorAll(".itens")
  updateInfo()
}, 10000)
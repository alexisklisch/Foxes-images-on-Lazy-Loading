import { registerImage } from './functions/lazy.js'

const $ = selector => document.querySelector(selector)
const $addImageBtn = $('#add-img-btn')
const $rebootContent = $('#reboot-img-btn')
const $imgContainer = $('#img-container')
const $countImgAdded = $('#img-added')
const $countImgLoaded = $('#img-loaded')

$addImageBtn.addEventListener('click', addImg)
$rebootContent.addEventListener('click', rebootContent)

const randomImgNumber = (config = {max: 123, min: 1}) => {
    return (Math.floor(Math.random() * config.max)) + 1;
}

function addImg(e){
    const number = randomImgNumber()
    
    const img = document.createElement('img')
    // Creo un contenedor del link de la imagen (data-src)
    img.dataset.src = `https://randomfox.ca/images/${number}.jpg`
    
    $imgContainer.appendChild(img)
    registerImage(img)
    
    $countImgAdded.innerText = $imgContainer.childElementCount

}

function rebootContent(){
    while($imgContainer.firstChild){
        $imgContainer.firstChild.remove()
    }
    
    $countImgAdded.innerText = $imgContainer.childElementCount
    $countImgLoaded.innerText = $imgContainer.childElementCount
}
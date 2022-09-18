const $ = selector => document.querySelector(selector)
const $countImgLoaded = $('#img-loaded')

const observer = new IntersectionObserver(entries => {
    // Itero el array de elementos
    entries
        // Devuelve true si el elemento está en pantalla
        .filter(entry => entry.isIntersecting)
        .forEach(entry => {
            const img = entry.target
            img.src = img.dataset.src
            observer.unobserve(img)

            const imgWithSrcLength = [...img.parentElement.children]
                .filter(element => element.src).length
            
            $countImgLoaded.innerText = imgWithSrcLength
        })
})

export const registerImage = img => {
    observer.observe(img)
}
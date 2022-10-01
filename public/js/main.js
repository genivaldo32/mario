function loadImage(url){
  return new Promise(resolve => {
    const image = new Image()
    image.addEventListener('load', () =>{
      resolve(image)
    })
    image.src = url
  })
}

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
canvas.width = 1245
canvas.height = 500

loadImage('/img/tiles.png')
.then(image => {
  context.drawImage(image, 0, 0)
})


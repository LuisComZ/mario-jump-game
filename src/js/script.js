const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")

const jump = function jump() {
  mario.classList.add("jump")

  setTimeout(function () {
    mario.classList.remove("jump")
  }, 500)
}

const loop = setInterval(function () {
  const pipePosition = pipe.offsetLeft
  const marioPosition = Number(getComputedStyle(mario).bottom.replace("px", ""))

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none"
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = "none"
    mario.style.bottom = `${marioPosition}px`

    mario.src = "./src/images/game-over.png"
    mario.style.width = "70px"
    mario.style.marginLeft = "50px"

    clearInterval(loop)
  }
}, 10)

document.addEventListener("keydown", jump)

import {update as updateSnake, draw as drawSnake, snakeSpeed} from './snake.js'

let lastRenderTime = 0
const gameBoard= document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) /1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return

    lastRenderTime = currentTime

    //Gameplay Loop Function.
    update()

    //Rendering Function
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake
}

function draw(){
    drawSnake(gameBoard)
}
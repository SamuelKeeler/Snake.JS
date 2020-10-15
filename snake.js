export const snakeSpeed = 2
const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 }
]

// Snake "Movement" Pull Block 2 to block, 1, 3 to 2. 
export function update(){
    for (let i = snakeBody.length - 2; i >= 0; i--){
        //Dupe Snake and move old blocks.
        snakeBody [i + 1] = { ...snakeBody[i] } 
    }

    //Update Snakes Head
    snakeBody[0].x +=1 
    snakeBody[0].y +=0
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}
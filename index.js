import GameState from './GameState.js'
import drawGame from './drawGame'

const state = new GameState()

function gameLoop() {
  drawGame(state)
  requestAnimationFrame(gameLoop)
}

function handleKeyDown (e) {
  const isGameStarted = state.isGameStarted
  if (isGameStarted) {
    switch (e.keyCode) {
      case KEY.LEFT:
        dispatch(moveLeft())
        break
      case KEY.RIGHT:
        dispatch(moveRight())
        break
      case KEY.DOWN:
        dispatch(moveDown())
        dispatch(gameInfo.setIsSoftDropping(true))
        break
      case KEY.UP:
        dispatch(rotate())
        break
    }
  } else {
    switch (e.keyCode) {
      case KEY.SPACE:
        dispatch(gameInfo.startGame())
        break
      case KEY.I:
        dispatch(incrementStartingLevel())
        break
    }
  }
}

requestAnimationFrame(gameLoop)
window.onKeyDown(handleKeyDown)

function main() {
  requestAnimationFrame(main);
  render()
  if (collision()) {game.over = true;}
  if (game.start) {update()}
  if (game.over) {
    clearTimeout(loop);
    gameOver()
  }
}

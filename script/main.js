function main() {
  requestAnimationFrame(main);
  if (collision()) {
    game.over = true;
  }
  render()
  if (game.start) {
    update()
  }
  if (game.over) {
    clearTimeout(loop);
  }
}
function render() {
  player.draw();
  pipe.draw()
  pipe.position.length < 10 ? pipe.random() : false
  pipe.position.forEach((item, i) => {
    player.score(item.x,pipe.width)
  });
}
function update() {
  player.update();
  pipe.update();
  pipe.delete()
}

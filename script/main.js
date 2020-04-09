function main() {
  requestAnimationFrame(main);
  if (collision()) {
    game.over = true;
    location.reload();
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
  cloud.draw()
  pipe.position.length < 10 ? pipe.random() : false
  cloud.position.length < 20 ? cloud.random() : false
  pipe.position.forEach((item) => {
    player.score(item.x,pipe.width)
  });
}
function update() {
  player.update();
  pipe.update();
  pipe.delete()
}

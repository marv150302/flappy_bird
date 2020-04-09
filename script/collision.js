function collision() {
  var collision = false
  for (var i = 0; i < pipe.position.length; i++) {
    if (pipe.collision(player.x,player.y,player.width,player.height,pipe.position[i].x,pipe.position[i].y,pipe.width,pipe.height)) {
      return true;
    }
  }
  return game.collision(player.y,player.height) ? true : false
}

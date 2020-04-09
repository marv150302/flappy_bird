function gameOver() {
  $("div.start").show()
  $("div.start p").hide()
  $("div.start img").hide()
  $("div.start input").hide()
  $("div.start button").hide()
  //
  $("div.start").append(player.name);
  $("div.start").append("<br>");
  $("div.start").append("Your Score: " + player.points);
  $("div.start").append("<br>")
  $("div.start").append("<button type='button' name='button' onclick='reset()'>RESET</button>");
}
function update() {
  player.update();
  pipe.update();
  pipe.delete();
  cloud.update();
  cloud.delete();
}
function reset() {
  location.reload();
}
function render() {
  player.draw();
  cloud.draw()
  pipe.draw()
  pipe.position.length < 10 ? pipe.random() : false
  cloud.position.length < 20 ? cloud.random() : false
  pipe.position.forEach((item) => {player.score(item.x,pipe.width)});
}
function start() {
  game.start = true;
  $("div.start").hide()
  player.name = $("#start input").val();
}

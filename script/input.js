document.addEventListener("keydown",function (value) {
  player.key[value.keyCode]=true;
  value.keyCode==13 ? game.start=true : false
  value.keyCode==76 ? player.color_index++ : false//L key
  player.color_index>2 ? player.color_index=0 : false
})
document.addEventListener("keyup",function (value) {
  player.key[value.keyCode]=false;
})
canvas.addEventListener("touchstart",function () {
  player.key["touch"]=true;
  game.start=true
})
canvas.addEventListener("touchend",function () {
  player.key["touch"]=false;
  game.start=true
})

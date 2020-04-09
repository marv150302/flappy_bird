document.addEventListener("keydown",function (value) {
  player.key[value.keyCode]=true;
  value.keyCode==13 ? game.start=true : false
  value.keyCode==76 ? player.color_index++ : false//L key
  player.color_index>2 ? player.color_index=0 : false
})
document.addEventListener("keyup",function (value) {
  player.key[value.keyCode]=false;
})
var doubleTouchStartTimestamp = 0
document.addEventListener("touchstart",function () {
  player.key[32]=true;
  game.start=true
  var now = +(new Date());
    if (doubleTouchStartTimestamp + 500 > now){
        event.preventDefault();
    };
    doubleTouchStartTimestamp = now;
})
document.addEventListener("touchend",function () {
  player.key[32]=false;
  game.start=true
})

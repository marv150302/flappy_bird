var buttons
var gamepad
//keybord
//
document.addEventListener("keydown",function (value) {
  player.key[value.keyCode]=true;
  if(value.keyCode == 13){$('div.start button').click();}
  value.keyCode==76 ? player.color_index++ : false//L key
  player.color_index>2 ? player.color_index=0 : false
})
document.addEventListener("keyup",function (value) {
  player.key[value.keyCode]=false;
})
//touchscreen
//
//
var doubleTouchStartTimestamp = 0
document.addEventListener("touchstart",function () {
  player.key[32]=true;
  game.start=true
  var now = +(new Date());
    if (doubleTouchStartTimestamp + 500 > now){event.preventDefault();};
    doubleTouchStartTimestamp = now;
})
document.addEventListener("touchend",function () {
  player.key[32]=false;
  game.start=true
})
//if you are using a joypad
//
//
function gameLoop() {
     gamepad = navigator.getGamepads()[0]; //get the first controller.
    if (gamepad && gamepad.connected) {
  	 buttons = gamepad.buttons;
     buttons[9].pressed ? $('div.start button').click() : false
     buttons[0].pressed ? player.key[32]=true : player.key[32]=false
    };
};

var game_loop ;
//when controller connected, page will show: "Gamepad connected"
window.addEventListener("gamepadconnected", function(e) {
    game_loop = setInterval(gameLoop, 50);  //check if a button was pressed 20 times every second.
});
//when controller disconnected, page will show: "Gamepad disconnected"
window.addEventListener("gamepaddisconnected", function(e) {
    clearInterval(game_loop);  // stop checking

});

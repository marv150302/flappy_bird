var canvas = {
  height : document.getElementById("game").height,
  width : document.getElementById("game").width,
  bird_ctx : function () {
    return document.getElementById("game").getContext("2d");
  },
  pipe_ctx : function () {
    return document.getElementById("pipe").getContext("2d");
  },
  scale : 1.6
}
canvas.bird_ctx().scale(canvas.scale,canvas.scale);
canvas.bird_ctx().imageSmoothingEnabled = false;
//
canvas.pipe_ctx().scale(canvas.scale,canvas.scale);
canvas.pipe_ctx().imageSmoothingEnabled = false;
var player = new Bird(canvas.bird_ctx(),"./images/blue_bird.png");
var pipe = new Pipe(canvas.pipe_ctx());
var cloud = new Cloud(canvas.pipe_ctx(),"./images/small-cloud.png");
//
var game = {
  start : false,
  over : false,
  collision : function (bird_y,height) {
    return (bird_y + height > canvas.height - 190);
  }
}

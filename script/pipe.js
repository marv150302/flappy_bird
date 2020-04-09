var Pipe = function (ctx) {
  this.ctx = ctx;
  this.position = [];
  this.speed = 1.5;
  this.height = 160;
  this.width = 26;
  this.distance = 150;
  this.x = 300;
  this.ctx.shadowColor = 'black';
  this.ctx.shadowBlur = 10;
  this.ctx.shadowOffsetX = 8;
  this.ctx.shadowOffsetY = 5;
}
Pipe.prototype.draw = function () {
  this.position.forEach((item) => {
    this.ctx.drawImage(resources.get(item._url),item.x,item.y);
  });
}
Pipe.prototype.update = function () {
  this.position.forEach((item, _index) => {
    this.position[_index].x-=this.speed;
  });
}
Pipe.prototype.push = function (x,y,_url) {
  this.position.push({
    x : x,
    y : y,
    _url : _url
  })
}
Pipe.prototype.random = function () {
  var _url;
  var y;
  var direction = Math.floor(Math.random()*2);
  if (direction==0) {
    _url = "./images/pipe/ground.png";
    y = canvas.height-348;
  }else{
    _url = "./images/pipe/top.png";
    y = 0;
  }
   this.push(this.x,y,_url);
   this.x+=this.distance;
}
Pipe.prototype.collision = function (bird_x,bird_y,bird_width,bird_height,pipe_x,pipe_y,pipe_width,pipe_height) {
  return (bird_x < pipe_x + pipe_width && bird_x + bird_width > pipe_x && bird_y < pipe_y + pipe_height && bird_y + bird_height > pipe_y )
}
Pipe.prototype.delete = function () {
  this.position.forEach((item, i) => {
    if (item.x + this.width < 0) {
      this.position.splice(i,1);
    }
  });

}

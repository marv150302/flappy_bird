var Bird = function (ctx,_url) {
  this.ctx = ctx;
  this._url = _url;
  this.key = [];
  this.x = 10;
  this.y = 160;
  this.pressed = false;
  this.width = 17;
  this.height = 12;
  this.points = 0;
  this.color_index = 0;
  this.colors = ["./images/blue_bird.png","./images/red_bird.png","./images/yellow_bird.png"];
}
Bird.prototype.draw = function () {
  this.ctx.clearRect(0,0,canvas.width,canvas.height);
  this.ctx.shadowColor = 'black';
  this.ctx.shadowBlur = 10;
  this.ctx.shadowOffsetX = 8;
  this.ctx.shadowOffsetY = 5;
  this.ctx.drawImage(resources.get(this._url),this.x,this.y)
}
Bird.prototype.update = function () {
  !this.key[32] ? this.y += 5 : this.y-=15
  this._url = this.colors[this.color_index];
}
Bird.prototype.score = function (pipe_x,width) {
  if (this.x > pipe_x + width) {
    this.points+=100;
  }
  this.ctx.fillStyle="lightyellow"
  this.ctx.font = "15px comic sans ms";
  this.ctx.shadowColor = 'black';
  this.ctx.shadowBlur = 0;
  this.ctx.shadowOffsetX = 0;
  this.ctx.shadowOffsetY = 0;
  this.ctx.fillText("Points: " + this.points, 10, 20);
}

var Cloud = function (ctx,_url) {
  this.ctx = ctx;
  this._url = _url;
  this.position = [];
  this.speed = 2;
  this.width = 31;
  this.height = 22;
  this.x = canvas.width;
  this.distance = 50;
}
Cloud.prototype.draw = function () {
  this.ctx.clearRect(0,0,canvas.width,canvas.height);
  this.ctx.fillStyle = "#69b19d"
  this.ctx.fillRect(0,0,canvas.width,canvas.height)
  this.position.forEach((item) => {
    this.ctx.drawImage(resources.get(this._url),item.x,item.y);
  });
}
Cloud.prototype.push = function (x,y) {
  this.position.push({
    x : x,
    y : y
  })
}
Cloud.prototype.random = function () {
  var x = this.x;
  var y = Math.floor(Math.random()*canvas.height - this.height);
  this.push(x,y);
  this.x+=this.distance;
}
Cloud.prototype.update = function (arguments) {
  this.position.forEach((item, i) => {
    this.position[i].x-=this.speed;
  });

}
Cloud.prototype.delete = function () {
  this.position.forEach((item, i) => {
    item.x + this.width < 0 ? this.position.splice(i,1) : false
  });

}

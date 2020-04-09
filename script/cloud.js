var Cloud = function (ctx,_url) {
  this.ctx = ctx;
  this._url = _url;
  this.position = []
}
Cloud.prototype.draw = function () {
  this.ctx.clearRect(0,0,canvas.width,canvas.height);
  this.position.forEach((item) => {
    this.ctx.drawImage(resources.get(this.url),item.x,item.y);
  });
}
Cloud.prototype.push = function (x,y) {
  this.position.push({
    x : x,
    y : y
  })
}
Cloud.prototype.random = function () {
  var x = Math.floor(Math.random()*canvas.width);
  var y = Math.floor(Math.random()*canvas.height);
  this.push(x,y);
}

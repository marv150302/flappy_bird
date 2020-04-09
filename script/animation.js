var loop;
var requestAnimationFrame = function(callback) {
  var interval = 1000 / 60;
  var now = (window.performance && window.performance.now) ?
            window.performance.now() :
            Date.now();
  if (this.lastTarget && now < this.lastTarget)
    now = this.lastTarget + 0.01;
  var delay = interval - now % interval;
  this.lastTarget = now + delay;
  loop = setTimeout(callback, delay);
};

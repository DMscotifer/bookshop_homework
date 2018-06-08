const Bookshop = function(name) {
  this.name = name;
  this.till = 0;
  this.stock = [];
}

Bookshop.prototype.addToTill = function(value) {
  this.till += value;
}

Bookshop.prototype.removeFromTill = function(value) {
  this.till -= value;
}

module.exports = Bookshop;

const Bookshop = function(name, city) {
  this.name = name;
  this.city = city;
  this.till = 0;
  this.stock = [];
}

Bookshop.prototype.addToTill = function(value) {
  this.till += value;
}

Bookshop.prototype.removeFromTill = function(value) {
  this.till -= value;
}

Bookshop.prototype.information = function() {
  return this.name + " of " + this.city;
}

module.exports = Bookshop;

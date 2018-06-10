const Bookshop = function(name, city) {
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.stock = [];
}

Bookshop.prototype.addToBalance = function(value) {
  this.balance += value;
}

Bookshop.prototype.removeFromBalance = function(value) {
  this.balance -= value;
}

Bookshop.prototype.information = function() {
  return this.name + " of " + this.city;
}

module.exports = Bookshop;

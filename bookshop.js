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

Bookshop.prototype.allStock = function() {
  result = [];
  this.stock.forEach(function(book) {
    result.push(book.details);
  });
  return result;
}

Bookshop.prototype.sell = function(book) {
  this.balance += book.price;
  this.removeFromStock(book);
}

Bookshop.prototype.removeFromStock = function(book) {
  this.stock.splice(book.indexOf, 1);
}

module.exports = Bookshop;

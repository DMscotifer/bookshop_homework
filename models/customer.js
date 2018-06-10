const Customer = function(name){
  this.name = name;
  this.collection = [];
  this.budget = 0;
}

Customer.prototype.buy = function(book) {
  this.budget -= book.price;
  this.collection.push(book);
}

module.exports = Customer

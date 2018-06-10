const Customer = function(name){
  this.name = name;
  this.collection = [];
  this.budget = 0;
};

Customer.prototype.buy = function(book) {
  if(this.budget >= book.price) {
    this.budget -= book.price;
    this.collection.push(book);
  }
};

Customer.prototype.sell = function(book) {
  this.budget += book.price;
  this.collection.splice(book.indexOf, 1);
};

module.exports = Customer

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

Customer.prototype.valueOfCollection = function() {
  return this.collection.reduce( (sum, book) => { return sum += book.price },0)
}

Customer.prototype.valueOfCollectionByGenre = function(genre) {
  return this.collection.reduce( (sum, book) => { if(book.genre === genre) {return sum += book.price}},0)
}

Customer.prototype.mostValueableBook = function() {
  this.collection.sort(function(a, b) {
    return b.price - a.price;
  })
  return this.collection[0];
}


module.exports = Customer

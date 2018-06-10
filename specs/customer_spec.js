var assert = require('assert');
var Book = require('../models/book.js');
var Bookshop = require('../models/bookshop.js');
var Customer = require('../models/customer.js')


describe("Customer", function() {

  var bookshop1;
  var book1;
  var book2;
  var book3;
  var book4;
  var customer1;


  beforeEach(function() {
    bookshop1 = new Bookshop("Bookmarks", "Glasgow");
    book1 = new Book("The Silmarilion", "J.R.R Tolkien", "Fantasy", true, 10.00);
    book2 = new Book("Crime and Punishment", "Fyodor Dostoyevsky", "Drama", true, 8.00);
    book3 = new Book("The Decline and Fall of the Roman Empire", "Edward Gibbon", "History", false, 30.00);
    book4 = new Book("Capital in the 21st Century", "Thomas Pikkety", "Economics", false, 25.00);
    bookshop1.stock.push(book1);
    bookshop1.stock.push(book2);
    bookshop1.stock.push(book3);
    customer1 = new Customer("Satya");
  })


it("can buy and sell books.", function() {
  customer1.budget = 30;
  customer1.buy(book3);
  assert.strictEqual(customer1.collection.length, 1);
  customer1.sell(book3);
  assert.strictEqual(customer1.collection.length, 0);
});

it("should have cash that increase and decreases with buying and selling.", function() {
  customer1.budget = 30;
  customer1.buy(book3);
  assert.strictEqual(customer1.budget, 0);
  customer1.sell(book3);
  assert.strictEqual(customer1.budget, 30);
});

it("shouldn't be able to buy a book if he can't afford it.", function() {
  customer1.buy(book3);
  assert.strictEqual(customer1.collection.length, 0);
});

xit("should be able to view the total value of their collection", function() {
  assert.strictEqual();
});

xit("should be able to view the total value of all books of a given Genre", function() {
  assert.strictEqual();
});

xit("should be able to view their most valuable books", function() {
  assert.strictEqual();
});

xit("should be able to sort their books by value. (ascending or descending)", function() {
  assert.strictEqual();
});

xit("should be able to compare the value of their collection with another books collector", function() {
  assert.strictEqual();
});

});

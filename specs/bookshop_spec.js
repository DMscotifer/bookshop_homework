var assert = require('assert');
var Book = require('../book.js');
var Bookshop = require('../bookshop.js');


describe("Bookshop", function() {

  var bookshop1;
  var book1;
  var book2;
  var book3;
  var book4;

  beforeEach(function() {
    bookshop1 = new Bookshop("Bookmarks", "Glasgow");
    book1 = new Book("The Silmarilion", "J.R.R Tolkien", "Fantasy", true, 10.00);
    book2 = new Book("Crime and Punishment", "Fyodor Dostoyevsky", "Drama", true, 8.00);
    book3 = new Book("The Decline and Fall of the Roman Empire", "Edward Gibbon", "History", false, 30.00);
    book4 = new Book("Capital in the 21st Century", "Thomas Pikkety", "Economics", false, 25.00);
    bookshop1.stock.push(book1);
    bookshop1.stock.push(book2);
    bookshop1.stock.push(book3);
  })

it("should have a name", function() {
  assert.strictEqual(bookshop1.name, "Bookmarks")
});

it("should have a balance that starts at 0", function(){
  assert.strictEqual(bookshop1.balance, 0);
})

it("should be able to increase and decrease the shop's balance", function() {
  bookshop1.addToBalance(100);
  assert.strictEqual(bookshop1.balance, 100)
  bookshop1.removeFromBalance(90);
  assert.strictEqual(bookshop1.balance, 10)
})

it("should be able to add books to stock", function() {
  bookshop1.stock.push(book4);
  assert.strictEqual(bookshop1.stock[3], book4);
})

it("should be able to display information about the shop", function() {
  assert.strictEqual(bookshop1.information(), "Bookmarks of Glasgow");
})

it("should be able to list all inventory", function() {
   assert.strictEqual(bookshop1.allStock().length, 3);
})

it("can sell a book and adjust the Store's balance to account for the book being sold", function() {
  bookshop1.sell(book1);
  assert.strictEqual(bookshop1.balance, 10.00);
  assert.strictEqual(bookshop1.stock.length, 2);
})

it("can report the finnancial situation of the Store. Balance and value of inventory", function() {
  assert.strictEqual(bookshop1.financialOverview(), "Bookmarks currently has £48 worth of stock and a balance of £0");
})

xit("should be able to view all books of a given Genre", function() {

})

})

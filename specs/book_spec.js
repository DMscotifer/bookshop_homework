var assert = require('assert');
var Book = require('../models/book.js');
var Bookshop = require('../models/bookshop.js');

describe("Book", function() {

  var book1;
  var book2;
  var book3;
  var book4;

  beforeEach(function() {
    book1 = new Book("The Silmarilion", "J.R.R Tolkien", "Fantasy", true, 10.00);
    book2 = new Book("Crime and Punishment", "Fydor Dostoyevsky", "Drama", true, 8.00);
    book3 = new Book("The Decline and Fall of the Roman Empire", "Edward Gibbon", "History", false, 30.00);
    book4 = new Book("Capital in the 21st Century", "Thomas Pikkety", "Economics", false, 25.00);
});

it("should have a name", function() {
  assert.strictEqual(book1.title, "The Silmarilion");
});

it("should have a price", function() {
  assert.strictEqual(book3.price, 30.00)
});

});

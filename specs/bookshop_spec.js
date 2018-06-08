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
    bookshop1 = new Bookshop("Book'em");
    book1 = new Book("The Silmarilion", "J.R.R Tolkien", "Fantasy", true, 10.00);
    book2 = new Book("Crime and Punishment", "Fydor Dostoyevsky", "Drama", true, 8.00);
    book3 = new Book("The Decline and Fall of the Roman Empire", "Edward Gibbon", "History", false, 30.00);
    book4 = new Book("Capital in the 21st Century", "Thomas Pikkety", "Economics", false, 25.00);
  })

it("should have a name", function() {
  assert.strictEqual(bookshop1.name, "Book'em")
});

it("should have a till that starts at 0", function(){
  assert.strictEqual(bookshop1.till, 0);
})

it("should be able to increase and decrease the value of the till", function() {
  bookshop1.addToTill(100);
  assert.strictEqual(bookshop1.till, 100)
  bookshop1.removeFromTill(90);
  assert.strictEqual(bookshop1.till, 10)
})

})

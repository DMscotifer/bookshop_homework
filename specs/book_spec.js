var assert = require('assert');
var Book = require('../book.js');
var Bookshop = require('../bookshop.js');

describe("Book", function() {

  var book1;
  var book2;
  var book3;
  var book4;

  beforeEach(function() {
    book1 = new Book("The Silmarilion", "J.R.R Tolkien", "Fantasy", true);
    book2 = new Book("Crime and Punishment", "Fydor Dostoyevsky", "Drama", true);
    book3 = new Book("The Decline and Fall of the Roman Empire", "Edward Gibbon", "History", false);
    book4 = new Book("Capital in the 21st Century", "Thomas Pikkety", "Economics", false);
})

it("should have a name", function() {
  assert.strictEqual(book1.title, "The Silmarilion");
});

})

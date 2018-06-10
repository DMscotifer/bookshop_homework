const Book = function(title, author, genre, fictional, price) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.fictional = fictional;
  this.price = price;
}

Book.prototype.details = function() {
  return(book.title + " by " + book.author + "\n");
}

module.exports = Book

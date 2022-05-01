const getTheTitles = function(books) {

    var titles = books.map(function(book) {
        return book.title;
      });

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

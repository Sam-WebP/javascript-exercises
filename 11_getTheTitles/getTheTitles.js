const getTheTitles = function(books) {
    let titleArr = []; 
	books.forEach(function(book) {
  	let title = book.title;
    titleArr.push(title);
  });
  return titleArr;
};
// Do not edit below this line
module.exports = getTheTitles;

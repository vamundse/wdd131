// counting reviews on review.html
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
numReviews++;
localStorage.setItem("numReviews-ls", numReviews);
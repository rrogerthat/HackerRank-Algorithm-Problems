//HackerRank: Drawing Book (Easy) [Javascript] 
//Link: https://www.hackerrank.com/challenges/drawing-book/problem

//NOTES written before solving problem:
// FRONT:
// 	 Page 1, no flip
// 	 Page 2 & 3, flip 1 page
// 	 Page 4 & 5, flip 2 pages
// 	 Page 6 & 7, flip 3 pages


// BACK:							
// Page 6 & 7, no flip		
// Page 4 & 5, flip 1 page		Math.floor(p / 2) = |2 - 3| = 1	
// Page 2 & 3, flip 2 page		Math.floor(p / 2) = |1 - 3| = 2
// Page 1, flip 3 pages

// 7 / 2 = 3.5	Greater than (or EQUAL) 4, BACK
//LESS THAN 4, FRONT

function pageCount(n, p) {
    if (p === 1 || p === n || (p === n - 1 && n % 2 !== 0) ) return 0;

    if ( p <= Math.floor(n / 2) ) {
        console.log("FRONT");
        return Math.floor(p / 2);
    }
    else {
        console.log("BACK");
        return Math.abs(Math.floor(p / 2) - Math.floor(n / 2));
    }
}

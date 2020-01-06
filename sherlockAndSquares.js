//HackerRank: Sherlock and Squares (Easy) [Javascript]
//Link: https://www.hackerrank.com/challenges/sherlock-and-squares/problem

//Notes:
//1 2 3 4 5 6 7 8 9 10 11
//1 4 9 16 25 36 49 64 81 100 121		//square integers
//  + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 + 21	//find pattern to minimize loops
//From square integer, sq integer + square root + (sq root + 1)  = next sq integer

function squares(a, b) {
  let count = 0;
  for (let i = a; i <= b; i++) {
    if (Number.isInteger(Math.sqrt(i)) === true) {
      count++;
      i += Math.sqrt(i) * 2;
    }
  }
  return count;
}

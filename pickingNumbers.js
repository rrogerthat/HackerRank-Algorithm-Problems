//HackerRank: Picking Numbers (Easy) [Javascript]
//Link: https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
  let arrSort = a.sort((a, b) => a - b);
  let arr1 = [[arrSort[0]]];
  let longest = 1;
  let count = 1;
  for (let i = 1; i < arrSort.length; i++) {
    if (Math.abs(arr1[arr1.length - 1][0] - arrSort[i]) <= 1) {
      arr1[arr1.length - 1].push(arrSort[i]);
      count++;
      if (count > longest) longest = count;
    }
    else {
      arr1.push([arrSort[i]]);
      count = 1;
    }
  }
  return longest;
}

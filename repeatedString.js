//HackerRank: Repeated String (Easy) [Javascript] 
//Link: https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
    let count = s.length;
    let strBeg = s.split("");
    let total = 0;
    
    for (let letter of strBeg) {
        if (letter === "a") total++;
    }

    let final = Math.trunc(n / count) * total;
    // console.log(final);

    let endCount = n % count;
    // console.log(endCount);
    for (let i = 0; i < endCount; i++) {
        if (strBeg[i] === "a") final++;
    }
    return final;
}
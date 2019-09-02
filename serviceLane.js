//HackerRank: Service Lane (Easy) [Javascript] 
//Link: https://www.hackerrank.com/challenges/service-lane/problem
//Note: In this problem, the function and test code is missing parameter 'width', so added it.
//Note2: Avoid time complexity of O(n^2) with nested for loops.

function serviceLane(n, cases, width) {
    let maxSize = [];
    
    for (let i = 0; i < cases.length; i++) {
        let min = Infinity;
        for (let j = cases[i][0]; j <= cases[i][1]; j++) {
            if (width[j] < min) min = width[j];
        }
        maxSize.push(min);
    }
    return maxSize;
}
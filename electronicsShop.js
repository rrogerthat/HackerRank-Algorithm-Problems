    
//HackerRank: Electronics Shop (Easy) [Javascript] 
//Link: https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
    let greatest = -1;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let total = keyboards[i] + drives[j];
            if (total > greatest && total <= b) {
                greatest = total;
            }
        }
    }
    return greatest;
}
//HackerRank: Jumping on the Clouds (Easy) [Javascript] 
//Link: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    let jumps = 0;
    let cloud = 0;

    while (cloud < c.length - 1) {
        if (c[cloud + 2] !== 1) {
            cloud += 2;
        }
        else cloud++;
        jumps++;
    }
    return jumps;
}
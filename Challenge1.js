// Create the calcAverage arrow function
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Calculate the average for both teams
// Data 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

// Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

// Create the checkWinner function
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins!');
    }
}

// CheckWinner
checkWinner(avgDolphins1, avgKoalas1); // Data 1
checkWinner(avgDolphins2, avgKoalas2); // Data 2
const calcDateFromUnixTime = (unixTime) => {
    const date = new Date(unixTime);
    return date;
};

export default (scores) => {
    const highestScoresArray = [];
    let currentDate;
    let highestScore = 0;
    for (let i = scores.length - 1; i >= 0; i--) {
        try {
            const date = calcDateFromUnixTime(scores[i].date);
            const formattedDate = `${date.getDay()}:${date.getMonth()}:${date.getFullYear()}`;
            highestScore = Math.max(highestScore, scores[i].score);
            if (!currentDate) {
                currentDate = formattedDate;
                highestScoresArray.push(scores[i]);
            } else if (currentDate !== formattedDate) {
                currentDate = formattedDate;
                highestScoresArray.push(scores[i]);
            } else {
                if (
                    highestScoresArray[highestScoresArray.length - 1].score <
                    scores[i].score
                ) {
                    highestScoresArray[highestScoresArray.length - 1] =
                        scores[i];
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
    console.log(highestScore);
    return {
        dailyHighScores: highestScoresArray,
        highScore: highestScore,
    };
};

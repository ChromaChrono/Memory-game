import words from "../words.json";

const randomNumberGenerator = (max = 1489) => {
    return Math.floor(Math.random() * max);
};

export default async (num) => {
    const newWordArray = [];

    for (let i = 0; i < num; i++) {
        newWordArray.push(words.words[randomNumberGenerator()]);
    }

    return newWordArray;
};

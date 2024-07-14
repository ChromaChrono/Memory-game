export default async (num) => {
    const ninjaApiKey = import.meta.env.VITE_NINJAAPIKEY;
    const words = [];
    for (let i = 0; i < num; i++) {
        await fetch("https://api.api-ninjas.com/v1/randomword?type=noun", {
            headers: { "X-Api-Key": ninjaApiKey },
        })
            .then((response) => response.json())
            .then((data) => {
                words.push(data.word[0]);
            });
    }
    return words;
};

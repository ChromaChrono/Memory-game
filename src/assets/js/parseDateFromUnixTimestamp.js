export default (unixTimestamp) => {
    const newDate = [];
    const fullDate = new Date(unixTimestamp);
    newDate.push(fullDate.getDay());
    newDate[0] < 10 ? (newDate[0] = `0${newDate[0]}`) : null;
    newDate.push(fullDate.getMonth());
    newDate[1] < 10 ? (newDate[1] = `0${newDate[1]}`) : null;
    newDate.push(fullDate.getFullYear());
    return newDate.join("-");
};

function countCharOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            count++;
        }
    } 
    return count;
}
module.exports = countCharOccurrences;
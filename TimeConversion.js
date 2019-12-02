// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
    let intHour = parseInt(s, 10);
    if (s[8] === 'P' && intHour < 12) {
        intHour += 12;
    }
    if (s[8] === 'A' && intHour === 12) {
        intHour -= 12;
    }
    let militaryTime = intHour + s.substr(2,6);
    militaryTime = militaryTime.padStart(8, '0');
    return militaryTime;
}
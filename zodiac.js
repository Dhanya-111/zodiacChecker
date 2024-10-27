
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); // "17-6"
var zodiacText = "";
var zodiacPic = "assets/logo.png";

switch (month) {
    case 1:
        if(day <= 19) {
            zodiacText = "Capricorn";
            zodiacPic = "assets/capricorn.png";
        }
        else {
            zodiacText = "Aquarius";
            zodiacPic = "assets/aquarius.png";
        }
        break;
    case 2:
        if(day <= 18) {
            zodiacText = "Aquarius";
            zodiacPic = "assets/aquarius.png";
        }
        else {
            zodiacText = "Pisces";
            zodiacPic = "assets/pisces.png";
        }
        break;
    case 3 :
        if(day <= 20) {
            zodiacText = "Pisces";
            zodiacPic = "assets/pisces.png";
        }
        else {
            zodiacText = "Aries";
            zodiacPic = "assets/aries.png";
        }
        break;
    case 4 :
        if(day <= 19) {
            zodiacText = "Aries";
            zodiacPic = "assets/aries.png";
        }
        else {
            zodiacText = "Taurus";
            zodiacPic = "assets/taurus.png";
        }
        break;
    case 5 :
        if(day <= 20) {
            zodiacText = "Taurus";
            zodiacPic = "assets/taurus.png";
        }
        else {
            zodiacText = "Gemini";
            zodiacPic = "assets/gemini.png";
        }
        break;
    case 6 :
        if(day <= 21) {
            zodiacText = "Gemini";
            zodiacPic = "assets/gemini.png";
        }
        else {
            zodiacText = "Cancer";
            zodiacPic = "assets/cancer.png";
        }
        break;
    case 7 :
        if(day <= 22) {
            zodiacText = "Cancer";
            zodiacPic = "assets/cancer.png";
        }
        else {
            zodiacText = "Leo";
            zodiacPic = "assets/leo.png";
        }
        break;
    case 8 :
        if(day <= 22) {
            zodiacText = "Leo";
            zodiacPic = "assets/leo.png";
        }
        else {
            zodiacText = "Virgo";
            zodiacPic = "assets/virgo.png";
        }
        break;
    case 9 :
        if(day <= 22) {
            zodiacText = "Virgo";
            zodiacPic = "assets/virgo.png";
        }
        else {
            zodiacText = "Libra";
            zodiacPic = "assets/libra.png";
        }
        break;
    case 10 :
        if(day <= 23) {
            zodiacText = "Libra";
            zodiacPic = "assets/libra.png";
        }
        else {
            zodiacText = "Scorpio";
            zodiacPic = "assets/scorpio.png";
        }
        break;
    case 11 :
        if(day <= 21) {
            zodiacText = "Scorpio";
            zodiacPic = "assets/scorpio.png";
        }
        else {
            zodiacText = "Sagittarius";
            zodiacPic = "assets/sagittarius.png";
        }
        break;
    case 12 :
        if(day <= 21) {
            zodiacText = "Sagittarius";
            zodiacPic = "assets/sagittarius.png";
        }
        else {
            zodiacText = "Capricorn";
            zodiacPic = "assets/capricorn.png";
        }
        break;
    default :
        zodiacText = "Unable to get Today's Sign";
        zodiacPic = "assets/logo.png";
        break;

}

console.log("zodiacText", zodiacText);
document.getElementById("zodiacElement").innerHTML = zodiacText;
document.getElementById("dateElement").innerHTML = "Today is:<br>" + currentDate;
var image = document.getElementById('zodiacImg').src = zodiacPic;
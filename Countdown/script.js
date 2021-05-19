const deadline = document.getElementById("time")
const days = document.getElementById("day");
const hours = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("seconds");
const items = document.querySelectorAll(".text")

const newYear = "2022 jan 1"
let futureDate = new Date(newYear);
// let futureDate = new Date(2021, 0, 1, 1, 0, 0);

const futureTime = futureDate.getTime();
console.log(futureTime)

function getRemainingTime(){
    const currentTime = new Date().getTime();
    const t =  futureTime - currentTime;

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    
    let days = t/oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t%oneDay) / oneHour);
    let minutes = Math.floor((t%oneHour)/oneMinute);
    let seconds = Math.floor((t%oneMinute)/1000);

    const values = [days, hours, minutes, seconds];

    function format(s, i){
        if(item< 10){
            return item = `0${item}`
        }
        return item;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    })
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h1> Sorry, the deadline has reached.</h1>`
    }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();






// function clock(){
//     let y = new Date().getFullYear();
//     let d = new Date().getDate();
//     let m = new Date().getMonth();
//     let h = new Date().getHours();
//     let mi = new Date().getMinutes();
//     const s = new Date().getSeconds()

//     years.innerHTML = y
//     days.innerHTML = d
//     months.innerHTML = m
//     hours.innerHTML = h
//     minutes.innerHTML = mi
//     seconds.innerHTML = s
// }
// setInterval(() => {
//     clock();
// }, 1000);
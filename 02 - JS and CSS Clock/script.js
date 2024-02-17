const secondHand = document.querySelector('.second-hand');
const minutesHand =  document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate()
{
    
    const now = new Date();
    //second
    const seconds = now.getSeconds();
    const secDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegree}deg)`;

    //Minutes
    const minutes= now.getMinutes();
    const minsDegree =((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minsDegree}deg)`;

    //hour
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}


setInterval(setDate,1000);
setDate();
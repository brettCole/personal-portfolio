import React from 'react'
import 'bulma/css/bulma.css'

const TimeOfDay = () => {
  const today = new Date();
  const timeString = today.toLocaleTimeString();
  const timeStringToArray = timeString.split(/:| /);
  const days = {
    'Sunday': [
      "It's Sunday morning!",
      "Make the most of Sunday afternoon.",
      "Oh No! Tomorrow is Monday!"
    ],
    'Monday': [
      "It's Monday morning.",
      "Hope your Monday is productive.",
      "Time to relax you had a busy Monday."
    ],
    'Tuesday': [
      "Happy Tuesday morning.",
      "Hope your Tuesday is productive.",
      "Time to relax it's almost hump day"
    ],
    'Wednesday': [
      "HUMP DAY!",
      "Hang in there Wednesday is almost over.",
      "Almost half way through the week."
    ],
    'Thursday': [
      "Happy Thursday morning",
      "Hang in there Thursday is almost over.",
      "Thursday is wrapping up."
    ],
    'Friday': [
      "Finally Friday morning.",
      "Hang in there Saturday is almost here.",
      "Finally, let the weekend begin."
    ],
    'Saturday': [
      "Let the weekend begin.",
      "Enjoying your weekend?",
      "Saturday is coming to a close."
    ]
  }
  let hour = timeStringToArray[timeStringToArray.length - 1] === 'PM' ? 12 + parseInt(timeStringToArray[0], 10) : parseInt(timeStringToArray[0], 10);
  return [today, timeStringToArray, days, hour];
}

const TimeOfDayMessage = () => {
  const [today, timeArray, days, hour] = TimeOfDay();

  let whichSaying;
  if (hour === 24 || hour <= 12) {
    whichSaying = 0
  } else if (hour >= 12 && parseInt(timeArray[1], 10) >= 1 && hour <= 17 && parseInt(timeArray[1], 10) <= 59) {
    whichSaying = 1
  } else {
    whichSaying = 2
  }

  if (Object.keys(days)[today.getDay()] === 'Monday' && whichSaying === 0 || Object.keys(days)[today.getDay()] === 'Saturday' && whichSaying === 2 || Object.keys(days)[today.getDay()] === 'Sunday' && whichSaying === 2) {
    return (
      <p className='has-text-centered is-inline'style={{'fontFamily':'Montserrat', 'fontWeight':'200'}}>{days[Object.keys(days)[today.getDay()]][whichSaying]}
        <span className='is-paddingless' role='img' aria-label='weary face'>😩</span>
      </p>
    )
  } else {
    return (
      <p className='has-text-centered is-inline' style={{'fontFamily':'Montserrat', 'fontWeight':'200'}}>{days[Object.keys(days)[today.getDay()]][whichSaying]}</p>
    )
  }
}

export default TimeOfDayMessage;


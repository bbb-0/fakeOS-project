export const displayTime = document.querySelector(".display-time");
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true });
  setTimeout(showTime, 1000);
}
showTime();

export const updateDate() {
  let today = new Date();

  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month]];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}
updateDate();
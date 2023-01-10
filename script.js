document.body.style.overflow = 'hidden';


// Dropdown

function navDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropdown__button')) {
    let myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }


// Date / Time

// let time = document.getElementById("display-time");

// setInterval(() => {
// let dt = new Date();
// time.innerHTML = dt.toLocaleTimeString();
// },1000)


const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true });
  setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
  let today = new Date();

  // return number
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


/*
https://www.w3schools.com/howto/howto_js_slideshow.asp
*/


// photo gallery

const images = [...document.querySelectorAll('.modal-images')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
});

const updateImage = (i) => {
    let path = `img/img${i+1}.png`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
};

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
});

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
});

// Text notes
const text = [...document.querySelectorAll('.modal-notes')];

const notePopup = document.querySelector('.note-popup');

const noteCloseBtn = document.querySelector('.note-close-btn');

text.forEach((item, i) => {
  item.addEventListener('click', () => {
      notePopup.classList.toggle('active');
  })
});

noteCloseBtn.addEventListener('click', () => {
  notePopup.classList.toggle('active');
})
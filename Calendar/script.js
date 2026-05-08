const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentDate = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const calendarGrid = document.getElementById("calendar-grid");

function renderCalendar(){
    calendarGrid.innerHTML = "";

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const day = currentDate.getDay();
    const date = currentDate.getDate();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    dateEl.innerHTML = (date < 10 ? "0" : "") + date;
    dayEl.innerHTML = weekDays[day];
    monthEl.innerHTML = allMonths[month];
    yearEl.innerHTML = year;

    for(let x = firstDay; x > 0; x--){
        const div = document.createElement("div");
        div.classList.add("fade");
        div.innerText = prevLastDate - x + 1;
        calendarGrid.appendChild(div);
    }

    for(let i = 1; i <= lastDate; i++){
        const div = document.createElement("div");
        div.innerText = i;
        
        if(
            i === new Date().getDate() && 
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
        ){
            div.classList.add("today");
        }
        calendarGrid.appendChild(div);
    }
}

calendarGrid.style.opacity = "0";

setTimeout(() => {
    renderCalendar();
    calendarGrid.style.opacity = "1";
}, 150);

nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

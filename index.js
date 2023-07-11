// API KEY 
const API_KEY = "8a0709ef629dc781dcae8b89fb943008";
// Lat and Lon
let LAT = "49.24";
let LON = "-123.11";

// 5 Days Forcast Component
const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;


// Function to make an API call and save the five days array into an array call "data array"
const fetchData = () => {
    // eslint-disable-next-line
    axios.get(URL)
        .then((response) => {
            const data = response.data.list;
            const data_array = [];
            for(let i = 7; i < 40; i++) {
                if(i ==  7 || i == 15 || i == 23 || i == 31 || i == 39 || i == 47) {
                    data_array.push(data[i]);
                }
            }
            return data_array;
            }
        )
        .then((array) => {
            console.log(array);
            array.forEach((item) =>{
                create_weather_forcast(item);
            })
        })
        .catch((error) => {
            console.log(error);
        })
}

// Function that generate each day weather forcast
{/* <div class="days__cont">
            <p class="day">Wednesday</p>
            <p class="day__temp">20</p>
            <p class="day__wind">30</p>
​
        </div> */}
const parent_wrapper = document.querySelector(".days");
console.log(parent_wrapper);
const create_weather_forcast = (weather_obj) => {
    // Fetch day, temp, and wind speec
    const date = new Date(parseInt(`${weather_obj.dt}000`));
    const day_txt = date.toString().split(" ")[0];
    const temp_txt = `${(weather_obj.main.temp-273).toFixed(0)} deg`;
    const wind_txt = `${(weather_obj.wind.speed)} mph`;
    // Create Parent div 
    const parent = document.createElement("div");
    parent.classList.add("days__cont");
    // Create Children div 
        // day
    const day = document.createElement("p");
    day.classList.add("day");
    day.innerText = day_txt;
        // Temperature
    const temp = document.createElement("p");
    temp.classList.add("day__temp")
    temp.innerText = temp_txt;
        // Wind
    const wind = document.createElement("p");
    wind.classList.add("day__wind");
    wind.innerText = `Wind: ${wind_txt}`;
    // Append to Parent div
    parent.appendChild(day);
    parent.appendChild(temp);
    parent.appendChild(wind);
    // Append to Main div
    parent_wrapper.appendChild(parent);
} 
// Call Fetch Data Function
fetchData();



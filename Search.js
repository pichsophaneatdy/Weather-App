// State 
let singleDisplay = false;
// API KEY 
const API_KEY = "8a0709ef629dc781dcae8b89fb943008";
let city = "";
// Search URL 
let URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=${API_KEY}`;
// Get element
const city_input = document.querySelector("#city_input");
const search_btn = document.querySelector("#search_btn");
const main = document.querySelector(".cities_wrapper");
const singleCity = document.querySelector(".weather__data");
const search = document.querySelector(".search");
const title = document.querySelector(".location");
// When the user click on search
search_btn.addEventListener("click", () => {
    let city_query = city_input.value;
    // Fetch Cities from API
        // eslint-disable-next-line
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city_query}&limit=10&appid=${API_KEY}`)
        .then((data) => {
            main.innerText = "";
            data.data.forEach((city) => {
                createCity(city);
            })
            city_input.value = "";
        })
        .catch((error) => console.log(error));
})
//
function temperature(lat, lon){
    const parent = document.querySelector(".weather__data");
    // eslint-disable-next-line
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8a0709ef629dc781dcae8b89fb943008`)
    .then((result) => {
    // console.log(result);
    // // Top container
    // const parentContainer = document.querySelector(".topContainers");
    // console.log(parentContainer);
    // //Conversion and main temp
    // const kelvin = result.data.main.temp;
    // const celcius = (kelvin - 273).toFixed(0);
    // console.log(celcius);
    // //MinTemp
    // const minCelcius = (result.data.main.temp_min - 273).toFixed(0);
    // minCelcius.innerText = celcius;
    // console.log(minCelcius);

    // //maxTemp
    // const maxCelcius = (result.data.main.temp_max - 273).toFixed(0);
    // console.log(maxCelcius)

    // //Wind
    // const windSpeed = result.data.wind.speed.toFixed(0);
    // console.log(windSpeed)

    // // Sunrise
    // let sunrise = new Date(parseInt(`${result.data.sys.sunrise}000`));
    // const hourMorning = sunrise.getHours();
    // const min = sunrise.getMinutes();
    // const sunriseFullTime = `${hourMorning}:${min}`;
    // console.log(sunriseFullTime)
    
    // // Sunset
    // let sunset = new Date(parseInt(`${result.data.sys.sunset}000`));
    // const hourEvening = sunset.getHours();
    // const minute = sunset.getMinutes();
    // const sunsetFullTime = `${hourEvening}:${minute}`;
    // console.log(sunsetFullTime)

    // //Switching to creating the HTML
    // //TempDiv
    // const tempDiv = document.createElement('div');
    // tempDiv.classList.add('temp');
    // const tempTitle = document.createElement('h2');
    // tempTitle.innerText = celcius;
    // tempTitle.classList.add('temp__temp');
    // const tempDeg = document.createElement('h3');
    // tempDeg.classList.add('deg')
    // tempDeg.innerText = 'deg'

    // //TempMax and Min
    // const minMax = document.createElement('h4')
    // minMax.classList.add('temp__minMax')
    // minMax.innerText = `${minCelcius} / ${maxCelcius}`;

    // //append Temp
    // tempDiv.appendChild(tempTitle);
    // tempDiv.appendChild(tempDeg);
    // tempDiv.appendChild(minMax);
    // parent.appendChild(tempDiv);
    // // minMax container
    // const minMaxContainer = document.createElement("div");
    // minMaxContainer.classList.add("minMax");
    // //windDiv
    // const windDiv = document.createElement('div');
    // windDiv.classList.add('wind__wind');
    // const windText = document.createElement('p');
    // windText.classList.add('wind__head');
    // windText.innerText = 'Wind'
    // const windNum = document.createElement('p');
    // windNum.classList.add('wind-wind');

    // //append wind
    // windNum.innerText = `${windSpeed} mph`;
    // windDiv.appendChild(windText);
    // windDiv.appendChild(windNum);
    // parent.appendChild(windDiv);  

    // //riseDiv
    // const riseDiv = document.createElement('div');
    // riseDiv.classList.add('sunrise');
    // const riseText = document.createElement('p');
    // riseText.classList.add('sun__head');
    // riseText.innerText = 'Sunrise'
    // const riseHour = document.createElement('p');
    // riseHour.classList.add('sun__time');
    // riseHour.innerText = sunriseFullTime;

    // //append sunrise
    // riseDiv.appendChild(riseText);
    // riseDiv.appendChild(riseHour);
    // parent.appendChild(riseDiv);

    // //setDiv
    // const setDiv = document.createElement('div');
    // setDiv.classList.add('sunset');
    // const setText = document.createElement('p');
    // setText.classList.add('set__head');
    // setText.innerText = 'Sunset'
    // const setHour = document.createElement('p');
    // setHour.classList.add('set__time');
    // setHour.innerText = sunsetFullTime;
    
    // //append sunset
    // setDiv.appendChild(setText);
    // setDiv.appendChild(setHour);
    // parent.appendChild(setDiv);
    // // Append to minMaxContainer
    // minMaxContainer.appendChild(windDiv);
    // minMaxContainer.appendChild(riseDiv);
    // minMaxContainer.appendChild(setDiv);
    // // Append to top container
    // parentContainer.appendChild(tempDiv);
    // parentContainer.appendChild(minMaxContainer);

    /// Test
    console.log(result);
    // Top container
    const parentContainer = document.querySelector(".topContainers");
    console.log(parentContainer);
    //Conversion and main temp
    const kelvin = result.data.main.temp;
    const celcius = (kelvin - 273).toFixed(0);
    console.log(celcius);

    //MinTemp
    const minCelcius = (result.data.main.temp_min - 273).toFixed(0);
    minCelcius.innerText = celcius;
    console.log(minCelcius);

    //maxTemp
    const maxCelcius = (result.data.main.temp_max - 273).toFixed(0);
    console.log(maxCelcius)

    //Wind
    const windSpeed = result.data.wind.speed.toFixed(0);
    console.log(windSpeed)

    // Sunrise
    let sunrise = new Date(parseInt(`${result.data.sys.sunrise}000`));
    const hourMorning = sunrise.getHours();
    const min = sunrise.getMinutes();
    const sunriseFullTime = `${hourMorning}:${min}`;
    console.log(sunriseFullTime)
    
    // Sunset
    let sunset = new Date(parseInt(`${result.data.sys.sunset}000`));
    const hourEvening = sunset.getHours();
    const minute = sunset.getMinutes();
    const sunsetFullTime = `${hourEvening}:${minute}`;
    console.log(sunsetFullTime)

    //Switching to creating the HTML
    //TempDiv
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('temp');
    const tempTitle = document.createElement('h2');
    tempTitle.innerText = celcius;
    tempTitle.classList.add('temp__temp');
    const tempDeg = document.createElement('h3');
    tempDeg.classList.add('deg')
    tempDeg.innerText = 'deg'

    //TempMax and Min
    const minMax = document.createElement('h4')
    minMax.classList.add('temp__minMax')
    minMax.innerText = `${minCelcius} / ${maxCelcius}`;

    //append Temp
    tempDiv.appendChild(tempTitle);
    tempDiv.appendChild(tempDeg);
    tempDiv.appendChild(minMax);
    parent.appendChild(tempDiv);
    // minMax container
    const minMaxContainer = document.createElement("div");
    minMaxContainer.classList.add("minMax");
    //windDiv
    const windDiv = document.createElement('div');
    windDiv.classList.add('wind__wind');
    const windText = document.createElement('p');
    windText.classList.add('wind__head');
    windText.innerText = 'Wind'
    const windNum = document.createElement('p');
    windNum.classList.add('wind-wind');

    //append wind
    windNum.innerText = `${windSpeed} mph`  ;
    windDiv.appendChild(windText);
    windDiv.appendChild(windNum);
    parent.appendChild(windDiv);  

    //riseDiv
    const riseDiv = document.createElement('div');
    riseDiv.classList.add('sunrise');
    const riseText = document.createElement('p');
    riseText.classList.add('sun__head');
    riseText.innerText = 'Sunrise'
    const riseHour = document.createElement('p');
    riseHour.classList.add('sun__time');
    riseHour.innerText = sunriseFullTime;

    //append sunrise
    riseDiv.appendChild(riseText);
    riseDiv.appendChild(riseHour);
    parent.appendChild(riseDiv);

    //setDiv
    const setDiv = document.createElement('div');
    setDiv.classList.add('sunset');
    const setText = document.createElement('p');
    setText.classList.add('set__head');
    setText.innerText = 'Sunset'
    const setHour = document.createElement('p');
    setHour.classList.add('set__time');
    setHour.innerText = sunsetFullTime;
    
    //append sunset
    setDiv.appendChild(setText);
    setDiv.appendChild(setHour);
    parent.appendChild(setDiv);
    // Append to minMaxContainer
    minMaxContainer.appendChild(windDiv);
    minMaxContainer.appendChild(riseDiv);
    minMaxContainer.appendChild(setDiv);
    // Append to top container
    parentContainer.appendChild(tempDiv);
    parentContainer.appendChild(minMaxContainer);
    /// Test
}); 
}
// Create each city 
const createCity = (city) => {
    // Neat's part
    // Parent
    const parent2 = document.createElement("div");
    // Children
    parent2.classList.add("city");
    const name = document.createElement("p");
    name.innerText = `City name: ${city.name}`;
    const state = document.createElement("p");
    state.innerText = `State/Province: ${city.state}`;
    const country = document.createElement("p");
    country.innerText = `Country: ${city.country}`;
    const btn = document.createElement("button");
    btn.classList.add("city_btn");
    btn.innerText = "Weather forcast";
    // Add Event Listener
    btn.addEventListener("click" , (e) => {
        search.classList.add("display-none");
        singleCity.classList.remove("display-none");
        title.innerText = city.name;
        generateWeatherForecast(city.lat.toFixed(2), city.lon.toFixed(2));
    })
    // Append
    parent2.appendChild(name);
    parent2.appendChild(state);
    parent2.appendChild(country);
    parent2.appendChild(btn);
    // Append to main
    main.appendChild(parent2);
}

// Single City

function generateWeatherForecast(LAT,LON) {
    // 5 Days Forcast Component
    const singleURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

    // Tristain Part
    temperature(LAT, LON);
    // Function to make an API call and save the five days array into an array call "data array"
    const fetchData = () => {
        // eslint-disable-next-line
        axios.get(singleURL)
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
    const parent2_wrapper = document.querySelector(".days");
    const create_weather_forcast = (weather_obj) => {
        // Fetch day, temp, and wind speec
        const date = new Date(parseInt(`${weather_obj.dt}000`));
        const day_txt = date.toString().split(" ")[0];
        const temp_txt = `${(weather_obj.main.temp-273).toFixed(0)} deg`;
        const wind_txt = `${(weather_obj.wind.speed)} mph`;
        // Create parent2 div 
        const parent2 = document.createElement("div");
        parent2.classList.add("days__cont");
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
        wind.innerText = wind_txt;
        // Append to parent2 div
        parent2.appendChild(day);
        parent2.appendChild(temp);
        parent2.appendChild(wind);
        // Append to Main div
        parent2_wrapper.appendChild(parent2);
    } 
    // Call Fetch Data Function
    fetchData();

}

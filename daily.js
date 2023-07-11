const parent = document.querySelector(".weather__data");

function temperature(){
    axios
    .get('https://api.openweathermap.org/data/2.5/weather?lat=49.24&lon=-123.11&appid=8a0709ef629dc781dcae8b89fb943008')
    .then((result) => {
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
    });
    
}
temperature();
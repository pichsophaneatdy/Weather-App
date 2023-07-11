console.log("Is this working");

const weather = document.querySelector(".weather__data");

 weatherData = (weatherData) => {
    for(let i = 0; i < weatherData.length; i++) {
        const weather1 = document.createElement('p');
        weather1.textContent = weatherData[0].main;
        weather.appendChild(weather1);
        
        

        const div1 = document.createElement('p');
        div1.textContent = data[i].clouds.all;
        const div2 = document.createElement('p');

    }
}

// Get weather data 

loadData = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=vancouver,ca&APPID=fda4806b26a90ca5690cc4433ae2c838`)
    .then((result)=> {
        console.log(result.data.weather[0].main);

     
          weatherData(result);
    })

    };
 

loadData();
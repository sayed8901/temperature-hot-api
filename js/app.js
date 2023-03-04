// sample weather API source site: https://openweathermap.org/api

// api key: 
const API_KEY = `2069266a3c291749702c22d9ec5c81fc`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url).then(res => res.json()).then(data => displayTemperature(data));
}

const displayTemperature = data => {
    console.log(data);
    const {main, name, weather} = data;
    setInnerTextById('temperature', main.temp);
    setInnerTextById('city', name);
    setInnerTextById('status',weather[0].main);
    setInnerFieldTextById('search', '');
}
const setInnerTextById = (id, text) => {
    const fieldName = document.getElementById(id);
    fieldName.innerText = text;
}

const setInnerFieldTextById = (id, text) => {
    const fieldName = document.getElementById(id);
    fieldName.value = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search');
    const city = searchField.value;
    loadTemperature(city);
})

loadTemperature('dhaka');
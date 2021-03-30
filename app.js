const my__api__key = '3d6cc698e33448d3ee47b8d4a8010f9c';
const base__api = 'https://api.openweathermap.org/data/2.5/weather';


const get__weather__data = (city) => {
    const url = `${base__api}?q=${city}&units=metric&appid=${my__api__key}`;
    fetch(url)
    .then(response => response.json())
    .then(data => update__data(data))
}

const update__data = (data) => {
    document.getElementById('display__city').innerText = data.name ||  "Unknown location!";
    document.getElementById('desplay__temp').innerText = Math.floor(data.main.temp) ;
    document.getElementById('temp__description').innerText = data.weather[0].main;
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('input__city').value = "";
}

const search__btn = document.getElementById('search__btn');
search__btn.addEventListener('click', () => {
    const city = document.getElementById('input__city').value;
    get__weather__data(city)
})

get__weather__data('Dhaka');
  


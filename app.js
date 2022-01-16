var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')


async function changeWeatherUI(capitalSearch){
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=9534cf23258721d78220e22b0dcb4860`

    let data = await fetch(apiUrl).then(res=> res.json())
    console.log(data);

    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = (data.main.temp - 273.15)-(data.main.temp - 273.15)%1
        value.innerText = temp
        shortDesc.innerText = data.weather[0].main
        time.innerText = new Date().toLocaleString('vi')

        body.setAttribute('class', 'muahe')
        if(temp<=25){
        body.setAttribute('class', 'muathu')
        }
        if(temp<=15){
            body.setAttribute('class', 'muaxuan')
        }
        if(temp<=10){
            body.setAttribute('class', 'muadong')
        }
    }else{
        content.classList.add('hide')
    }
}


search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
        

    }
})

changeWeatherUI('Ha Noi')
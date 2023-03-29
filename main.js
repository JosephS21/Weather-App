

var button= document.querySelector('.button')
var inputValue= document.querySelector('.inputValue')
var cityName= document.querySelector('.name');
var desc= document.querySelector('.desc');
var temp= document.querySelector('.temp');
var min=document.querySelector('.min');
var max=document.querySelector('.max');



button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=523116c5205014418081b6ea5809a81c
    `)
    .then(response => response.json())
    .then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var minValue = data['main']['temp_min'];
    var maxValue = data['main']['temp_max'];


    tempValue= Math.round(((data.main.temp-273.15)*9/5)+32)
    minValue= Math.round(((data.main.temp_min-273.15)*9/5)+32)
    maxValue= Math.round(((data.main.temp_max-273.15)*9/5)+32)


    cityName.innerHTML = nameValue;
    temp.innerHTML =`Current Temperature: ${tempValue}`
    desc.innerHTML =`Weather discription: ${descValue}`
    min.innerHTML = `Min Temperature: ${minValue}`
    max.innerHTML= `Max Temperature: ${maxValue}`

    })

    .catch(err => alert("Something went wrong!"))

})





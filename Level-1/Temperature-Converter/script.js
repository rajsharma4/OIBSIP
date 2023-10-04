const celsiusField = document.getElementById("celsius");
const degree = document.getElementById("degree");
const convertBtn = document.getElementById("btn");
const tempType = document.getElementById("temp-type");

window.addEventListener("load", () =>{
    degree.value = "";
    celsiusField.innerHTML = "";
})

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    btn.innerHTML = "<span>Converting...</span>"
    setTimeout(() => {
       btn.innerHTML = "<span>Convert</span>"
    },1000)
})

function convertToCelsius(){
    let inputValue = degree.value;
    
    setTimeout(() => {
    if(tempType.value = "fahrenheit"){
        const fahrenheitToCelsius = ((inputValue - 32)  * 5/9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg; 
        c`;
    }
    else if(tempType.value = "kelvin"){
        const kelvinToCelsius = (inputValue - 273.15);
        celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;
        c`;
    }
}, 1000)
}
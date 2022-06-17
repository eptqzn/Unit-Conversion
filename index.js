const btnEl = document.getElementById("button-el")
const inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

btnEl.addEventListener("click", function(){
    meters = inputEl.value * 3.281
    feet = inputEl.value / 3.281
    lengthEl.textContent = `${inputEl.value}
    meters =
    ${meters.toFixed(3)} 
    feet | 
    ${inputEl.value} 
    feet = 
    ${feet.toFixed(3)} 
    meters`
    liters = inputEl.value / 4.54609
    gallons = inputEl.value * 4.54609
    volumeEl.textContent = `${inputEl.value}
    liters = 
    ${liters.toFixed(3)} 
    gallons | 
    ${inputEl.value}
    gallons =
    ${gallons.toFixed(3)}  
    liters`
    kilo = inputEl.value * 2.204
    pound = inputEl.value / 2.204
    massEl.textContent = `${inputEl.value}
    kilos = 
    ${kilo.toFixed(3)}
    pounds | 
    ${inputEl.value}
    pounds = 
    ${pound.toFixed(3)}
    kilos`
    inputEl.value = 0
})

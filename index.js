let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let numberEl = document.getElementById("number-el");
let count = 0;
let length = 0;
let volume = 0;
let mass = 0;

function increment() {
    count += +1
    numberEl.textContent = count

}

function convert() {
    meters = count * 3.28084
    feet = count / 3.28084
    lengthEl.textContent = count + " meters " + "= " + meters.toFixed(3) + " feet" + " | " + count + " feet " + "= " + feet.toFixed(3) + " meters"
    liters = count / 4.54609
    gallons = count * 4.54609
    volumeEl.textContent = count + " liters " + "= " + liters.toFixed(3) + " gallons" + " | " + count + " gallons " + "= " + gallons.toFixed(3) + " liters"
    kilo = count * 2.20462
    pound = count / 2.20462
    massEl.textContent = count + " kilos " + "= " + kilo.toFixed(3) + " pounds" + " | " + count + " pounds " + "= " + pound.toFixed(3) + " kilos"
    count = 0
    numberEl.textContent = count
}

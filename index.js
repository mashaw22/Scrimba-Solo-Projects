let unit1 = 0
const originalUnit = document.getElementById("original-unit")
const meters1 = document.getElementById("original-meters")
const feet1 = document.getElementById("original-feet")
const liters1 = document.getElementById("original-liters")
const gallons1 = document.getElementById("original-gallons")
const kilos1 = document.getElementById("original-kilos")
const pounds1 = document.getElementById("original-pounds")

const meters2 = document.getElementById("new-meters")
const feet2 = document.getElementById("new-feet")
const liters2 = document.getElementById("new-liters")
const gallons2 = document.getElementById("new-gallons")
const kilos2 = document.getElementById("new-kilos")
const pounds2 = document.getElementById("new-pounds")
const input = document.getElementById("input")
const button = document.getElementById("button")

button.addEventListener("click", changeUnits)

function changeUnits() {
    if (input.value) {
        unit1 = input.value
        originalUnit.textContent = unit1
        meters1.textContent = unit1
        feet1.textContent = unit1
        liters1.textContent = unit1
        gallons1.textContent = unit1
        kilos1.textContent = unit1
        pounds1.textContent = unit1
        convertUnits()
        input.value = ""
    }
}


function convertUnits() {
    meters2.textContent = Math.round(unit1/3.2808399 * 1000)/1000
    feet2.textContent = Math.round(unit1 * 3.2808399 * 1000)/1000
    liters2.textContent = Math.round(unit1 * 3.78541178 * 1000)/1000
    gallons2.textContent = Math.round(unit1/3.78541178 * 1000)/1000
    kilos2.textContent = Math.round(unit1/2.20462262 * 1000)/1000
    pounds2.textContent = Math.round(unit1 * 2.20462262 * 1000)/1000
}
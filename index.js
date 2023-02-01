
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204
const inputNumber = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")



function convert(input){
   length(input)
   volume(input)
   mass(input)
  inputNumber.value = " "

}

function length(input){
   let feet= (input * meterToFeet).toFixed(3);
   let metres =  (input / meterToFeet).toFixed(3);
   lengthResult.textContent = `${input} meters = ${feet} feet | ${input} feets = ${metres} meters`
}
function volume(input){
   let gallons = (input * literToGallon).toFixed(3);
   let liters =  (input / literToGallon).toFixed(3);
   volumeResult.textContent = `${input} litres = ${gallons} gallons | ${input} gallons = ${liters} litres`
}
function mass(input){
   let klbs= (input * kiloToPound).toFixed(3);
   let pounds =  (input / kiloToPound).toFixed(3);
   massResult.textContent = `${input} klbs = ${klbs} pounds | ${input} pounds = ${pounds} klbs`
}



convertBtn.addEventListener('click', () => convert(inputNumber.value))
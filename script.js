document.addEventListener('DOMContentLoaded', function () {

const listOfCity = document.getElementById('list_city');

fetch('./City.txt')
.then(response => response.text())
.then(result => {
        let arCity = result.split('\r\n');
        for(let i = 0; i < arCity.length; i++) {
            listOfCity.innerHTML += `<option value = "s${[i]}">${arCity[i]}</option>`;
        }
})

console.log(listOfCity);

$('#txt_phone').mask('+7 (999) 999-99-99');


})
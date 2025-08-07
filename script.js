document.addEventListener('DOMContentLoaded', function () {

//Переменные
let name = document.getElementById('txt_name').value;
let phone = document.getElementById('txt_phone').value;
let email = document.getElementById('txt_email').value;
let company = document.getElementById('txt_company').value;
const msg = document.querySelector('.pushMsg');

const validateEmail = (email) => {
    const atSymbol = email.indexOf('@');
    const dot = email.indexOf('.');
    return atSymbol > 0 && dot > atSymbol;
}

//Список городов при выборе
const listOfCity = document.getElementById('list_city');

fetch('./City.txt')
.then(response => response.text())
.then(result => {
        let arCity = result.split('\r\n');
        for(let i = 0; i < arCity.length; i++) {
            listOfCity.innerHTML += `<option value = "s${[i]}">${arCity[i]}</option>`;
        }
})
//Маска для телефона
$('#txt_phone').mask('+7 (999) 999-99-99');

//Кнопка "Отправить"
$('.btn').click(function() {
    if( (name !== null) && (phone !== null) && (validateEmail(email) == true) && (company !== null) ) {
        $('.btnContent').css("visibility" , "hidden").addClass('loader').css("visibility", "visible")
        setTimeout( () =>
            { msg.innerHTML = "Отправлено!" 
                location.reload()
            }, 5000)
    } else if (validateEmail(email) == false) {
        $('.pushMsg').addClass('pushMsgAlert');
        msg.innerHTML = "Неправильно заполнен email!";
    }
})

})
let blockButton = document.querySelector('.block_button'),
modalWrapper = document.querySelector('.modal_wrapper'),
modalClose = document.querySelector('.modal_close'),
userButton = document.querySelector('.user_button'),
userNull = document.querySelector('.user_null'),
userEnter = document.querySelector('.user_enter'),
messageError = document.querySelector('.message_error'),
userId = localStorage.getItem('idUser'),
buttonArray = document.querySelectorAll('.button_order');

blockButton.addEventListener('click', function(){
    modalWrapper.classList.add('show');
})

modalClose.addEventListener('click', function(){
    modalWrapper.classList.remove('show');
})


if(userId){
    showCoins(userId);
}



userButton.addEventListener('click', async function(){
    let response = await fetch('/backend/files/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({login: document.querySelector('#user_name').value})
    });
    
    let result = await response.json();
    console.log(result);
    if(result.id){
        userNull.classList.add('hidden');
        userEnter.classList.remove('hidden');
        messageError.classList.add('hidden');
        localStorage.setItem('idUser', result.id);
    }else{
        messageError.classList.remove('hidden');
    }
})

async function showCoins(idUser) {
    let responseUser = await fetch('/backend/files/user.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({id: idUser})
    });
    var resultUser = await responseUser.json();
    userNull.classList.add('hidden');
    userEnter.classList.remove('hidden');
    let userLength = resultUser.length;
    for (let i = 0; i <= buttonArray.length; i++) {
        if(i <= userLength && buttonArray[i].getAttribute('data-id') == resultUser[i].product_id){
            buttonArray[i].classList.add('active');
            buttonArray[i].textContent = 'Уже использовано';
            buttonArray[i].setAttribute('disabled', true)
        }
    }
}
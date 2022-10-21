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
    showProductBuy(userId);
    
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

buttonArray.forEach(function(button) {
	button.addEventListener('click', function(){
        let productId = this.getAttribute('data-id');
        orderBuy(userId, productId, this);
    })
});

async function orderBuy(idUser, productId, button) {
    let responseUser = await fetch('/backend/files/order.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({user_id: idUser, product_id: productId})
    });
    let resultOrder = await responseUser.json();
    if(resultOrder){
        button.classList.add('active');
        button.textContent = 'Уже использовано';
        button.setAttribute('disabled', true)
    }
    
}

async function showProductBuy(idUser) {
    let responseUser = await fetch('/backend/files/user.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({id: idUser})
    });
    let resultUser = await responseUser.json();
    userNull.classList.add('hidden');
    userEnter.classList.remove('hidden');
    let userLength = resultUser.length;
    resultUser.forEach(function(el) {
        let num = el.product_id - 1
        if(buttonArray[num].getAttribute('data-id') == el.product_id){
            buttonArray[num].classList.add('active');
            buttonArray[num].textContent = 'Уже использовано';
            buttonArray[num].setAttribute('disabled', true)
        }
    })
}


let blockButton = document.querySelector('.block_button'),
modalWrapper = document.querySelector('.modal_wrapper'),
modalClose = document.querySelector('.modal_close'),
userButton = document.querySelector('.user_button'),
userNull = document.querySelector('.user_null'),
userEnter = document.querySelector('.user_enter'),
messageError = document.querySelector('.message_error'),
userId = localStorage.getItem('idUser'),
buttonArray = document.querySelectorAll('.button_order'),
price = document.querySelector('.block_user--coins .price');
logout = document.querySelector('.logout'),
inputUser = document.querySelector('#user_name');


blockButton.addEventListener('click', function(){
    modalWrapper.classList.add('show');
})

modalClose.addEventListener('click', function(){
    modalWrapper.classList.remove('show');
})


if(userId){
    showProductBuy(userId);
    showCoinsUser(userId);
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
    if(result.id){
        userNull.classList.add('hidden');
        userEnter.classList.remove('hidden');
        messageError.classList.add('hidden');
        localStorage.setItem('idUser', result.id);
        document.location.reload();
    }else{
        messageError.classList.remove('hidden');
    }
})

buttonArray.forEach(function(button) {
	button.addEventListener('click', function(){
        if(userId){
            let productId = this.getAttribute('data-id');
            orderBuy(userId, productId, this);
        }else{
            inputUser.focus();
        }
    })
});

logout.addEventListener('click', function(){
    localStorage.removeItem('idUser');
    document.location.reload();
})

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
    let responseUser = await fetch('/backend/files/productsBuy.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({id: idUser})
    });
    let resultUser = await responseUser.json();
    userNull.classList.add('hidden');
    userEnter.classList.remove('hidden');
    resultUser.forEach(function(el) {
        let num = el.product_id - 1
        if(buttonArray[num].getAttribute('data-id') == el.product_id){
            buttonArray[num].classList.add('active');
            buttonArray[num].textContent = 'Уже использовано';
            buttonArray[num].setAttribute('disabled', true)
        }
    })
}

async function showCoinsUser(idUser) {
    let responseUserCoins = await fetch('/backend/files/coins.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({id: idUser})
    });
    let resultUserCoins = await responseUserCoins.json();
    price.textContent = resultUserCoins.coins;
}


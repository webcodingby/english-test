let blockButton = document.querySelector('.block_button');
let modalWrapper = document.querySelector('.modal_wrapper');
let modalClose = document.querySelector('.modal_close');

blockButton.addEventListener('click', function(){
    modalWrapper.classList.add('show');
})

modalClose.addEventListener('click', function(){
    modalWrapper.classList.remove('show');
})
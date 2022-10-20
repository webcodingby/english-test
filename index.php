<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>English</title>
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="shortcut icon" href="/assets/image/money.png" type="image/x-icon">
</head>
<body>
    <div class="wrapper wrap_block">
        <div class="left_wrap wrap_bgcolor user_null">
            <div class="block_user">
                <h3>Ведите логин:</h3>
                <div class="block_user--login">
                    <input id="user_name" type="text" name="login">
                    <button class="user_button" type="button">Отправить</button>
                </div>
            </div>
        </div>
        <div class="left_wrap wrap_bgcolor user_enter hidden">
            <div class="block_user">
                <h3>Ваш баланс:</h3>
                <div class="block_user--coins">
                    <img class="coins" src="/assets/image/money.svg" alt="монета">
                    <span class="price">34</span>
                    <img src="/assets/image/coin.svg" alt="">
                </div>
                <button class="user_logout" type="button">Выйти</button>
            </div>
        </div>
        <div class="right_wrap wrap_bgcolor">
            <div class="wrap_block ">
                <h3 class="block_title">Варианты обмена на скидку</h3>
                <button class="block_button" type="button">Инструкция</button>    
            </div>
            <div class="wrap_block">
                <div class="products">
                    <div class="product">
                        <div class="product_price">
                            <img src="/assets/image/money.svg" alt="">
                            <span class="price">50</span>
                            <img src="/assets/image/coin.svg" alt="">
                        </div>
                        <img class="product_img" src="/assets/image/phone.svg" alt="">
                        <div class="discount_desc">
                            <span class="discount">50%</span>
                            <p class="discount_test">на звонки ST(x2)</p>
                        </div>
                        <button type="button" class="button_order active">Уже использовано</button>
                    </div>
                    <div class="product">
                        <div class="product_price">
                            <img src="/assets/image/money.svg" alt="">
                            <span class="price">70</span>
                            <img src="/assets/image/coin.svg" alt="">
                        </div>
                        <img class="product_img" src="/assets/image/book.svg" alt="">
                        <div class="discount_desc">
                            <span class="discount">30%</span>
                            <p class="discount_test">на спецкурс</p>
                        </div>
                        <button type="button" class="button_order">Использовать скидку</button>
                    </div>
                    <div class="product">
                        <div class="product_price">
                            <img src="/assets/image/money.svg" alt="">
                            <span class="price">100</span>
                            <img src="/assets/image/coin.svg" alt="">
                        </div>
                        <img class="product_img" src="/assets/image/books.svg" alt="">
                        <div class="discount_desc">
                            <span class="discount">50%</span>
                            <p class="discount_test">на курс</p>
                        </div>
                        <button type="button" class="button_order">Использовать скидку</button>
                    </div>
                    <div class="product">
                        <div class="product_price">
                            <img src="/assets/image/money.svg" alt="">
                            <span class="price">139</span>
                            <img src="/assets/image/coin.svg" alt="">
                        </div>
                        <img class="product_img" src="/assets/image/books.svg" alt="">
                        <div class="discount_desc">
                            <span class="discount">65%</span>
                            <p class="discount_test">на курс</p>
                        </div>
                        <button type="button" class="button_order">Использовать скидку</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal_wrapper">
        <div class="modal_inner">
            <button type="button" class="modal_close">X</button>
            <div class="modal">
                <h3>Инструкция</h3>
                <div class="modal_text">
                    <p>После публикации сделайте скрин, что вы его написали и отправьте своему куратору, чтобы мы добавили вам спецкурс в личный кабинет.</p>
                    <p>После публикации сделайте скрин, что вы его написали и отправьте своему куратору, чтобы мы добавили вам спецкурс в личный кабинет.</p>
                    <p>После публикации сделайте скрин, что вы его написали и отправьте своему куратору, чтобы мы добавили вам спецкурс в личный кабинет.</p>
                    <p>После публикации сделайте скрин, что вы его написали и отправьте своему куратору, чтобы мы добавили вам спецкурс в личный кабинет.</p>
                </div>
            </div>
        </div>
    </div>
    <script src="/assets/js/app.js"></script>
</body>
</html>
const btnNext = document.querySelector('.icon-right');
const btnPre = document.querySelector('.icon-left');
const sliderMain = document.querySelector('.main-slider');
const widthSlider = document.querySelector('.slider').clientWidth;
const itemSliders = document.querySelectorAll('.item-slider');
btnNext.addEventListener('click', () => {
    sliderShow(1);
});
btnPre.onclick = () => {
    sliderShow(-1);
};
let positionX = 0;
let index = 0;
function sliderShow(direction) {
    if (direction == 1) {
        if (index >= itemSliders.length - 1) {
            return;
        } else {
            positionX -= widthSlider;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        }
    } else {
        if (index <= 0) {
            return;
        } else {
            positionX += widthSlider;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
        }
    }
}


const time_sale = document.querySelector('.time-sale');
let minute = 30,
    second = 0;


setInterval(() => {
    if (second == 0) {
        second = 59;
        minute--;
    } else {
        second--;
    }
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    let timer = `${minute} : ${second}`;
    time_sale.innerText = timer;
}, 1000);


const item_product = document.querySelectorAll('.item-product');


item_product.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.firstElementChild.classList.add('icon-heart-active');
        item.lastElementChild.classList.add('wrapper-btn-active');
    });
    item.addEventListener('mouseout', () => {
        item.firstElementChild.classList.remove('icon-heart-active');
        item.lastElementChild.classList.remove('wrapper-btn-active');
    });
});


const btn_action_buy = document.querySelectorAll('.btn-action-buy');
const btn_action_add_cart = document.querySelectorAll('.btn-action-addCart');
const icon_cart = document.querySelector('.icon-cart span');
let listCart = [];
btn_action_add_cart.forEach((element) => {
    element.addEventListener('click', () => {
        const checkAdd = listCart.includes(element.parentElement.id);
        if (!checkAdd) {
            listCart.push(element.parentElement.id);
            icon_cart.innerText = listCart.length;
        } else {
            alert('Đã tồn tại trong giỏ hàng');
        }
    });
});


const icon_heart = document.querySelectorAll('.icon-heart');
icon_heart.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('heart-active');
    });
});


btn_action_buy.forEach((item) => {
    item.addEventListener('click', () => {
        alert('Bạn cần đăng nhập mới sử đụng được chức năng này !!!');
    });
});


const btn_user = document.querySelector('.btn-user');
const overlay = document.querySelector('.module-overlay');
btn_user.addEventListener('click', () => {
    btn_user.nextElementSibling.classList.add('overlay-active');
});


overlay.addEventListener('click', () => {
    btn_user.nextElementSibling.classList.remove('overlay-active');
});


const submit_login = document.querySelector('.submit-login');
const input_logins = document.querySelectorAll('.input-login');


submit_login.addEventListener('click', (e) => {
    e.preventDefault();
    input_logins.forEach((element) => {
        if (element.name == 'code-student') {
            const value = element.value;
            if (!value.endsWith('@fpt.edu.vn')) {
                alert('Đây không phải email cao đẳng fpt');
            }
        }
        if (element.name == 'password') {
            const value = element.value;
            if (!value.startsWith('ph')) {
                alert('Mật khẩu là mã sinh viên');
            }
            if (value.length < 7) {
                alert('Độ dài tối thiếu là 7 ký tự!');
            }
        }
        if (element.name == 'code') {
            const value = element.value;
            if (value.length < 6 && value.length > 6) {
                alert('Code có 6 chữ số !!');
            }
        }
    });
});

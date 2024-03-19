//слайдер

const item = document.querySelectorAll('.slider .slider-wrap .slider-line .item');
const sliderLine = document.querySelector('.slider .slider-wrap .slider-line');
let count = 0;
let width;

function init() 
{
    width = document.querySelector('.slider .slider-wrap').offsetWidth;
    sliderLine.style.width = width * item.length + 'px';
    item.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-next').addEventListener('click', function()
{
    count++;
    if (count >= item.length) {
        count = 0;
    };
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () 
{
    count--;
    if (count < 0) {
        count = item.length - 1;
    };
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
};

//модальное окно 

var modal = document.getElementById('modal');
var modal_sent = document.getElementById('sent')
var btn = document.getElementById('sent_btn');
var modal_close = document.getElementsByClassName("modal-close")[0];
var body = document.getElementById('body');
var modal_bg = document.getElementById('modal-bg');


btn.onclick = function ()
{
    document.body.classList.add('bg-block');
    modal.classList.add('active');
    modal_sent.classList.add('active');
};

modal_close.onclick = function () 
{
    document.body.classList.remove('bg-block');
    modal.classList.remove('active');
    modal_sent.classList.remove('active');
};

window.onclick = function (event) 
{
    if (event.target == modal_bg) 
    {
        document.body.classList.remove('bg-block');
        modal.classList.remove('active');
        modal_sent.classList.remove('active');
    };
};

const modalBtns = document.querySelectorAll('.modal-open');
const modals = document.querySelectorAll('.modal');

// function openModal(elem) {
//     elem.classList.add('active');
// };




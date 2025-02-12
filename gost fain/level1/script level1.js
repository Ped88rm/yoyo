let basket = document.getElementById('basket');
let egg = document.getElementById('egg');
let gameArea = document.getElementById('game-area');
let scoreElement = document.getElementById('score');
let messageElement = document.getElementById('message');

let score = 0;
let eggSpeed = 4.5;
let basketSpeed = 15;
let speedIncreaseInterval = 10000; // افزایش سرعت هر 10 ثانیه (10000 میلی‌ثانیه)

function moveBasket(event) {
    const gameAreaRect = gameArea.getBoundingClientRect();
    let basketLeft = event.clientX - gameAreaRect.left - basket.offsetWidth / 2;

    if (basketLeft < 0) basketLeft = 0;
    if (basketLeft > gameAreaRect.width - basket.offsetWidth) {
        basketLeft = gameAreaRect.width - basket.offsetWidth;
    }

    basket.style.left = `${basketLeft}px`;
}

function dropEgg() {
    let eggPosition = 0;
    let eggLeft = Math.random() * (gameArea.offsetWidth - egg.offsetWidth);

    egg.style.left = `${eggLeft}px`;

    let dropInterval = setInterval(() => {
        eggPosition += eggSpeed;

        if (eggPosition > gameArea.offsetHeight - egg.offsetHeight) {
            if (parseInt(egg.style.left) + egg.offsetWidth / 2 >= parseInt(basket.style.left) &&
                parseInt(egg.style.left) + egg.offsetWidth / 2 <= parseInt(basket.style.left) + basket.offsetWidth) {
                score++;
                scoreElement.textContent = `امتیاز: ${score}`;
                messageElement.textContent = ''; 
            } else {
                score = 0;
                scoreElement.textContent = `امتیاز: ${score}`;
                messageElement.textContent = 'باختی قرمه سبزی!';
            }
            clearInterval(dropInterval);
            egg.style.top = `-60px`;
            dropEgg();  
        } else {
            egg.style.top = `${eggPosition}px`;
        }
    }, 20);
}

function increaseSpeed() {
    // افزایش سرعت تخم مرغ
    if (eggSpeed < 15) {  // به یک حد خاص محدود شده که بیش از 15 نشود
        eggSpeed += 0.1;
    }
}

// افزایش سرعت بازی 
setInterval(increaseSpeed, speedIncreaseInterval);

document.addEventListener('mousemove', moveBasket);
dropEgg();
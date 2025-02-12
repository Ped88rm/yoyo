const signupForm = document.getElementById('signup-form');
const messageForm = document.getElementById('message-form');
const statusMessage = document.getElementById('status-message');


signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    alert(`ثبت نام موفقیت آمیز! نام کاربری: ${username}`);
    signupForm.reset(); // پاک کردن فرم پس از ثبت نام
});


messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;

    if (message.trim() === "") {
        statusMessage.textContent = "لطفاً پیام خود را وارد کنید!";
        statusMessage.style.color = "red";
    } else {
        statusMessage.textContent = "پیام شما ارسال شد!";
        statusMessage.style.color = "green";
        messageForm.reset(); 
    }
});

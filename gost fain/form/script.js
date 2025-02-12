// اعتبارسنجی فرم
function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // چک کردن اینکه آیا فیلدها پر شده‌اند یا نه
    if (!username || !email || !password || !confirmPassword) {
        alert("لطفاً تمام فیلدها را پر کنید.");
        return false;
    }

    // بررسی تطابق رمز عبور
    if (password !== confirmPassword) {
        alert("رمز عبور و تأیید رمز عبور با هم تطابق ندارند.");
        return false;
    }

    // بررسی صحت فرمت ایمیل
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("لطفاً یک ایمیل معتبر وارد کنید.");
        return false;
    }

    // در صورت صحت اطلاعات، می‌توان فرم را ارسال کرد
    alert("ثبت نام با موفقیت انجام شد!");
    return true;
}

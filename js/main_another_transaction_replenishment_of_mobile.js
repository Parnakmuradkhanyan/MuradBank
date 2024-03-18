let phoneNumber = '';

function handleButtonClick(number) {
    phoneNumber += number;
    updatePhoneDisplay();
}

function phoneNumClear() {
    phoneNumber = '';
    updatePhoneDisplay();
}

function updatePhoneDisplay() {
    const phoneDisplay = document.getElementById('phoneInput');
    phoneDisplay.textContent = phoneNumber;
}
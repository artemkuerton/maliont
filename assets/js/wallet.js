// Crypto Price

// Stock Price

// Wallet Secure
window.onload = function () {
  const savedPin = localStorage.getItem("userPin");
  if (!savedPin) {
    promptForPin();
  } else {
    validatePin(savedPin);
  }
};

function promptForPin() {
  const pinContainer = document.getElementById("pin-container");
  pinContainer.style.display = "flex";
  const submitPinButton = document.getElementById("submit-pin");

  submitPinButton.onclick = function () {
    const pinInput = document.getElementById("pin-input").value;
    const messageElement = document.getElementById("message");
    const successAlert = document.getElementById("success-alert");

    messageElement.innerText = "";
    successAlert.style.display = "none";

    if (pinInput.length === 4) {
      localStorage.setItem("userPin", pinInput);
      successAlert.innerText = "PIN-код установлен!";
      successAlert.style.display = "block";
      pinContainer.style.display = "none";
    } else {
      messageElement.innerText = "Пожалуйста, введите 4 символа.";
    }
  };
}

function validatePin(savedPin) {
  const pinContainer = document.getElementById("pin-container");
  const pinInput = document.getElementById("pin-input");
  const submitPinButton = document.getElementById("submit-pin");
  const messageElement = document.getElementById("message");
  const successAlert = document.getElementById("success-alert");

  pinContainer.style.display = "flex";

  submitPinButton.onclick = function () {
    const inputPin = pinInput.value;
    messageElement.innerText = "";
    successAlert.style.display = "none";

    if (inputPin === savedPin) {
      successAlert.innerText = "Доступ разрешен!";
      successAlert.style.display = "block";
      pinContainer.style.display = "none";
    } else {
      messageElement.innerText = "Неверный PIN-код, попробуйте снова.";
    }
  };
}

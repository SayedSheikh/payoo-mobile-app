// getConvertedPin('login-btn');

document.getElementById('login-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const number = getConvertedValue('login-number');
    const pin = getConvertedValue('login-pin');

    // console.log(number, pin);
    if (is11Length(number)) {
      if (pin === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("please give 11 length number")
    }
  });
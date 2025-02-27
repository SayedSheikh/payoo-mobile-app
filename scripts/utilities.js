
function getConvertedValue(id) {

  let num = document.getElementById(id).value;
  if (num[0] === "0") {
    num = num.replace('0', '1');
  }
  const convertedValue = parseInt(num);
  return convertedValue;
}

function is11Length(number) {

  const num1 = Math.floor(number / 10000000000);
  if (num1 >= 1 && num1 <= 9) {
    return true;
  } else return false;
}

function toggle(id, property) {
  document.getElementById(id).style.display = property;

}
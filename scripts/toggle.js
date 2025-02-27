document.getElementById('add-money-section').style.display = 'none';
document.getElementById('cashout-section').style.display = 'none';

// toggleFunction(id, 'none');

const cards = document.getElementsByClassName('card');

// for (card of cards) {
//   card.addEventListener('click', function (event) {
//     console.log(event.target);
//   });
// }

document.getElementById('cards').addEventListener('click', function (event) {

  event.stopPropagation();
  const element = event.target.closest('.card');
  if (element) {

    for (card of cards) {
      card.style.border = 'none'
    }

    element.style.border = '2px solid blue'

    const elId = element.getAttribute('id');
    if (elId === "add-money-card") {
      toggle('add-money-section', "block");
      toggle('cashout-section', 'none');
    }
    else if (elId === "cashout-card") {
      toggle('add-money-section', "none");
      toggle('cashout-section', 'block');
    }

  }


});

const binary = document.querySelector('#binary');
const decimal = document.querySelector('#decimal');
const btn = document.querySelector('#cbtn').addEventListener('click', init);
const invalidMessage = "Enter a valid binary number to.";
decimal.value = invalidMessage;
function init(e) {
  binary.addEventListener('input', runevent);
  runevent(e);
};

function runevent(e) {
  if (parseInt(binary.value, 2)) {
    decimal.value = parseInt(binary.value, 2);
  }
  else {
    decimal.value = invalidMessage;
  }
}
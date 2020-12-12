const square = document.querySelector('.square');
const radius = document.querySelector('#radius');
const css = document.querySelector('#css');
const btn = document.querySelector('#cbtn');
radius.addEventListener('input', runevent);

function runevent(e) {
  const r = radius.value;
  square.style.borderRadius = `${r}%`;
  console.log(square.style.borderRadius);
}
setSelected(0);

function setSelected(item) {
  document.querySelectorAll('.action').forEach(el => el.classList.remove('selected'));

  const toSelect = document.querySelector(`#action${item}`);
  const indicator = document.querySelector('.indicator');
  if (toSelect && indicator) {
    toSelect.classList.add('selected');
    const { offsetLeft } = toSelect;
    indicator.style.transform = `translateX(${offsetLeft}px)`;
  }
}
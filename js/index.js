let watchers = 123;
let totalPlaces = 10;

const refs = {
  body: document.querySelector('body'),
  player: document.querySelector('video'),
  unMuteBtn: document.querySelector('.volume'),
  isWatching: document.querySelector('.online .num'),
  places: document.querySelector('.lasts .num'),
  modal: document.querySelector('.modal_wr'),
  modalClose: document.querySelector('.closing'),
  modalCloseIcon: document.querySelector('.modal__close a'),
};

function handleOnUnMuteBtnClick() {
  refs.player.muted = false;
  refs.unMuteBtn.removeEventListener('click', handleOnUnMuteBtnClick);
  refs.unMuteBtn.remove();
}

refs.unMuteBtn.addEventListener('click', handleOnUnMuteBtnClick);

setInterval(() => {
  watchers += 1;
  refs.isWatching.textContent = watchers;
}, 3000);

let timerId = null;

timerId = setInterval(() => {
  refs.places.textContent = totalPlaces;
  if (totalPlaces === 0) {
    clearInterval(timerId);
    return;
  }
  totalPlaces -= 1;
}, 8000);

function onCloseBtnClick() {
  refs.modal.classList.remove('active');
  refs.body.classList.remove('no_scroll');
  refs.modalClose.removeEventListener('click', onCloseBtnClick);
  refs.modalCloseIcon.removeEventListener('click', onCloseBtnClick);
  refs.body.addEventListener('mouseleave', openModal);
}

function openModal() {
  setTimeout(() => {
    refs.modal.classList.add('active');
    refs.body.classList.add('no_scroll');
    refs.modalClose.addEventListener('click', onCloseBtnClick);
    refs.modalCloseIcon.addEventListener('click', onCloseBtnClick);
    refs.body.removeEventListener('mouseleave', openModal);
  }, 1000);
}

refs.body.addEventListener('mouseleave', openModal);

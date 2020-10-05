/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
const urlParams = new URLSearchParams(window.location.search);
const initialName = urlParams.get('name') || '';

document.getElementById('name-input').value = initialName;

function setStatus(status) {
  const name = document.getElementById('name-input').value.toLowerCase();
  if (!name) {
    window.alert('please enter your name');
  } else {
    window.fetch(`http://${window.location.host}/status/${name}/${status}`);
  }
}

function setMode(mode) {
  const name = document.getElementById('name-input').value.toLowerCase();
  if (!name) {
    window.alert('please enter your name');
  } else {
    window.fetch(`http://${window.location.host}/mode/${name}/${mode}`);
  }
}

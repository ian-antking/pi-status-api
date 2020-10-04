/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
function setStatus(status) {
  const name = document.getElementById('name-input').value;
  if (!name) {
    window.alert('please enter your name');
  } else {
    window.fetch(`http://${window.location.host}/status/${name}/${status}`);
  }
}

function setMode(mode) {
  const name = document.getElementById('name-input').value;
  if (!name) {
    window.alert('please enter your name');
  } else {
    window.fetch(`http://${window.location.host}/mode/${name}/${mode}`);
  }
}

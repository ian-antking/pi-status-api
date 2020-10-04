/* eslint-disable no-unused-vars */
function setStatus(status) {
  const name = document.getElementById('name-input').value;
  window.fetch(`http://${window.location.host}/status/${name}/${status}`);
}

function setMode(mode) {
  const name = document.getElementById('name-input').value;
  window.fetch(`http://${window.location.host}/mode/${name}/${mode}`);
}

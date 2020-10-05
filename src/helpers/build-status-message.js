const colors = require("../config/colors");

const buildStatusMessage = (state) => {
  const color = colors[state];
  if (!color) {
    throw new Error('invalid argument: state must be free, working or busy');
  }
  return { color, mode: 'solid' };
};

module.exports = buildStatusMessage;

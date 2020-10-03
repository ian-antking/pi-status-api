const colors = {
  free: '(0, 255, 0)',
  working: '(255, 168, 0)',
  busy: '(255, 0, 0)',
};

const buildStatusMessage = (state) => {
  const color = colors[state];
  if (!color) {
    throw new Error('invalid argument: state must be free, working or busy');
  }
  return { color, mode: 'solid' };
};

module.exports = buildStatusMessage;

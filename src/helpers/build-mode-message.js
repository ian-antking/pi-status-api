const modes = [
  'solid',
  'off',
  'blink',
  'rainbow',
  'alert',
];

const buildModeMessage = (mode) => {
  if (modes.indexOf(mode) < 0) {
    throw new Error('invalid mode: mode must be off, solid, blink, rainbow or alert');
  }
  const message = { mode };
  return message;
};

module.exports = buildModeMessage;

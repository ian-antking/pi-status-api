const buildModeMessage = require('../src/helpers/build-mode-message');

describe('buildModeMessage', () => {
  it('returns a mode message', () => {
    const modes = [
      'solid',
      'off',
      'blink',
      'rainbow',
      'alert',
    ];

    modes.forEach((mode) => {
      const message = buildModeMessage(mode);
      expect(message).toEqual({ mode });
    });
  });

  it('throws an error if passed an invalid mode', () => {
    expect(() => buildModeMessage('foo')).toThrow('invalid mode: mode must be off, solid, blink, rainbow or alert');
  });
});

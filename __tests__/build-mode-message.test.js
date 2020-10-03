const buildModeMessage = require('../src/helpers/build-mode-message');

describe('buildModeMessage', () => {
  it('returns a mode message', () => {
    const message = buildModeMessage('solid');

    expect(message).toEqual({ mode: 'solid' });
  });

  it('throws an error if passed an invalid mode', () => {
    expect(() => buildModeMessage('foo')).toThrow('invalid mode: mode must be off, solid, blink, rainbow or alert');
  });
});

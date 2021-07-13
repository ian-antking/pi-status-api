const buildStatusMessage = require('../src/helpers/build-status-message');

describe('buildStatusMessage', () => {
  it('sets the message mode to solid', () => {
    const message = buildStatusMessage('busy');
    expect(message.mode).toBe('solid');
  });

  it('sets the color to red, when busy', () => {
    const message = buildStatusMessage('busy');
    expect(message.color).toBe('(255, 0, 0)');
  });

  it('sets the color to green, when free', () => {
    const message = buildStatusMessage('free');
    expect(message.color).toBe('(0, 255, 0)');
  });

  it('sets the color to amber, when working', () => {
    const message = buildStatusMessage('working');
    expect(message.color).toBe('(255, 168, 0)');
  });

  it('throws an error if state is not free, working or busy', () => {
    expect(() => buildStatusMessage('foo')).toThrow('invalid argument: state must be free, working or busy');
  });
});

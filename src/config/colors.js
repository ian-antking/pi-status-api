const colors = {
  trafficLights: {
    free: '(0, 255, 0)',
    working: '(255, 168, 0)',
    busy: '(255, 0, 0)',
  },
  tritanopia: {
    free: '(4, 231, 255)',
    working: '(248, 255, 4)',
    busy: '(255, 4, 255)',
  }
};

module.exports = colors[process.env.COLOR_MODE] || colors.trafficLights;
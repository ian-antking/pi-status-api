const { publish } = require('../services/mqtt');
const buildModeMessage = require('../helpers/build-mode-message');

exports.set = async (req, res) => {
  const { name, mode } = req.params;
  const topic = `status/${name}`;
  const message = buildModeMessage(mode);
  publish(topic, message);
  res.status(200).json({ topic, message });
};

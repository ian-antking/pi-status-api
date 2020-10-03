const { publish } = require('../services/mqtt');
const buildStatusMessage = require('../helpers/build-status-message');

exports.set = async (req, res) => {
  const { name } = req.params;
  const { state } = req.params;
  const topic = `status/${name}`;
  const message = buildStatusMessage(state);
  await publish(topic, JSON.stringify(message));
  res.status(200).json({ topic, message });
};

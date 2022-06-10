const mqtt = require('async-mqtt');

const publish = async (topic, message) => {
  try {
    const client = await mqtt.connectAsync(`mqtt://${process.env.MQTT_HOST}`, [{
      port: process.env.MQTT_PORT || 1883,
    }]);
    await client.publish(topic, JSON.stringify(message));
    await client.end();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.stack);
  }
};

module.exports = {
  publish,
};

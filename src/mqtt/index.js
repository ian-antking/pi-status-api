const mqtt = require('async-mqtt');

const publish = async (topic, message) => {
  try {
    const client = await mqtt.connectAsync(process.env.MQTT_BROKER);
    await client.publish(topic, message);
    await client.end();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.stack);
  }
};

module.exports = {
  publish,
};

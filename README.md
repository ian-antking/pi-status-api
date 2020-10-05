# Pi Status API

Web app for controlling the [pi-status](https://github.com/ian-antking/pi-status/blob/master/README.md) lights.

## Configuration

Requires a running mqtt server. The address is loaded from config. This can be stored in a `.env`:

```
MQTT_BROKER=mqtt://192.168.1.101
```
This app assumes that the topic your pi-status light is subscribed to follows the pattern `status/<NAME>`.

## Installation
This project requires `node.js`. You can install the project from inside the repo with:

```
npm install
```

## Running the app
You can run the app in development mode with:
```
npm start
```

The you can access the web interface at `http://localhost:3000`.

## Setting you current status

`GET /status/:name/:state`

## Modifying the pi-status light's color scheme

Color schemes for the pi-status light are stored in the colors.js file within the config directory. Two color schemes are provided by default. Additional schemes can be added by modifying the colors object. **RGB format must be used for the colors as other formats will not work.**

```
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
```

To select a color scheme from those stored in colors.js, modify the COLOR_MODE variable of the .env file in the root directory:

```
COLOR_MODE=tritanopia
```

If a color scheme is not set then the theme defaults to `trafficLights`.

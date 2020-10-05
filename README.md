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

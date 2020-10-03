# Pi Status API

For use with [pi-status](https://github.com/ian-antking/pi-status/blob/master/README.md).

## Setting Up

Requires a running mqtt server. The address is loaded from config. This can be stored in a `.env`:

```
MQTT_BROKER=mqtt://192.168.1.101
```

## Setting you current status

`GET /status/:name/:state`
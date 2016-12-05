let isOn = false;
const interval = 500; // 500 milliseconds = 0.5 seconds
const BTN = NodeMCU.D2;
const LED = NodeMCU.D4;
const options = {
  repeat: true,
  edge: 'rising'
};

function main() {
    pinMode(BTN, 'input_pullup');
    setWatch(() => {
      isOn = !isOn;
    }, BTN, options);

    setInterval(() => {
        digitalWrite(LED, isOn); // D2 is the blue LED on the ESP8266 boards
    }, interval);
}

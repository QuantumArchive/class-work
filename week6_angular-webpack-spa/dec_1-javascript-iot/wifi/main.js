const BTN = NodeMCU.D2;
const wifi = require('Wifi');
const http = require('http');
const options = {
  repeat: true,
  edge: 'rising',
  debounce: 50
};

function main() {
  pinMode(BTN, 'input_pullup');

  wifi.connect('Code Fellows 5G', {password: 'LearnMoreFaster!'}, err => {
    if (err) return console.log(err);
    console.log(`Wireless network connection successful!\n * IP Address is ${wifi.getIP().ip}`);
  });

  setWatch(() => {
    http.get(`http://192.168.1.2:9000/button/David`, res => {
      let content = '';
      res.on('data', data => content += data);
      res.on('close', () => console.log(content));
    });
  }, BTN, options);

}

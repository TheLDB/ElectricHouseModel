const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {
    var kitchenLight = new five.Led.RGB(1);
    var masterBedLight = new five.Led.RGB(2);
    var bedroomLight = new five.Led.RGB(3);
    var bathroomLight = new five.Led(4);
    var livingRoomLight = new five.Led.RGB(5);
    kitchenLight.color("#ecf0f1");
    kitchenLight.intensity(60);
    masterBedLight.color("#ecf0f1");
    masterBedLight.intensity(60);
    bedroomLight.color("#ecf0f1");
    bedroomLight.intensity(60);
    bathroomLight.color("#ecf0f1");
    bathroomLight.intensity(60);
    livingRoomLight.color("#ecf0f1");
    livingRoomLight.intensity(60);
})
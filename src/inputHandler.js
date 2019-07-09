export default class InputHandler {
  constructor(car, game) {
    document.addEventListener("keydown", event => {
      //event occurs whenever a user presses a key
      switch (event.keyCode) {
        case 65: //keyCode for left
          car.moveLeft();
          break;
        case 68:
          car.moveRight();
          break;
        case 32:
          game.start();
      }
    });
  }
}

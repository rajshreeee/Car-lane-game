export default class Bullet {
  constructor(game, car, carArray) {
    this.size = 16;
    this.x = car.x + 20;
    this.game = game;
    this.y = 600;
    this.image = document.getElementById("bullet");
    this.speed = 2;
    this.carArray = carArray;
  }

  update(deltaTime, carArray) {
    if (!deltaTime) {
      return;
    }
    this.y -= this.speed;
    //  console.log(this.carArray[0].y);
    /* for (let i = 0; i < this.carArray.length; i++) {
      let currentCar = this.carArray[i];
      if (collisionDetection(currentCar, this)) {
        console.log("collis");
      }*/
    //if (currentCar[i].y === this.y) {
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    //  console.log("draw");
  }
}

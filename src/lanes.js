export default class Lanes{
  constructor(game){
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.moveTo(this.gameWidth / 3, 0);
    ctx.lineTo(this.gameWidth / 3,this.gameHeight);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.gameWidth / 3 * 2, 0);
    ctx.lineTo(this.gameWidth / 3 * 2, this.gameHeight);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();
  }

  update(deltaTime){

  }
}




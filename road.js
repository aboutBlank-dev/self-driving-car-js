class Road {
  #SIDE_MARGIN = 20;

  constructor(x, width) {
    this.x = x;
    this.width = width;

    this.left = x - width/2;
    this.right = x + width/2;

    this.top = 0;
    this.bottom = window.innerHeight;
  }

  draw(ctx) {
    ctx.lineWidth = this.#SIDE_MARGIN;
    ctx.strokeStyle = 'black';

    ctx.beginPath();
    ctx.moveTo(this.left + this.#SIDE_MARGIN/2, this.top);
    ctx.lineTo(this.left + this.#SIDE_MARGIN/2, this.bottom);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.right - this.#SIDE_MARGIN/2, this.top);
    ctx.lineTo(this.right - this.#SIDE_MARGIN/2, this.bottom);
    ctx.stroke();
  }
}
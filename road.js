class Road {
  constructor(x, width) {
    this.x = x;
    this.width = width;

    this.left = x - width/2;
    this.right = x + width/2;

    this.top = 0;
    this.bottom = window.innerHeight;
  }

  draw(ctx) {
    ctx.lineWidth = 20;
    ctx.strokeStyle = 'green';

    ctx.beginPath();
    ctx.moveTo(this.left, this.top);
    ctx.lineTo(this.left, this.bottom);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.right, this.top);
    ctx.lineTo(this.right, this.bottom);
    ctx.stroke();
  }
}
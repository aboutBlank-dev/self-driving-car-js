class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.controls = new ArrowControls();
  }
  update() {
    if(this.controls.up) {
      this.y -= 2;
    }

    if(this.controls.down) {
      this.y += 2;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.rect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
    ctx.fill();
  }
}
class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.maxSpeed = 10;
    this.accelaration = 2;
    this.friction = 0.8;

    this.rotation = 0;
    this.turnSpeed = 0.1;

    this.controls = new ArrowControls();
  }
  
  update() {
    this.#handleMovement();
  }

  #handleMovement() {
    //Accelaration
    this.speed += this.controls.input.y * this.accelaration;

    //Clamping to max speed
    if(this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else if(this.speed < -this.maxSpeed) {
      this.speed = -this.maxSpeed;
    }

    //Friction
    if(this.speed > 0) {
      this.speed -= this.friction;
    } else if(this.speed < 0) {
      this.speed += this.friction;
    }
    if(Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    //Rotation (Only allow rotation when moving)
    if(this.speed != 0)
    {
      const flip = this.speed < 0 ? 1 : -1;
      this.rotation += this.controls.input.x * this.turnSpeed * flip;
    }
    
    //Update position based on speed and rotation
    this.x -= Math.sin(this.rotation) * this.speed;
    this.y += Math.cos(this.rotation) * this.speed;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.rect(
      -this.width/2,
      -this.height/2, 
      this.width, 
      this.height
    );
    ctx.fill();

    ctx.restore();
  }
}
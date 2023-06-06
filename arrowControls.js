class ArrowControls {
  constructor() {
    this.leftPressed = false;
    this.rightPressed = false;
    this.upPressed = false;
    this.downPressed = false;

    this.input = new Vector2(0, 0);

    this.#setupKeyListeners();
  }

  keyHandler(e, pressed) {
    switch(e.key) {
      case 'ArrowLeft':
        this.leftPressed = pressed;
        break;
      case 'ArrowRight':
        this.rightPressed = pressed;
        break;
      case 'ArrowUp':
        this.upPressed = pressed;
        break;  
      case 'ArrowDown':
        this.downPressed = pressed;
        break;
    }

    this.input.x = 0;
    this.input.y = 0;
     
    if(this.upPressed && !this.downPressed) {
      this.input.y = -1;
    } else if (this.downPressed && !this.upPressed) {
      this.input.y = 1;
    }

    if(this.leftPressed && !this.rightPressed) {
      this.input.x = -1;
    } else if(this.rightPressed && !this.leftPressed) {
      this.input.x = 1;
    }
  }

  #setupKeyListeners() {
    document.onkeydown = (e) => this.keyHandler(e, true);
    document.onkeyup = (e) => this.keyHandler(e, false);
  }
}

class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
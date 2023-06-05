class ArrowControls {
  constructor() {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;

    this.#setupKeyListeners();
  }

  #setupKeyListeners() {
    function keyHandler(e, pressed) {
      switch(e.key) {
        case 'ArrowLeft':
          this.left = pressed;
          break;
        case 'ArrowRight':
          this.right = pressed;
          break;
        case 'ArrowUp':
          this.up = pressed;
          break;  
        case 'ArrowDown':
          this.down = pressed;
          break;
      }
    }

    //make sure the callback is called from the ArrowControls instance
    document.onkeydown = (e) => keyHandler.call(this, e, true);
    document.onkeyup = (e) => keyHandler.call(this, e, false);
  }
}
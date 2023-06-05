const canvas = document.getElementById('myCanvas');
canvas.height = window.innerHeight;
canvas.width = 400

const ctx = canvas.getContext('2d');

const car = new Car(200, 200, 80, 140);
car.draw(ctx);

updateLoop();

function updateLoop() {
  requestAnimationFrame(updateLoop);

  //Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Update and draw the car
  car.update();
  car.draw(ctx);
}
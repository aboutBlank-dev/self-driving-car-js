const canvas = document.getElementById('myCanvas');
canvas.height = window.innerHeight;
canvas.width = 600;

const ctx = canvas.getContext('2d');

const road = new Road(canvas.width/2, canvas.width);
const car = new Car(300, 200, 80, 140);
car.draw(ctx);

updateLoop();

function updateLoop() {
  //Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  //Draw the road
  road.draw(ctx);
  
  //Update and draw the car
  car.update();
  car.draw(ctx);
  
  requestAnimationFrame(updateLoop);
}
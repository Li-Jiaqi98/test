function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(245);

  fill(150)
  ellipse(110,200,80,50)

  fill('black')
  triangle(100,100,200,150,100,200);

  noFill()
  triangle(110,90,210,140,210,40);
}

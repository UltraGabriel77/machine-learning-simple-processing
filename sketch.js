let perceptron
let points = []
let mouse

function setup() {
  createCanvas(600, 600);
  perceptron = new Perceptron()
  mouse = new Point()
  for (let i = 0; i < 100; i++) {
    points[i] = new Point()
  }
  points.push(mouse)
  let inputs = [-1, 0.5]
  let guess = perceptron.guess(inputs)
  print(guess)
}

function draw() {
  background(220);
  mouse.x = mouseX
  mouse.y = mouseY
  mouse.changeLabel()
  points.forEach((p)=>{
    p.draw()
  })

  points.forEach((p)=>{

    let guess = perceptron.guess([p.x,p.y])
    if (guess == p.label){
      fill(0,255,0)
    }
    else{
      fill(255,0,0)
    }
    noStroke()
    ellipse(p.x,p.y,8,8)
  })
}

function mousePressed(){
  points.forEach((p)=>{
    perceptron.train([p.x,p.y], p.label)
  })
}
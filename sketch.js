let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(0)
  strokeWeight(2)
  line(200,0,200,200);

  strokeWeight(2)
  fill(255,255,255) //Warna Putih
  triangle(30,10, 20,90, 60,40);
  triangle(170,10, 180,90, 140,40);
  triangle(230,10, 220,90, 260,40);
  triangle(370,10, 380,90, 340,40);

  
  beginShape();
  fill(255,255,255) //Warna Putih
  vertex(60,40)
  vertex(20,90)
  vertex(100,180)
  vertex(180,90)
  vertex(140,40)

  
  endShape(CLOSE);

  beginShape();
  fill(255,255,255) //Warna Putih
  vertex(260,40)
  vertex(220,90)
  vertex(300,180)
  vertex(380,90)
  vertex(340,40)
  

  endShape(CLOSE);

  for (var i=0; i<=400; i++){
    x = i
    y = 300 + 20*Math.sin(PI*x/20)
    point(x,y)
  
  }
  
  
  var y = 10 + 5*Math.sin(PI*j/20)
  var r = 10 + 5*Math.sin(PI*j/20)
  j += 1

  strokeWeight(2)
  fill(0) // Warna Hitam
  ellipse(125, 75, 45, 45);
  ellipse(325, 75, 45, 45);
  ellipse(80, 80, 15, 15);
  ellipse(280, 80, 15, 15);

  fill(255,255,255) // Warna Putih
  ellipse(120, 80, 15, 15);
  ellipse(320, 80, 15, y);
  
  strokeWeight(4)
  arc(100,115, 80, 40, radians(30), radians(150));
  arc(300,115, 80, 40, radians(30), radians(150));
  


  strokeWeight(4)
  fill(0) //Warna Hitam
  triangle(90,110, 110,110, 100,120);
  triangle(290,110, 310,110, 300,120);
  line(100,120,100,128);
  line(300,120,300,128);


  
  fill(239, 147, 147) //Warna Merah Muda
  ellipse(100, 135, 20, 15);
  ellipse(300, 135, 20, r);




  
}
// Gus Lange hw3



function setup() {


  createCanvas(700, 700);

  background(127,193,175);

  for(var y=0; y<=height; y+=5){
    for(var x=0; x<=width; x+=5){
        
      fill(254,252,165);
      ellipse(x,y,3.5);
    }
  }


for(var m=1000; m>0; m=m-9){
  noFill();
  stroke(127,193,250);
  ellipse(350,350,m-15,m-6);
}




function draw(){




  }



}

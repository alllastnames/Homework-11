let soundfile, soundfile2, soundfile3, fft;
let font;
let img;

async function setup() {
  createCanvas(windowWidth, windowHeight*0.675);
  soundfile = await loadSound('assets/HW 12 Sound 1 Loop EXT.mp3');
  soundfile2 = await loadSound('assets/HW 12 Sound 2 Loop EXT.mp3');
  soundfile3 = await loadSound('assets/HW 12 Sound 3 Loop EXT.mp3');
  font = await loadFont('assets/Monoton-Regular.ttf');
  img = await loadImage('assets/Loop symbol.png');
  fft = new p5.FFT();
  soundfile.connect(fft);
  soundfile.loop();
  textFont(font);
  textSize(32);
  textAlign (CENTER,CENTER);
}
bgColorR = 0;
bgColorG = 237;
bgColorB = 255;

function keyPressed(){
  if (key === '1'){
    bgColorR = 0;
    bgColorG = 0;
    bgColorB = 0;
    soundfile2.stop();
    soundfile3.stop();
  if (!soundfile.isPlaying()){
    soundfile.play();

  
  }
    
  }
  else if (key === '2'){
    bgColorR = 199;
    bgColorG = 15;
    bgColorB = 15;
    soundfile.stop();
    soundfile3.stop();
  if (!soundfile2.isPlaying()){
    soundfile2.play();
    soundfile2.connect(fft);
    soundfile2.loop();
  }
  }
  else if (key === '3'){
    bgColorR = 225;
    bgColorG = 156;
    bgColorB = 255;
    soundfile.stop();
    soundfile2.stop();
  if (!soundfile3.isPlaying()){
    soundfile3.play();
    soundfile3.connect(fft);
    soundfile3.loop();
  }
}
  else if (key === '0'){
    bgColorR = 0;
      bgColorG = 237;
      bgColorB = 255;
      soundfile.stop();
      soundfile2.stop();
      soundfile3.stop();
  }
}

function draw() {
  background(bgColorR,bgColorG,bgColorB);
  let spectrum = fft.analyze();
  noStroke();
  fill(255);

   for (let i = 0; i < spectrum.length; i++) {
   let x = map(i, 0, spectrum.length, 0, width);     
   let h = -height + map(spectrum[i], 0, 0.1, height, 0);
   rect(x, height, width / spectrum.length, h * 1)
   }
     fill(255)
    circle(windowWidth/2,windowHeight*.15,125);

    fill(255)
    text('Repeating Sounds',windowWidth/2, windowHeight*0.3);
    text('Radio',windowWidth/2, windowHeight*0.35);

    image(img,windowWidth/2.45,windowHeight*.085,100,100)
   }



var canvas  = document.getElementById("canvasapp"),
    ctx   = canvas.getContext("2d"),
    options = {
      opacity: 0.1,
      count: 1,              // Количество отрисованных элементов за один раз
      fps: 10,              // скорость рендера
      color: "hsl(hue, 100%, 50%)",   // цвет куба
      hue: 240,               // тон цвета
      divisionSpeed: 1 ,        // делитель скорости, чем больше тем медленей скорость смены цвета
      speed:50,
    };

  canvas.width  = window.innerWidth % 10 ? ( Math.floor( window.innerWidth / 10 ) * 20 ) : window.innerWidth;
  canvas.height = window.innerHeight % 10 ? ( Math.floor( window.innerHeight / 10 ) * 20 ) : window.innerHeight;
let iter = 0
  var width     = canvas.width,
    height    = canvas.height;

  function Init(){
      // window.requestAnimationFrame(Init);  

    Step();                 // Отрисовка куба
    setTimeout(() => {
      Init()
    }, options.speed);
  }
  function Step() {

    ctx.font = "50px Verdana";
    ctx.fillText("0",Math.random() * width, Math.random() * height);
    ctx.fillText("1",Math.random() * width, Math.random() * height);

    ctx.fillStyle = "#22222222";
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = '#0a0'
    // ctx.fillRect( Math.random() * width, Math.random() * height, 2, 100 );    // Отрисовываем куб в рандомном месте на канвасе с рандомным размером
  }


  Init();

  window.addEventListener("resize", function(){
    canvas.width  = window.innerWidth % 10 ? ( Math.floor( window.innerWidth / 10 ) * 10 ) : window.innerWidth;
    canvas.height = window.innerHeight % 10 ? ( Math.floor( window.innerHeight / 10 ) * 10 ) : window.innerHeight;

    width     = canvas.width,
    height    = canvas.height;
  });
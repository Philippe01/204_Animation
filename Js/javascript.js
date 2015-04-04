

var intervalID = window.setInterval(draw, 33);

var i = 0;
var message;

var X;
var Y;
var Xpos = 100;
var Ypos = 100;

var mouseisdown = false;
var dragging = false;


function draw(e) {
    var canvas = document.getElementById('A_canvas');

    var ctx = canvas.getContext('2d');
    
    
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    writeMessage(canvas, message);
    
    function writeMessage(canvas, message) {
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
    }
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    
//    canvas.addEventListener('mousemove', function(evt) {
//        var mousePos = getMousePos(canvas, evt);
//        message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//        
//    }, false);
    
    canvas.addEventListener('mousedown', function(evt) {
        mouseisdown = true;   
    });
                           
    canvas.addEventListener('mouseup', function(evt) {
        mouseisdown = false;   
    });

    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        X = mousePos.x;
        Y = mousePos.y
        
        tempX = X-Xpos
        tempY = Y-Ypos
        
        
        if (X >= Xpos && Y >= Ypos && X <= Xpos+50 && Y <= Ypos+50 && mouseisdown == true){
//            console.log(tempX)

            Xpos = X-25;
            Ypos = Y-25;
//            console.log("click");
        }
            
            
            //            dragging = true;
//        }
//        else if (mouseisdown == false) {
//            dragging = false;
//        }
//        if (dragging = true) {
//                
//        }
        
        
    }, false);
    
    
    
    ctx.fillStyle = "rgb(200,0,0)";
    var square = ctx.fillRect ((Xpos), (Ypos), 50, 50);
    
}












//    ctx.beginPath();
//    
//    if (i < 30 ){
//        ctx.moveTo(75+i,40+i);
//        ctx.bezierCurveTo(75+i,35*i,70+i,25*i,50+i,25*i);
//    }
//    
//    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
//    ctx.bezierCurveTo(20,80,40,102,75,120);
//    ctx.bezierCurveTo(110,102,130,80,130,62.5);
//    ctx.bezierCurveTo(130,62.5,130,25,100,25);
//    ctx.bezierCurveTo(85,25,75,37,75,40);
//    ctx.fill();
//    
//    
//    ctx.fillStyle = "rgb(200,0,0)";
//    ctx.fillRect ((window.innerWidth/2)-25, (window.innerHeight/2)-25, 50, 50);
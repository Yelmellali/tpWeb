
// Implémenter ici les 4 classes du modèle.
function Drawing(){
    this.Array= [];
}

function Shape(initX,initY,ep,colour){
    this.initX=initX;
    this.initY=initY;
    this.ep=ep;
    this.colour=colour;
}

function Rectangle(initX,initY,ep,hauteur,longeur,colour) {
    Shape.call(this,initX,initY,ep,colour)
    this.hauteur=hauteur;
    this.longeur=longeur;
}

function Line(initX,initY,ep,finX,finY,colour){
    Shape.call(this,initX,initY,ep,colour)
    this.finX=finX;
    this.finY=finY;
}

Rectangle.prototype.paint = function(ctx) {
    ctx.strokeStyle=this.colour
    ctx.lineWidth=this.ep
    ctx.strokeRect(this.initX, this.initY, this.hauteur,this.longeur);
};

Line.prototype.paint = function(ctx) {
    ctx.strokeStyle=this.colour
    ctx.lineWidth=this.ep
    ctx.beginPath();
    ctx.moveTo(this.initX, this.initY);
    ctx.lineTo(this.finX, this.finY);
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.Array.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

// N'oubliez pas l'héritage !

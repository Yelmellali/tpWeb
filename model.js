
// Implémenter ici les 4 classes du modèle.
function Drawing(){
    this.Array=new Map();
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


// N'oubliez pas l'héritage !

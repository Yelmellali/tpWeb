

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

Circle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.colour;
    ctx.lineWidth = this.ep;
    ctx.beginPath();

    ctx.arc(this.initX, this.initY, this.radius, 0, 2 * Math.PI);

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

function updateShapeList(index, shape){
  document.getElementById('shapeList').insertAdjacentElement('beforeend',toDom(shape,index))
}

function toDom(shape, index) {
    if (shape && typeof shape === 'object') {
        let liElement = document.createElement('li');
        liElement.id = `liRemove${index}`;

        if (shape.constructor === Rectangle) {
            let spanElement = document.createElement('span');
            spanElement.style.color = shape.color;
            liElement.appendChild(spanElement);
            liElement.appendChild(document.createTextNode('Rectangle'));
        } else if (shape.constructor === Line) {
            let spanElement = document.createElement('span');
            spanElement.style.color = shape.color;
            liElement.appendChild(spanElement);
            liElement.appendChild(document.createTextNode('Line'));
        }else if(shape.constructor=== Circle){
            let spanElement = document.createElement('span');
            document.createElement('span');
            spanElement.style.color = shape.color;
            liElement.appendChild(spanElement);
            liElement.appendChild(document.createTextNode('Circle'));

        }

        let buttonElement = document.createElement('button');
        buttonElement.type = 'button';
        buttonElement.className = 'btn btn.default remove';
        buttonElement.id = `remove${index}`;
        liElement.appendChild(buttonElement);

        return liElement;
    }
    return null;
}


function remove(drawing,id,ctx,canvas){
    drawing.Array.delete(id)
    document.getElementById('liRemove'+id).remove()
    drawing.paint(ctx,canvas)
}
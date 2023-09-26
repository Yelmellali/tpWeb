
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.rect;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('butLine').onclick = (_) =>
		this.currEditingMode=editingMode.line
	document.getElementById('butRect').onclick = (_) =>
		this.currEditingMode=editingMode.rect
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth=e.target.value
	document.getElementById('colour').onchange = (e) => this.currColour=e.target.value


	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart= function(dnd){
		if(this.currEditingMode===editingMode.rect) {
			this.currentShape = new Rectangle();
		}else{
			this.currentShape=new Line();
		}
	}.bind(this);
	this.onInteractionUpdate= function(dnd){
		console.log(this.currentShape);
		if(this.currEditingMode===editingMode.rect){
			this.currentShape=new Rectangle(dnd.pti_x,dnd.pti_y,this.currLineWidth,
				dnd.ptf_x-dnd.pti_x,dnd.ptf_y-dnd.pti_y,this.currColour);

		}else{
			this.currentShape=new Line(dnd.pti_x,dnd.pti_y,this.currLineWidth,
				dnd.ptf_x,dnd.ptf_y,this.currColour)
		}
		drawing.paint(ctx,canvas);
		this.currentShape.paint(ctx);
	}.bind(this);
	this.onInteractionEnd= function(dnd){
		drawing.Array.push(this.currentShape);
		drawing.paint(ctx,canvas);
		this.currentShape.paint(ctx);
	}.bind(this);
};



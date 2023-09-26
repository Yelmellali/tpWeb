
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.pti_x=0;
    this.pti_y=0;
    this.ptf_x=0;
    this.ptf_y=0;
    this.press=false;
    this.interactor=interactor;
	// Developper les 3 fonctions gérant les événements
    this.pressure= function(evt){
        var re=getMousePosition(canvas,evt);
        this.pti_x=re.x;
        this.pti_y=re.y;
        this.press=true;
        this.interactor.onInteractionStart(this);
    }.bind(this);

    this.movements = function (evt) {
        if(this.press) {
            var re=getMousePosition(canvas,evt);
            this.ptf_x = re.x;
            this.ptf_y = re.y;
            this.interactor.onInteractionUpdate(this);
        }
    }.bind(this);
    this.release = function(evt){
            var re=getMousePosition(canvas, evt);
            this.ptf_x = re.x;
            this.ptf_y = re.y;
            this.press=false;
            this.interactor.onInteractionEnd(this);
    }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown',this.pressure,false);
    canvas.addEventListener('mousemove',this.movements,false);
    canvas.addEventListener('mouseup',this.release ,false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};




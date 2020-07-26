class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.width =width;
      this.height = height;
      //this.image = loadImage("sprites/wood1.png");
    }
    display(){
      text("InBox",100,100);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      super.display();
    }
  };
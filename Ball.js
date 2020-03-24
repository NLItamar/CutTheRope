class Ball {
    constructor(x, y, r, app, options){
        this.x = x;
        this.y = y;
        this.r = r;
        this.app = app;
        this.options = options;
        this.create();        
    }
    physicBody(){
        this.body = Bodies.circle(this.x, this.y, this.r, this.options);
        World.add( world, this.body )
    }
    graphicTexture() {
        //sets the sprite on the graph, linking the matter object to the pixi object
        this.graph = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
        this.graph.interactive = true;
        
        //center of sprite is now the center of the matter object
        this.graph.anchor.x = 0.5;
        this.graph.anchor.y = 0.5;
        
        app.stage.addChild(this.graph)
    }
    create() {
        return {
            body: this.physicBody(),
            texture: this.graphicTexture()
        }
    }
    
    //keep the positions of the everyyything alright
    render() {
        this.graph.x = this.body.position.x;
        this.graph.y = this.body.position.y;
        
        this.x = this.body.position.x;
        this.y = this.body.position.y;
    }
    
    mouseThing(ropeObj, ballObj)
    {
        this.graph.mousedown = function(mouseData){
            console.log("clicked!");
            //severs the constraint
            ropeObj.break();
            world.gravity.y = 0.5;
            constraintOn = false;
            
            //cheesy workaround, click the ball again if it is on the ground to start over
            if(this.y >= window.innerHeight - 50)
                {
                    Body.setPosition(ballObj.body, {x: 25, y: 25});
                    //creates the rope between, yet again
                    ropeObj.connect(250, 10, ballObj.body);
                    //debug
                    console.log(rope);
                    //constraint is connected again
                    constraintOn = true;                
                }
        }
    }
    
}
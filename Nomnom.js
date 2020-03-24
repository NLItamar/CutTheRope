class Nomnom {
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
        /*
        //draws a circle
        this.graph = new PIXI.Graphics();
        this.graph.beginFill(0xffffff);
        this.graph.drawRoundedRect(this.x, this.y, 30, 30, 10);
        */
        /*
        //sets the sprite on the graph, linking the matter object to the pixi object
        this.graph = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
        
        //center of sprite is now the center of the matter object
        this.graph.anchor.x = 0.5;
        this.graph.anchor.y = 0.5;
        
        app.stage.addChild(this.graph)
        */
        
        //sets the sprite on the graph, linking the matter object to the pixi object
        this.graph = new PIXI.Sprite(PIXI.loader.resources["images/sprite.png"].texture);
        
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
    render() {
        this.graph.x = this.body.position.x;
        this.graph.y = this.body.position.y;
        this.x = this.body.position.x;
        this.y = this.body.position.y;
    }
}
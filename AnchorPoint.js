class AnchorPoint {
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
        //draws a circle
        this.graph = new PIXI.Graphics();
        this.graph.beginFill(0xffffff);
        this.graph.drawCircle(this.x, this.y, this.r);
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
    }
}
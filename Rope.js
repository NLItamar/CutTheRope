class Rope{
    constructor(x, y, objectB, app){
        
        //sets the global var to true, so a rope is in place, gonna have to change this when more ropes are in place
        constraintOn = true;
        
        const options = {
            pointA: {
                x: x,
                y: y
            },
            //other connection
            bodyB: objectB,
            stiffness: 0.2,
            length: 200
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        
        //draw the anchorpoint
        this.graph = new PIXI.Graphics();
        this.graph.beginFill(0xffffff);
        this.graph.drawCircle(x, y, 10);
        
        app.stage.addChild(this.graph)
        
        //drawing a line........
        /*
        let line = new PIXI.Graphics();
        line.lineStyle(4, 0xFFFFFF, 1);
        line.moveTo(0, 0);
        line.lineTo(10, 200);
        line.x = 32;
        line.y = 32;
        app.stage.addChild(line);
        */
        //for later, ^ with that i gotta calculate the positions every frame and redraw the whole thing....... 
    }
    
    render() {
        /*
        this.graph.clear();
        this.graph.lineStyle(10, 0xFF0000, 1);
        this.graph.beginFill(0xFF700B, 0.5);
        
        this.graph.moveTo(this.x, this.y);
        this.graph.lineTo();
        */
        /*
        this.line.clear();
        this.line.moveTo(this.x, this.y);
        this.line.lineTo(bX, bY);
        
        this.line.endFill();
        this.line.alpha = 0;
        */
        
    }
    
    break()
    {
        //severs the connection, nullify the objectB which is the ball side of the constraint
        this.rope.bodyB = null;
        //this.rope = null;
    }
    
    connect(x, y, objectB)
    {
        //sets the global var to true, so a rope is in place, gonna have to change this when more ropes are in place
        constraintOn = true;
        
        const options = {
            pointA: {
                x: x,
                y: y
            },
            //other connection
            bodyB: objectB,
            stiffness: 0.2,
            length: 200
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
}
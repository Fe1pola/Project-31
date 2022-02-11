class Particle{
    constructor( x, y ,r){
        var options = {
            restitution: 0.08,
            density: 1
        }

        this.body = Bodies.circle(x, y, r, options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);

        this.r = r;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill(this.color);
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}
class Circle {
        constructor (xPos, yPos, radius){
            this.xPos = xPos;
            this.yPos = yPos;
            this.radius = radius;
        }
        get surface(){
            return (Math.PI * this.radius * this.radius);
        }
        move(xOffset, yOffset) {
           this.xPos += xOffset
           this.yPos += yOffset
        }
    }
   
    let obj1 = new Circle(4,6,6);
    console.log(obj1);
    console.log("The surface of the circle is " + obj1.surface);
    obj1.move(2, 2);
    console.log(obj1);
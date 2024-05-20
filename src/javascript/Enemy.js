class Enemy {
    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.width = 44;
        this.height = 32;
        this.image =  new Image()
        this.image.src = 'images/enemy${this.imageNumber}.png';
    }


    draw(ctx) {
        ctx.drawImages(this.image, this.x, this.y, this.width, this.height);
    }
}

export default class TileMap {
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.dirt = this.#image("../imgs/dirt.png");
        this.stones = this.#image("../imgs/stone.png");
        this.wood = this.#image("../imgs/wood.png");
        this.water = this.#image("../imgs/Water.png");
        // this.ghost = this.#image("../imgs/lava.png");
        this.leaves = this.#image("../imgs/leaves.png");
        this.tree = this.#image("../imgs/tree.png")
    }
    
    
    #image(fileName) {
        const img = new Image();
        img.src = `images/${fileName}`;
        return img;
    }
    
    //1 - dirt
    //0 - stones
    //2 - wood
    //3 water
    map = [
[ ,  ,  ,  ,  ,  ,  ,  ,  ,  , 4, 4, 4,  ,  ,  ,  ,  ,  ,  ,  , 4, 4, 4, , , , , , , , , , , , ],
[ ,  ,  ,  ,  ,  ,  ,  ,  ,  , 4, 5, 4,  ,  ,  ,  ,  ,  ,  ,  , 4, 5, 4, , , , , , , , , , , , ],
[ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 5,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 5,  , , , , , , , , , , , , ],
[1, 3, 3, 3, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
[1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    
draw(canvas, ctx) {
     this.#setCanvasSize(canvas);
    this.#clearCanvas(canvas, ctx);
    this.#drawMap(ctx);
}
    
#drawMap(ctx) {
for (let row = 0; row < this.map.length; row++) {
 for (let column = 0; column < this.map[row].length; column++) {
    const tile = this.map[row][column];
     let image = null;
    switch (tile) {
        case 1:
        image = this.dirt;
        break;
        case 0:
        image = this.stones;
        break;
        case 2:
        image = this.wood;
        break;
        case 3:
        image = this.water;
        break;
        case 4:
        image = this.leaves;
        break
        case 5:
        image = this.tree;
        break;
        }
                                    
        if (image != null)
        ctx.drawImage(
        image,
        column * this.tileSize,
        row * this.tileSize,
        this.tileSize,
        this.tileSize
        );
        }
        }
        }
                            
        #clearCanvas(canvas, ctx) {
        ctx.fillStyle = "#84BEE5";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
                            
        #setCanvasSize(canvas) {
        canvas.height = this.map.length * this.tileSize;
        canvas.width = this.map[0].length * this.tileSize;
        }
        }
         
  
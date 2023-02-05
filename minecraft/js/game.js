import TileMap from "./TileMap.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const tileSize = 32;

const tileMap = new TileMap(tileSize);

function gameLoop() {
  tileMap.draw(canvas, ctx);
}

setInterval(gameLoop, 1000 / 60);

const axe = document.querySelector("#axe");
        const pickaxe = document.querySelector("#pickaxe");
        const shovel = document.querySelector("#shovel");
                        
        // const minecraftMap = new Map();
        // document.body.appendChild(minecraftMap.map);
                        
  
  // Collecting materials


  const dirtBlock = document.getElementById("dirt");
  const stoneBlock = document.getElementById("stone");
  const woodBlock = document.getElementById("wood");
  const inventory = document.querySelector(".inventory")
  
  // Create a function to collect dirt
  const collectDirt = () => {
    // Check if there's anything on top of the dirt block
    if (!dirtBlock.hasAttribute("data-occupied")) {
      // Collect the dirt
      console.log("Collected dirt!");
    } else {
      console.log("Cannot collect dirt, block is occupied.");
    }
  };
  
  // Create a function to collect stone
  const collectStone = () => {
    // Check if there's anything on top of the stone block
    if (!stoneBlock.hasAttribute("data-occupied")) {
      // Collect the stone
      console.log("Collected stone!");
    } else {
      console.log("Cannot collect stone, block is occupied.");
    }
  };
  
  // Create a function to collect wood
//   const collectWood = () => {
//     // Check if there's anything on top of the wood block
//     if (!woodBlock.hasAttribute("data-occupied")) {
//     const wood = inventory.querySelector("#wood");
//     const currentWoodAmount = parseInt(wood.textContent.split(":")[1]) + 1
//     wood.innerHTML = `<img src="./imgs/wood.png" alt="Wood">: ${currentWoodAmount};`
//     console.log("Collected wood!");
//     } else {
//     console.log("Cannot collect wood, block is occupied.");
//     }
//     };
let currentTool = null;
const selectTool = tool => {
  currentTool = tool;
};

const collectWood = () => {
  if (currentTool !== "axe") {
    console.log("Please select an axe first.");
    return;
  }

  if (!woodBlock.hasAttribute("data-occupied")) {
    const wood = inventory.querySelector("#wood");
    const currentWoodAmount = parseInt(wood.textContent.split(":")[1]) + 1;
    wood.innerHTML = `<img src="./imgs/wood.png" alt="Wood">: ${currentWoodAmount}`;
    console.log("Collected wood!");
  } else {
    console.log("Cannot collect wood, block is occupied.");
  }
};

axe.addEventListener("click", () => selectTool("axe"));
woodBlock.addEventListener("click", collectWood);

  // Listen for clicks on the shovel
  shovel.addEventListener("click", collectDirt);
  
  // Listen for clicks on the pickaxe
  pickaxe.addEventListener("click", collectStone);
  
  // Listen for clicks on the axe
  axe.addEventListener("click", collectWood);
















//   map.addEventListener("click", (e) => {
//       const target = e.target;
      
  
//       // Collecting wood with axe
//       if (target.classList.contains("wood") && document.querySelector(".axe")) {
//           const wood = inventory.querySelector(".wood");
//           wood.textContent = `Wood: ${parseInt(wood.textContent.split(":")[1]) + 1}`;
//           target.classList.remove("wood");
//       }
  
//       // Collecting stone with pickaxe
//       if (target.classList.contains("stone") && document.querySelector(".pickaxe")) {
//           const stone = inventory.querySelector(".stone");
//           stone.textContent = `Stone: ${parseInt(stone.textContent.split(":")[1]) + 1}`;
//           target.classList.remove("stone");
//       }
  
//       // Collecting dirt with shovel
//       if (target.classList.contains("dirt") && document.querySelector(".shovel")) {
//           const dirt = inventory.querySelector(".dirt");
//           dirt.textContent = `Dirt: ${parseInt(dirt.textContent.split(":")[1]) + 1}`;
//           target.classList.remove("dirt");
//       }
//   });
  

  
 
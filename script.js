// Initialize grid, tool buttons, and inventory counters
const grid = document.getElementById("grid");
const shovelBtn = document.getElementById("shovel");
const pickaxeBtn = document.getElementById("pickaxe");
const dirtBtn = document.getElementById("dirt");
const stoneBtn = document.getElementById("stone");
const skyInventory = document.getElementById("skyInventory");
const dirtInventory = document.getElementById("dirtInventory");
const stoneInventory = document.getElementById("stoneInventory");

let selectedItem = null;  // Track the selected tool or inventory item
let removedSkyTiles = 0, removedDirtTiles = 0, removedStoneTiles = 0;

// Create a 5x5 grid with random tiles (sky, dirt, stone)
const createGrid = () => {
    const tileTypes = ["sky", "dirt", "stone"];
    for (let i = 0; i < 25; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        const randomTile = tileTypes[Math.floor(Math.random() * tileTypes.length)];
        tile.classList.add(randomTile);  // Assign a random type
        tile.addEventListener("click", () => handleTileClick(tile, randomTile));
        grid.appendChild(tile);
    }
};

// Tool selection handlers
shovelBtn.addEventListener("click", () => {
    selectedItem = "shovel";
    console.log("Shovel selected");
});

pickaxeBtn.addEventListener("click", () => {
    selectedItem = "pickaxe";
    console.log("Pickaxe selected");
});

// Inventory selection handlers for placing back tiles
dirtBtn.addEventListener("click", () => {
    selectedItem = "dirt";
    console.log("Placing Dirt from inventory");
});

stoneBtn.addEventListener("click", () => {
    selectedItem = "stone";
    console.log("Placing Stone from inventory");
});

// Handle tile click based on selected tool or inventory item
const handleTileClick = (tile, type) => {
    if (selectedItem === "shovel" && type === "dirt") {
        tile.classList.remove("dirt");
        tile.classList.add("sky");
        removedDirtTiles++;
        dirtInventory.textContent = `Dirt: ${removedDirtTiles}`;
        console.log("Dirt removed with shovel");
    } else if (selectedItem === "pickaxe" && type === "stone") {
        tile.classList.remove("stone");
        tile.classList.add("sky");
        removedStoneTiles++;
        stoneInventory.textContent = `Stone: ${removedStoneTiles}`;
        console.log("Stone removed with pickaxe");
    } else if (selectedItem === "dirt" && tile.classList.contains("sky")) {
        tile.classList.remove("sky");
        tile.classList.add("dirt");
        removedDirtTiles--;
        dirtInventory.textContent = `Dirt: ${removedDirtTiles}`;
        console.log("Dirt placed back");
    } else if (selectedItem === "stone" && tile.classList.contains("sky")) {
        tile.classList.remove("sky");
        tile.classList.add("stone");
        removedStoneTiles--;
        stoneInventory.textContent = `Stone: ${removedStoneTiles}`;
        console.log("Stone placed back");
    } else {
        console.log("Wrong tool or item cannot be placed here");
    }
};

// Create the initial grid
createGrid();

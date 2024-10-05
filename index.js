const tile = document.getElementById("tile")
const shovelBtn = document.getElementsByTagName("button")[0]
let selectedItem;
shovelBtn.addEventListener("click",()=>{
    selectedItem="shovel"
})

tile.addEventListener("click",(e)=>{
    if(selectedItem=="shovel"){
        console.log("clicked tile");
        tile.classList.remove("sky")
    }else{
        console.log("wrong item");
    }
})
let inventario = [{
    name: "In My Mind",
    year: 2006,
    songs: 15,
    artist: "Pharrell Williams",
    stock: 23
},
{
    name: "Los Misterios del Fuego",
    year: 2019,
    songs: 4,
    artist: "Prehistoricos",
    stock: 3
},
{
    name: "Song of Sage Post Panic",
    year: 2021,
    songs: 18,
    artist: "Navy Blue",
    stock: 0
},
{
    name: "Skiptracing",
    year: 2016,
    songs: 11,
    artist: "Mild High Club",
    stock: 5
}, 
{
    name: "Operation Doomsday",
    year: 1999,
    songs: 19,
    artist: "MF DOOM",
    stock: 7
},
{
    name: "Travelling Without Moving",
    year: 1996,
    songs: 13,
    artist: "Jaramiroaquai",
    stock: 0
},
{
    name: "Fishing for Fishies",
    year: 2019,
    songs: 13,
    artist: "King Gizzar & The Lizar Wizard",
    stock: 9
},
{
    name: "It is What It is",
    year: 2019,
    songs: 15,
    artist: "King Gizzar & The Lizar Wizard",
    stock: 6
}
]
​
const buttons = document.querySelectorAll("")
            console.log({buttons})
            buttons.forEach((button,i)=>{
                button.addEventListener("click",()=>{
                    const selItem = inventario[i]; 
                    console.log(selItem.stock)
                    if(selItem.stock>0){
                        
                        selItem.stock = selItem.stock - 1; 
                        console.log(selItem.stock);
                        alert("fue añadido al carrito");
                        
                    } else {
                        alert("no existe inventario")
                    }
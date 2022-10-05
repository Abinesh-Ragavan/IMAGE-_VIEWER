const imagecontainerEL=document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener(("click"),()=>{
    
     imagenumber=10;
    addNewImages();
    

})

function addNewImages(){
    for (let index = 0; index < imagenumber; index++) {
       
        const newImgEl =document.createElement("img");
    newImgEl.src= `https://picsum.photos/200/300?random=${
        Math.floor(Math.random() *2000 )}`;
            
imagecontainerEL.appendChild(newImgEl);
    }

    
}




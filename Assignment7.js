var createRectangularDiv = document.querySelector("#rectangleWrapper");
createRectangularDiv.style.padding = "50px 50px 0px 50px"
var rectangles = [];
var react =[];
for (let i = 0; i < 10; i++) {
     rectangles[i] = document.createElement("div");
     createRectangularDiv.appendChild(rectangles[i]);
     rectangles[i].classList.add("NewClassCreated");
     rectangles[i].id="idNO"+i;
    // createRectangularDiv.childNodes[i].style.backgroundColor = "purple";
    // rectangles[i].childNodes.style.height = "100px";
    // rectangles[i].childNodes.style.width = "100px";
    // createRectangularDiv.childNodes[i].style.backgroundColor = "purple";
    // createRectangularDiv.childNodes[i].style.height = "100px";
    // createRectangularDiv.childNodes[i].style.width = "100px";
}
var a =document.querySelectorAll(".NewClassCreated");
var m=0;
for (const prop of rectangles){
prop.style.height = "100px";
prop.style.width = "100px";
prop.style.backgroundColor="#"+ m +"76731"
prop.innerText="#A76731"
m++;
}
// createRectangularDiv.innerHTML( "<div>rectangles</div>" );
// console.log(createRectangularDiv);
function reactangleID() {
    console.log("Here are the rectangle IDs")
    for (let i=0 ;i<10;i++) {
        console.log(rectangles[i].id);
    }
}

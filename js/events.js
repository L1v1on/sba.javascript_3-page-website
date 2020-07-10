//console.log(document.getElementsByTagName("button"));
console.log(document.getElementById("boot"));

var bootButton = document.getElementById("boot");
var page = document.title;
bootButton.addEventListener("click", playBoot(page));

console.log(page); //test to see what title value is

function playBoot(page){
    if (page === "Dreamcast Page"){

    }else if (page === "Playstation 2 Page"){

    }else{

    }
}

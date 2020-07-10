
var question = ["What year did the dream die?", "What year did the behemonth appear?",
"Is the gamecube cool?"];
var ans;
var loop = true;

function myQuestion(){
    var pageOn = document.getElementById("title");
    console.log(pageOn.textContent);

    do{
        if(pageOn.textContent === "Dreamcast Page"){
            ans = prompt(question[0]);
            console.log(ans);
            if(ans === "2001"){
                loop = false;
            }
        }else if(pageOn === "Playstation 2 Page"){
            ans = prompt(question[1]);
            if(ans === "2000"){
                loop = false;
            }
        }else{
            ans = prompt(question[2]);
            if(ans.toLocaleLowerCase() === "yes"){
                loop = false;
            }
        }
        console.log(ans);
        console.log(loop);
    }while(loop);
}
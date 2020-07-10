
var question = ["What year did the dream die? Pro tip - look at the page.", "What year did the behemonth appear? Pro tip - look at the page.",
"Is the gamecube cool? Pro tip - YES"];
var ans;
var loop = true;

function myQuestion(){
    var pageOn = document.getElementById("title");
    //console.log(pageOn.textContent);

    do{
        if(pageOn.textContent === "Dreamcast Page"){
            ans = prompt(question[0]);
            //console.log(ans);
            if(ans === "2001"){
                loop = false;
                alert("Good Job!!!");
            }else{
                alert("WRONG!!!");
            }
        }else if(pageOn.textContent === "Playstation 2 Page"){
            ans = prompt(question[1]);
            if(ans === "2000"){
                loop = false;
                alert("Good Job!!!");
            }else{
                alert("WRONG!!!");
            }
        }else{
            ans = prompt(question[2]);
            if(ans.toLocaleLowerCase() === "yes"){
                loop = false;
                alert("Good Job!!!");
            }else{
                alert("WRONG!!!");
            }
        }
        //console.log(ans);
        //console.log(loop);
    }while(loop);
}
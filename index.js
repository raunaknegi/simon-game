var button_array=['red','blue','green','yellow'];

var user_clicked_pattern=[];

var random_color_pattern=[];

var started=true;

var level=0;


$("body").on("keydown",function(){
    if(started===true)
    {
    sequence();
    started=false;
    }
})


$(".btn").on("click",function(){
        var user_picked_color=$(this).attr("id")
        user_clicked_pattern.push(user_picked_color);
        // console.log(user_clicked_pattern);
        playsound(user_picked_color);
        animate(user_picked_color);
        checking_pattern(user_clicked_pattern.length-1)
   
});

function sequence()
{
    user_clicked_pattern=[];
    level++;
    $("h1").text("level "+level)
var number1=Math.random()*4;
number1=Math.floor(number1);
var random_chosen_color=button_array[number1];

random_color_pattern.push(random_chosen_color);

$("#"+random_chosen_color).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(random_chosen_color);
;
}

function playsound(name){
    var sound_name=new Audio("sounds/"+name+".mp3");
        sound_name.play();
}

function animate(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    }, 100)
}


function checking_pattern(current_level){
    if(random_color_pattern[current_level]===user_clicked_pattern[current_level]){
        console.log("sucess");
        if(random_color_pattern.length===user_clicked_pattern.length){
            setTimeout(function(){
                sequence();
            },1000)
        }
    }
    else{
        console.log("wrong");
        $("body").addClass("game-over");
        var ending=new Audio("sounds/wrong.mp3");
        ending.play();
        setTimeout(function(){
            $("body").removeClass("game-over")
        },300)
        start_again();
    }

}

function start_again(){
    level=0;
    user_clicked_pattern=[];
    random_color_pattern=[];
    $("h1").text("Game over.Press any key to start again");
    started=true;
}










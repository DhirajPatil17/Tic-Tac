var box_text=document.querySelectorAll('.box');
var game=document.querySelector('game');
var resetbtn=document.querySelector('.reset');
var new_container=document.querySelector('.new-container');
var new_button=document.querySelector('.new-game');
var wining_tex=document.querySelector('.text');

var player1=true;
var wining_patterns=[
    [0 ,1, 2],
    [3 ,4, 5],
    [6 ,7 ,8],
    [0 ,4, 8],
    [2 ,5, 8],
    [0 ,3, 6],
    [1 ,4, 7],
    [2 ,4, 6]
]
new_button.addEventListener("click",()=>
{
    player1=true;
    enable_boxex();
})
resetbtn.addEventListener("click",()=>
{
    
    enable_boxex();
})
function disable_button()
{
    for(let box of box_text){
        box.disabled=true;
             
    }
}
function enable_boxex()
{
    for(let box of box_text){
        box.disabled=false;
        box.textContent='';
        new_container.classList.add('hide');
    }
}

function wining(winner_person)
{
    disable_button();
    new_container.classList.remove('hide');
    wining_tex.textContent=`Congratulations!! ${winner_person} is the Winner`;
}
function check_winner()
{
    for(let points of wining_patterns)
    {
        pos1=box_text[points[0]].textContent;
        pos2=box_text[points[1]].textContent;
        pos3=box_text[points[2]].textContent;


        if(pos1!="" || pos2!="" || pos3!="")
        {
            if(pos1==pos2 && pos2==pos3)
            {
                wining(pos1);
            }
        }
        
    
    }
}
box_text.forEach((box)=>
{
    box.addEventListener("click",()=>
    { 
        if(player1)
        {
            box.textContent="X";
            
            player1=false;
        }
        else{
            box.textContent="O";    
            player1=true;
        }
        box.disabled=true;
        check_winner();
       

    })
});

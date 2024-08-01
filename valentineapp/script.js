const answers = [
    "Are you sure?",
    "Are you really realy sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Ok, Lets just start over.."
];
let yesbtn=document.getElementById('yes-btn');
let nobtn=document.getElementById('no-btn')
let i=0;
let size=50;
let click=0;
nobtn.addEventListener('click',()=>
{
   let imager=document.getElementById('imagerimg')
    if(click==0)
    {
        imager.src="./no.gif"
        reloadimage()
    }
    click++;
    let sizes=[17,20,10,15,22];
    let answersize=answers.length;
    let randomsize=Math.floor(Math.random()*sizes.length);
    size+=sizes[randomsize];
    yesbtn.style.height=`${size}px`;
    yesbtn.style.width=`${size}px`;
    if(i<answersize-1)
    {
    nobtn.innerHTML=answers[i]
     i++;
    }
    else if(i===answersize-1)
    {
        alert(answers[i]);
        i=0;
        nobtn.innerHTML='No'
        yesbtn.style.width='50px';
        yesbtn.style.height='50px'
        size=50;
    }
});
yesbtn.addEventListener('click',()=>
{
    document.querySelector('.heading').style.display='none';
    let imager=document.getElementById('imagerimg');
    imager.src="./yes.gif";
    reloadimage();


    let buttons=document.getElementsByClassName('buttons')[0];
    buttons.style.display='none'
    let message=document.getElementsByClassName('message')[0];
    message.style.display='block';
});
function reloadimage()
{
     let imager=document.getElementById('imagerimg');
     let src=imager.src;
     imager.src='';
     imager.src=src;
}
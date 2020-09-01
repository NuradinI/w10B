var userHealth = 100;
var comHealth= 110;

function attackone(){
     userHealth = userHealth - 10;
     comHealth = comHealth -10;
     document.getElementById('User-health').innerHTML = userHealth;
     document.getElementById('Com-health').innerHTML = comHealth;
}
function attackTwo(){
    userHealth = userHealth -5;
    comHealth = comHealth -10;
    document.getElementById('User-health').innerHTML = userHealth;
    document.getElementById('Com-health').innerHTML = comHealth
}
function attackThree(){
    userHealth = userHealth -7
    comHealth = comHealth -6
    document.getElementById("User-health").innerHTML = userHealth;
    document.getElementById('Com-health').innerHTML = comHealth;
}
function attackFour(){
    userHealth = userHealth - 15;
    comHealth =  comHealth - 5;
    document.getElementById('User-health').innerHTML = userHealth;
    document.getElementById('Com-health').innerHTML = comHealth;
}
var userSelection = Cookies.get('Selection');

if(userSelection== 'Fox'){
    document.getElementById('Selection-container').innerHTML="<p> Fox </p>" + '<img src="https://www.ssbwiki.com/images/thumb/2/2f/Fox_SSBU.png/1200px-Fox_SSBU.png">' + '<img src="https://vignette.wikia.nocookie.net/kirby/images/f/f4/1-metaknight.png/revision/latest?cb=20200720174946&path-prefix=en">';
}else if(userSelection == 'Falco'){
    document.getElementById('Selection-container').innerHTML="<p> Falco </p>" + '<img src="https://www.ssbwiki.com/images/thumb/8/80/Falco_SSBU.png/1200px-Falco_SSBU.png">' + '<img src="https://vignette.wikia.nocookie.net/kirby/images/f/f4/1-metaknight.png/revision/latest?cb=20200720174946&path-prefix=en">';
}else if(userSelection=="Wolf"){
    document.getElementById('Selection-container').innerHTML="<p> Wolf </p>" + '<img src="https://www.ssbwiki.com/images/thumb/8/8a/Wolf_SSBU.png/1200px-Wolf_SSBU.png">' + '<img src="https://vignette.wikia.nocookie.net/kirby/images/f/f4/1-metaknight.png/revision/latest?cb=20200720174946&path-prefix=en">';
}else{
    document.getElementById('Selection-container').innerHTML="<p> Make a choice! </p>";
}


if(userHealth <= 0){
    document.getElementsByTagName('body')[0].innerHTML = '<h1> You Lose...</h1>'
}
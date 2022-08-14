
const frowny = document.querySelector("#frown");
const smiley= document.querySelector("#smile");

// event listener

function flip1(){
    if(frowny.classList.contains('closed')){
        frowny.classList.add('active');
        smiley.classList.remove('active');
    }
}

function flip2(){
    if(smiley.classList.contains('open')){
        smiley.classList.add('active');
        frowny.classList.remove('active');
    }
}

smiley.addEventListener("click", flip1);
frowny.addEventListener("click", flip2);



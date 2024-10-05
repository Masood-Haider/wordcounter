const text= document.getElementById("textarea");
const word=document.getElementById("words")
const characters=document.getElementById("char");
const sentence=document.getElementById("sentences");
const paragraphs=document.getElementById("para");

text.addEventListener('input',function(){
    let x=text.value;
    const wordsss=x.split(" ");
    word.innerText=wordsss.length;



    characters.innerText=x.length;

    const sentences=x.split(".");
    sentence.innerText=sentences.length;


    const para=x.split("\n");
    paragraphs.innerText=para.length;



})


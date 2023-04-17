let question1={
   satu:"Apa bahasa pemrograman yang digunakan untuk membuat website?"
}

let answerChoice1={
   a : "A.  pyton",
   b : "B.  php",
   c : "C.  java scrip",
}





let answer =document.getElementById('answer')
let question =document.getElementById('question')
let choicea = document.getElementById('choice-a')
let choiceb = document.getElementById('choice-b')
let choicec = document.getElementById('choice-c')
let btn = document.getElementById('answerbtn')
let nextpage = "index2.html"
question.innerHTML=(question1.satu)

choicea.innerHTML=(answerChoice1.a)
choiceb.innerHTML=(answerChoice1.b)
choicec.innerHTML=(answerChoice1.c)
choicea.addEventListener('click', function(){
   alert('salah')
})

choiceb.addEventListener('click', function(){
   alert('salah')
})
choicec.addEventListener('click', function(){
   alert('benar')
   window.location= nextpage;
})

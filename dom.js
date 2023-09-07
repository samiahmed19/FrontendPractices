var element = document.getElementsByTagName('h5')[2];
element.onclick = function(){
    element.innerHTML = "Hello World";
}

var image = document.querySelector('#img1');
image.onclick = function(){
    image.src='lambo.jpg' ;
}

var para=document.querySelectorAll('p.para');
para.forEach(function(para){
    para.onclick = function(){
        para.innerHTML= 'hello world';
    }
})

var element = document.querySelectorAll('h1.head');
element.forEach(function(element){
    element.onclick = function(){
        element.innerHTML = "Hello World";
    }
})
// onsubmit
// onkeydown
// onkeypress
// event.stopPropagation

var btn1=document.getElementById("btn1");
// btn1.addEventListener('click',function(){
//     btn1.innerHTML='sami'
// })
// btn1.addEventListener('click',function(){
//     head1.style.color='blue'
// })


var btn2=document.getElementById("btn2");
btn2.addEventListener('click',function(){
    btn2.innerHTML='ahmed'
})

var head1 = document.getElementById('head1');
head1.addEventListener('click',function(){
    alert("heading");
})

var head2 = document.getElementById('head2');
head2.addEventListener('click',function(){
    head1.innerHTML="heading heading";
})

var head1 = document.getElementById('head1');
// head1.addEventListener('click',function(){
//     head1.style.color='green';
// })
head1.addEventListener("mouseover",function(){
    head1.style.color='orange';
})
head1.addEventListener("mouseout",function(){
    head1.style.color='black';
})
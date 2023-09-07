// var dataShow=document.getElementById('data');
// var fetchData=document.getElementById('fetch-data');

// function fetch(){
//     var xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//         if(xhttp.readyState===4){
//             if(xhttp.status===200){
//                 let data=JSON.parse(xhttp.responseText);
//                 dataShow.innerHTML=`
//                 <h3>${data.title}</h3>
//                 <p>${data.completed}</P>
//                 `;
//             }
//             else{
//                 console.error('Request Failed with data fetch');
//             }
//         }
//     };
//     xhttp.open('GET','https://jsonplaceholder.typicode.com/todos/9',true);
//     xhttp.send();
// }
// fetchData.addEventListner('click',fetch);

var head1 = document.getElementById('fetch-data');
head1.addEventListener('click',function(){
    head1.style.color='red';
})
// CRUD - Create Read update Delete( Post , get , Put, delete )
// 0(unsent)-xmlhttprquest has been created but not called
// 1(opened)-open method has been and the request has been 
// 2(header_received)-send data format
// 3(loading)- the response is being received or not

// var dataShow=document.getElementById('data');
// var fetchData=data.getElementById('fetch-data');

// function fetch(){
//     var xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//         if(xhttp.readyState===4){
//             if(xhttp.status===200){
//                 let data=JSON.parse(xhttp.responseText)
//                 dataShow.innerHTML=`
//                 <h3>${data.city}</h3>
//                 <p>${data.country}</P>
//                 `;
//             }
//             else{
//                 console.error('Request Failed with data fetch');
//             }
//         }
//     };
//     xhttp.open('GET','https://raw-tutorial.s3.eu-west-1.amazonaws.com/patients.json',true);
//     xhttp.send();
// }
// fetchData.addEventListner('click',fetch);



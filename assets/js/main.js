function meni(){
    var items={"Home":"#","About us":"#about","Our work":"#work","Galery":"#galery","Contact":"#contact","Author":"#autor"}
    for (var item in items){
        document.getElementById("meniItems").innerHTML += '<li><a href="'+ items[item]+'">'+item+'</a></li>';
    }
}

$(function() {
    $('#slider').rotateSlider({
        
    });
    
});

var nizSlika =[
    {naslov : "Matt",
      slika : "./assets/img/matt.webp",
      tekst : "Founder / Director"},

    {naslov : "Kelvin",
      slika : "./assets/img/kelvin.webp",
      tekst : "Videographer / Creative"},

    {naslov : "Lowlz",
      slika : "./assets/img/lowlz.webp",
      tekst : "Artist "},

    {naslov : "Em",
      slika : "./assets/img/em.webp",
      tekst : "Junior Content Producer "},

]

var mestoImg = document.getElementById("timjpg") ;

 for (let tim of nizSlika){
    console.log(tim.naslov);

    mestoImg.innerHTML+=`<div  class="featured-item" style="position:relative;text-align:center" > <h2> ${tim.naslov} </h2> 
    <img class="slikeTima" alt="Slike Tima" src="${tim.slika}"/>
    <div style=" width:100%;position:absolute;bottom:0;color:#F9D064; font-size:20px;" class="featured-item-content">
    <div> <p style=" text-shadow: 2px 2px #55555;">${tim.tekst} </p></div>
    
    </div>
    </div>`
}

function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function formSubmit(){
  event.preventDefault();
  
  var name = document.getElementById('name_input');
  var email = document.getElementById('email_input');
  var number = document.getElementById('telephone_input');

  var name_div = $('#nameDiv');
  var email_div = $('#emailDiv');
  var number_div = $('#phoneDiv');

  $('.error').remove();



  var valid = true;

  if(name.value == ""){
    valid = false;
    name_div.append(`<p class='error' style='color:red'>Please enter your name</p>`);
  }
  if(email.value == ""){
    valid = false;
    email_div.append(`<p class='error' style=color:red>Please enter your email</p>`);
  }else{
    if(!ValidateEmail(email)){
      valid = false; 
      email_div.append(`<p class='error' style=color:red>Please enter correct email</p>`);
    }
  }
  
  if(number.value == ""){
    valid = false;
    number_div.append(`<p class='error' style=color:red>Please enter your number</p>`);
  }

  if(valid){
    alert("You successfully sent your message!")
  }else{


  }

}

function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    return true;

  } else {

    return false;

  }

}

var nizSlikaGalerija =[
  {naslov : "Lowlz",
    slika : "./assets/img/af1.jpg",
    tekst : "Air Force 1"},
    
  {naslov : "Matt",
    slika : "./assets/img/matt.webp",
    tekst : "Founder / Director"},

  {naslov : "Kelvin",
    slika : "./assets/img/kelvin.webp",
    tekst : "Videographer / Creative"},
    {naslov : "Lowlz",
    slika : "./assets/img/af1.jpg",
    tekst : "Air Force 1"},
    
  {naslov : "Matt",
    slika : "./assets/img/matt.webp",
    tekst : "Founder / Director"},

  {naslov : "Kelvin",
    slika : "./assets/img/kelvin.webp",
    tekst : "Videographer / Creative"},
    {naslov : "Lowlz",
    slika : "./assets/img/af1.jpg",
    tekst : "Air Force 1"},
    
  {naslov : "Matt",
    slika : "./assets/img/matt.webp",
    tekst : "Founder / Director"},

  {naslov : "Kelvin",
    slika : "./assets/img/kelvin.webp",
    tekst : "Videographer / Creative"},

]

let gridGalerija = document.getElementById('grid-container')

for (let slika of nizSlikaGalerija){

  gridGalerija.innerHTML += `<div onclick='itemClicked(this,"`+slika.slika+`")' class='grid-item'><img src='`+ slika.slika +`'><p class='headerModal'>`+ slika.naslov +`<p><p class='textModal'>`+ slika.tekst +`</p></div>`

}





  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.querySelector(".grid-item");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];


  function itemClicked(item,src){
    modal.style.display = "block";
    let children = item.children;
    $('#modal-naslov').html(children[1].innerHTML);
    $('#modal-body').html(`<img src='` + src + `' />`);
    $('#modal-text').html(children[3].innerHTML);

    
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  



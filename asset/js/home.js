burger = document.querySelector(".burger");
nav = document.querySelector(".navigation");
burger.onclick = function(){
  nav.classList.toggle("active");
}


function changeBg(){
  const elHeader = document.querySelector('header');
  // const elNavbar = document.querySelector('navigation');
  var scrollValue = window.scrollY;
  // console.log(scrollValue);

  if(scrollValue > 799){
    // elHeader.classList.remove('scroll1');
    elHeader.classList.add('scroll');
    elHeader.classList.remove('scroll1');
    nav.classList.add('ganti');
    
  }
  else if(scrollValue > 50){
    elHeader.classList.remove('scroll');
    elHeader.classList.add('scroll1');
    nav.classList.remove('ganti');
    // nav.classList.add('blur');
    
  }
  else{
    elHeader.classList.remove('scroll1');
    elHeader.classList.remove('scroll');
    nav.classList.remove('blur');
    nav.classList.remove('ganti');
    // nav.classList.add('blur1');
  }
}

window.addEventListener('scroll', changeBg);


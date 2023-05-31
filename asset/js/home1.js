tombolMore = document.querySelector(".readmore");
tombolLess = document.querySelector(".readless");
more = document.querySelector(".kata-more");
arrow = document.querySelector(".fas");
less = document.querySelector(".less");

// less = documen.querySelector(".less");
tombolMore.onclick = function(){
    more.classList.toggle("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.toggle('fa-angle-up');
    tombolMore.classList.toggle("none");
    tombolLess.classList.toggle("yes");
    less.classList.toggle("none");
}

tombolLess.onclick = function(){
    more.classList.remove("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.toggle('fa-angle-up');
    tombolMore.classList.remove("none");
    tombolLess.classList.remove("yes");
    less.classList.remove("none");
}
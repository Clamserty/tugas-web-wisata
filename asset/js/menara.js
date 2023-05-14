tombol = document.querySelector(".readmore");
more = document.querySelector(".kata-more");
arrow = document.querySelector(".fas");
tombol.onclick = function(){
    more.classList.toggle("readed");
    // arrow.classList.remove('fa-angle-down');
    arrow.classList.toggle('fa-angle-up');
}
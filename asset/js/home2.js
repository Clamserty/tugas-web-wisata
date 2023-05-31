tombolLessa = document.querySelector(".readless1")
tombolMorea = document.querySelector(".readmore1")
tombolMoreHp = document.querySelector(".readmore3")
morea = document.querySelector(".kata-more1");
arrowa = document.querySelector(".fas1");
lessa = document.querySelector(".less1");
lessHp = document.querySelector(".hp");

tombolMorea.onclick = function(){
    morea.classList.toggle("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.toggle('fa-angle-up');
    tombolMorea.classList.toggle("none");
    tombolLessa.classList.toggle("yes");
    lessa.classList.toggle("none");
}
tombolMoreHp.onclick = function(){
    morea.classList.toggle("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.toggle('fa-angle-up');
    tombolMoreHp.classList.toggle("none");
    tombolLessa.classList.toggle("yes");
    lessHp.classList.toggle("none");
    lessa.classList.toggle("none");

}

tombolLessa.onclick = function(){
    morea.classList.remove("readed");
    tombolMorea.classList.remove("none");
    tombolMoreHp.classList.remove("none");
    tombolLessa.classList.remove("yes");
    lessHp.classList.remove("none");
    lessa.classList.remove("none");
}
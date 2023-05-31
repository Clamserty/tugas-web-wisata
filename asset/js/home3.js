tombolLesss = document.querySelector(".readless2")
tombolMores = document.querySelector(".readmore2")
mores = document.querySelector(".kata-more2");
arrowa = document.querySelector(".fas2");
lesss = document.querySelector(".less2");

tombolMores.onclick = function(){
    mores.classList.add("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.add('fa-angle-up');
    tombolMores.classList.add("none");
    tombolLesss.classList.add("yes");
    lesss.classList.add("none");
}

tombolLesss.onclick = function(){
    mores.classList.remove("readed");
    // arrow.classList.remove('fa-angle-down');
    // arrow.classList.toggle('fa-angle-up');
    tombolMores.classList.remove("none");
    tombolLesss.classList.remove("yes");
    lesss.classList.remove("none");
}
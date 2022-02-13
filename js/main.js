let elopenmodal = document.getElementById('open');
let elClosemodal = document.getElementById('close');
let elopen = document.getElementById('sidebar');

elopenmodal.addEventListener('click', function () {
  elopen.classList.add('show');
  elopenmodal.classList.add('hide');
});

elClosemodal.addEventListener('click', function () {
  elopenmodal.classList.remove('hide');
  elopen.classList.remove('show');
});

var typed = new Typed('#element', {
    strings: ['Fronted Developer', 'Freelancer', 'Web Designer'],
    typeSpeed: 40,
    backSpeed: 30,
    loop: true,
});


var typed = new Typed('#job', {
    strings: ['Freelancer', 'Fronted Developer', 'Web Designer'],
    typeSpeed: 40,
    backSpeed: 30,
    loop: true,
});

let cursor = document.querySelector(".cursor");
let cursorSpot = document.querySelector(".cursor-spot");

document.addEventListener("mousemove", function(b){
  cursor.style.cssText = cursorSpot.style.cssText = "left: " + b.clientX + "px; top: " + b.clientY + "px;";

  const anchors =  document.querySelectorAll("a");
  for(let a of anchors) {
    a.onmouseover = () => {
      cursor.classList.add("hover")
    }
    a.onmouseout = () => {
      cursor.classList.remove("hover")
    }
  }
});



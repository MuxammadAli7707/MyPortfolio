let elopenmodal = document.getElementById('open');
let elClosemodal = document.getElementById('close');
let elbody = document.getElementById('body')
let elopen = document.getElementById('sidebar');

elopenmodal.addEventListener('click', function () {
  elopen.classList.add('show');
  elopenmodal.classList.add('hide');
  elbody.classList.add('left');
});

elClosemodal.addEventListener('click', function () {
  elopenmodal.classList.remove('hide');
  elopen.classList.remove('show');
  elbody.classList.remove('left');
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

var topbutton = document.getElementById('up');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topbutton.style.opacity = "1";
    topbutton.style.transition = "all 0.5s linner";
  } else {
    topbutton.style.opacity = "0";
    topbutton.style.transition = "all 0.5s linner";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

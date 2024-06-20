const menuButton = document.getElementById('menuBtn');
const menu = document.getElementById('dropdown-menu');


menuButton.addEventListener('click', () => {
    menu.classList.toggle("display_JS");
});

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("go-to-top").style.display = "flex";
  } else {
    document.getElementById("go-to-top").style.display = "none";
  }
  
}
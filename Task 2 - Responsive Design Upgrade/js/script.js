/* MENU LIST */
const menuButton = document.getElementById('menuBtn');
const menu = document.getElementById('dropdown-menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle("display_JS");
});




/* Show & hide button on scroll action */
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




/* SEARCH FIELD */
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const itemsList = document.getElementById('items-list');
    const items = itemsList.getElementsByTagName('li');

    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        
        Array.from(items).forEach(function(item) {
            const text = item.textContent || item.innerText;
            if (text.toLowerCase().includes(filter)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

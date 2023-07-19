const div = document.querySelector('div');
const list = div.querySelector('.list')
const li2 = div.querySelector('.list:nth-child(2)')

const h1 = document.createElement('h1')
h1.innerHTML = "Tabel 1";
div.style.border="1px solid black";
list.style.border="1px solid pink";
div.insertBefore(h1, li2);
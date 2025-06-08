const title = document.getElementById('main-title');
const paragraph = document.querySelector('.text');
const buttons = document.querySelectorAll('button');
const list = document.getElementById('item-list');

document.getElementById('change-text').addEventListener('click', () => {
    title.textContent = 'Title Changed!';
    paragraph.innerHTML = '<em>Paragraph updated with <strong>HTML</strong>.</em';
});

title.style.color = 'blue';
paragraph.style.fontsize = '18px';

title.classList.add('highlight');
setTimeout(() => title.classList.remove('highlight'), 2000);

document.getElementById('add-item').addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.className = 'item';
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
});

document.getElementById('remove-item').addEventListener('click', () => {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild)
    }
});

title.setAttribute('title', 'This is the main title');

console.log(title.getAttribute('id'));
console.log(list.children);

const clone = paragraph.cloneNode(true);
document.body.appendChild(clone);

list.addEventListener('click', (e) => {
    if (e.target.matches('li')) {
        alert(`You clicked on: ${e.target.textContent}`);
    }
});
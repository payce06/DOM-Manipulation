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
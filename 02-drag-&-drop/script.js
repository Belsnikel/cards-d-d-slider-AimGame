const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for(let placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(e) {
    // console.log('drag start');
    e.target.classList.add('hold');
    setTimeout(() => e.target.classList.add('hide'), 0)
    ;


}

function dragend(e) {
    // console.log('drag end');
    e.target.className = 'item';
}

function dragover(e) {
    e.preventDefault(item);
}

function dragenter(e) {
    e.target.classList.add('hovered');
}

function dragdrop (e) {
    e.target.append(item);
}

function dragleave(e) {
    e.target.classList.remove('hovered');
}
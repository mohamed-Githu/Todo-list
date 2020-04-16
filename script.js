const list = document.querySelector('.list-wrapper');
const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const searchForm = document.querySelector('.search');

searchForm.addEventListener('submit', e => e.preventDefault());

const deleteTodo = e => {
    if (e.target.tagName === 'I') {
        e.target.parentElement.remove();
    }
};

const addTodo = e => {
    e.preventDefault();
    if (addForm.add.value){
        const label = document.createElement('label');
        const i = document.createElement('i');
        const li = document.createElement('li');
        i.classList.add('far', 'fa-trash-alt');
        label.textContent = addForm.add.value.trim();
        li.append(label, i);
        list.appendChild(li);
        addForm.add.value = '';
    }
};

const filter = e => {
    const searchValue = search.value.trim().toLowerCase();
    const array = Array.from(list.children);
    array.forEach(element => {
        if (element.textContent.toLowerCase().includes(searchValue))
            element.classList.remove('filterd');
        else
            element.classList.add('filterd');
    });
};

list.addEventListener('click', deleteTodo);

addForm.addEventListener('submit', addTodo);

search.addEventListener('keyup', filter);

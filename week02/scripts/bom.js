const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// add event listener for clicking 'Add Chapter'
button.addEventListener('click', function () {
    addChapter();
});

// add event listener for pressing enter
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addChapter();
    }
});

// function to add a chapter
function addChapter() {
    const chapter = input.value.trim();
    
    if (chapter !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
        input.focus();
    }
}
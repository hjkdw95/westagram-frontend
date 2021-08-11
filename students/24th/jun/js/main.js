'use strict';
const entry = document.querySelector('.entry');
const oldComments = document.querySelector('.oldComments');
const commentArea = document.querySelector('.commentArea');

entry.addEventListener('click', addItemFunction);
commentArea.addEventListener('keypress', (e)=> {
    console.log(e);
    if (e.keyCode === 13 ) {
        addItemFunction();
        return;
    }
})

function addItemFunction() {
    const typing = commentArea.value;
    console.log(typing);
    addItem(typing);
    commentArea.value = "";
}

function deleteFunction(e) {
    const delTarget = e.target.parentNode.parentNode;
    delTarget.remove();
}

function addItem(typing) {
    const div = document.createElement('div'),
            idSpan = document.createElement('span'),
            contentSpan = document.createElement('span'),
            delBtn = document.createElement('span');

    div.setAttribute('class', 'comment');
    idSpan.innerText = "3_jun";
    idSpan.setAttribute('class', 'commentId');
    contentSpan.innerText = typing;
    contentSpan.setAttribute('class','commentContent');
    delBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;

    delBtn.addEventListener('click', deleteFunction);
    
    div.appendChild(idSpan);
    div.appendChild(contentSpan);
    div.appendChild(delBtn);

    oldComments.appendChild(div);
}

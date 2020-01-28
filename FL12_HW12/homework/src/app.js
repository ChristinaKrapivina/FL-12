let initialLocation = location.href;

// HTML BLOCKS
let mainBlock = document.querySelector('#main');
let addBlock = document.querySelector('#add');
let modifyBlock = document.querySelector('#modify');

// BUTTONS
let buttonCreate = document.querySelector('#create');
let buttonAddMore = document.querySelector('#addMore');
let buttonSave = document.querySelector('#save');
let buttonCancel = document.querySelector('#cancel');

// EVENTS
buttonCreate.addEventListener('click', () => {
    redirect('new')
});
buttonAddMore.addEventListener('click', addMoreTerms);
buttonSave.addEventListener('click', () => {
    redirect('main')
});
buttonSave.addEventListener('click', store);

buttonCancel.addEventListener('click', () => {
    redirect('main')
});


function redirect(destination) {
    if(destination === 'new') {
        document.location.hash = 'add';
    } else if(destination === 'modify') {
        document.location.hash = 'modify';
    } else if(destination === 'main') {
        document.location = initialLocation;
    }
}
function addMoreTerms() {
    let zero = 0;
    let termsRow = document.getElementsByClassName('terms-wrap')[zero];
    let cloneTermsRow = termsRow.cloneNode(true);
    termsRow.insertAdjacentElement('afterend', cloneTermsRow);
}
function locationHashChanged() {
    if (location.hash === '#add') {
        mainBlock.style.display = 'none';
        addBlock.style.display = 'block';
    } else if (location.hash === '#modify') {
        mainBlock.style.display = 'none';
        modifyBlock.style.display = 'block';
    } else {
        mainBlock.style.display = 'block';
        addBlock.style.display = 'none';
        modifyBlock.style.display = 'none';
    }
}
window.onhashchange = locationHashChanged;

let collectionName = document.querySelector('#collection_name'); 
let form = document.querySelector('#cardsForm'); 
let formElements = form.elements;


function store() {
    for (let element of formElements) {
        let collectionPairs = {};
        if(element.name === 'term' || element.name === 'definition') {
            collectionPairs[element.name] = element.value;
        }
        localStorage.setItem(collectionName, collectionPairs);
    }
}





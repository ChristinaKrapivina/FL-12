const structure = [
    { 
      'folder': true,
      'title': 'Films',
      'children': [ 
        {
          'title': 'Iron Man.avi'
        },
        { 
          'folder': true,
          'title': 'Fantasy',
          'children': [ 
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    { 
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

let mainListContainer = document.createElement('ul');
createDomTree(structure, mainListContainer);
rootNode.appendChild(mainListContainer);

addClickListener();

function createDomTree(fileStructure, containerNode) {
  for(let i = 0; i < fileStructure.length; i++) {
    let listItem = document.createElement('li'),
        div = document.createElement('div'),
        iconNode = createIcon(fileStructure[i]);
  
      div.appendChild(iconNode);
      div.appendChild(document.createTextNode(fileStructure[i].title));
  
      div.classList.add('container');
      
      listItem.appendChild(div);
  
      if (fileStructure[i].folder) {
        div.classList.add('parentContainer');
        let nestedListContainer = createNestedList(fileStructure[i]);

        listItem.appendChild(nestedListContainer);
      } 
 
      containerNode.appendChild(listItem);
  }
}
function createIcon(fileStructureElement){
  let icon = document.createElement('i');
  icon.classList.add('material-icons');

  if (fileStructureElement.folder) {
    icon.classList.add('orange');
    icon.appendChild(document.createTextNode('folder'));
  } else {
    icon.classList.add('grey');
    icon.appendChild(document.createTextNode('insert_drive_file'));
  }
  return icon;
}
function createNestedList(fileStructureElement) {
  let ul = document.createElement('ul');
  ul.classList.add('nested');
  
  if(fileStructureElement.children) {
    createDomTree(fileStructureElement.children, ul);
  } else {
    createEmptyList(ul);
  }
  return ul;
}
function createEmptyList(containerNode) {
    let listItem = document.createElement('li'),
        div = document.createElement('div');

      div.appendChild(document.createTextNode('Folder is empty'));
  
      div.classList.add('container');
      
      listItem.appendChild(div);
      listItem.classList.add('empty');

      containerNode.appendChild(listItem);      
}
function toggleFolderState(nodeElement) {
  nodeElement.nextSibling.classList.toggle('active');
  let iconNode = nodeElement.querySelector('.material-icons');
  if (iconNode.textContent === 'folder') {
    iconNode.textContent = 'folder_open';
  } else {
    iconNode.textContent = 'folder';
  }
}
function addClickListener() {
  let clickableElement = document.querySelectorAll('.parentContainer');
  for (let i = 0; i < clickableElement.length; i++) {
    clickableElement[i].addEventListener('click', () => toggleFolderState(clickableElement[i]));
  }
}

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
// Todo: your code goes here

let ulMain = document.createElement('ul');

function createDomTree(fileStructure, containerNode) {
  for(let i = 0; i < fileStructure.length; i++) {
    let li = document.createElement('li'),
        div = document.createElement('div'),
        icon = document.createElement('i'),
        iconTextFolder = document.createTextNode('folder'),
        iconTextFile = document.createTextNode('insert_drive_file');
  
      icon.classList.add('material-icons');
  
      if (fileStructure[i].folder) {
        icon.classList.add('orange');
        icon.appendChild(iconTextFolder);
        div.classList.add('parentContainer');
      } else {
        icon.classList.add('grey');
        icon.appendChild(iconTextFile);
      }
  
      div.appendChild(icon);
      div.appendChild(document.createTextNode(fileStructure[i].title));
  
      div.classList.add('container');
      
      li.appendChild(div);

      if(fileStructure[i].folder) {
        let ul = document.createElement('ul');
        ul.classList.add('nested');
        li.appendChild(ul);

        if(fileStructure[i].children) {
          createDomTree(fileStructure[i].children, ul);
        } else {
          createEmptyNode(ul);
        }
      }
 
      containerNode.appendChild(li);
  }
}
function createEmptyNode(containerNode) {
    let li = document.createElement('li'),
        div = document.createElement('div');

      div.appendChild(document.createTextNode('Folder is empty'));
  
      div.classList.add('container');
      
      li.appendChild(div);
      li.classList.add('empty');

      containerNode.appendChild(li);      
}

createDomTree(structure, ulMain);

rootNode.appendChild(ulMain);

function openClose(nodeElement) {
  nodeElement.nextSibling.classList.toggle('active');
  let iconNode = nodeElement.querySelector('.material-icons');
  if (iconNode.textContent === 'folder') {
    iconNode.textContent = 'folder_open';
  } else {
    iconNode.textContent = 'folder';
  }
}

let clickedElement = document.querySelectorAll('.parentContainer');

for (let i = 0; i < clickedElement.length; i++) {
  
  clickedElement[i].addEventListener('click', () => openClose(clickedElement[i]));
}



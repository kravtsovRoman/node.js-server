const fs = require('fs');


const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

switch(command) {
    case 'list':
        list();
        break;

    case 'view':
        view();
        break;

    case 'create':
        create();
        break;

    case 'remove':
        remove();
        break;

    default: console.log('Неизвестная команда');  
}
const fs = require('fs');

fs.appendFile('file.txt', 'asdasfsdacfdvssdhyvsvh', error=> {
   if (error) throw error;

   console.log('DOne');
});

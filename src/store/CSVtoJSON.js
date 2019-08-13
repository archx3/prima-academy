import fs from 'fs';

let csvData = fs.readFile('./calendar.csv', null, (file, err) => {
  if (err) {
    console.error(err);
  }
  console.log(file);
})

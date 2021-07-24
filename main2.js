const parse = require('csv-parse');
const fs = require('fs');
const output = [];

const options = {
  columns: true,
  skip_empty_lines: true
};

fs.createReadStream('basic.csv')
  .pipe(parse(options))
  .on('data', (data) => output.push(data))
  .on('end', () => {
    console.log(output);
  });

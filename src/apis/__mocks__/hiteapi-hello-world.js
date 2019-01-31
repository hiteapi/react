const fs = require('fs');

const fakeData = JSON.parse(fs.readFileSync('/Users/landlessness/Documents/git/hiteapi/fixtures/hello_world.json'));
      
export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData);
  });
}

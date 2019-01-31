const fs = require('fs');

const fakeData = JSON.parse(fs.readFileSync(require('path').resolve(__dirname, 'fixtures/hello_world.json'), 'UTF-8'));

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData);
  });
}

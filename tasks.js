console.log('TASK 1');
const fs = require('fs');
fs.writeFileSync('name.txt', 'Ziya Aysha');
let content = fs.readFileSync('name.txt','utf8');
console.log('content of name.txt:',content);
fs.appendFileSync('name.txt', '\n20');
content = fs.readFileSync('name.txt','utf8');
console.log('content after appending:',content);
fs.unlinkSync('name.txt');
console.log("file deleted");
fs.writeFileSync('user/hello.txt','hello from file');
const files = fs.readdirSync('user');
console.log('files in user folder:',files);
console.log('TASK 2');
const names = 'ziya\naysha\njaseel';
console.log(names);
fs.writeFileSync('names.txt',names);
console.log('names.txt is created with names');
const reversednames=
fs.readFileSync('names.txt','utf8')
    .split('\n')
    .filter(Boolean)
    .reverse()
    .join('\n');
    console.log(reversednames)
    fs.writeFileSync('reversed_names.txt',reversednames);
    console.log('reversednames is done');
    console.log('TASK 3');
    const paragraph = `Node is a powerful runtime built on Chrome's V8 engine.
Node allows you to build scalable network apps. Many developers love Node.Node is best`;
console.log(paragraph);
const words = paragraph.toLowerCase().split(/\W+/);
const count = words.filter(word => word === 'node').length;
fs.writeFileSync('node_count.txt',`the word "node" appears ${count} times.`);
console.log(`the word "node" appears ${count} times.`);
console.log('TASK 4');
const readline = require('readline');

const today = new Date();
const dateStr = today.toISOString().split('T')[0]; // e.g., '2025-06-29'
const filename = dateStr + '.txt';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your note: ', (note) => {
  
  fs.appendFileSync(filename, note + '\n');
  console.log(`Note saved to ${filename}`);
  rl.close();
  if (!fs.existsSync('users'))
     {
    fs.mkdirSync('users');
    console.log('Folder "users" created.');
     }

  fs.writeFileSync('users/hello.txt', 'Hello from Node.js!');
  console.log('hello.txt created inside users folder.');
});
  if (!fs.existsSync('users')) {
    fs.mkdirSync('users');
    console.log('Folder "users" created.');
  }

  fs.writeFileSync('users/hello.txt', 'Hello from Node.js!');
  console.log('hello.txt created inside users folder.');
;



const files1 = fs.readdirSync('projects');
fs.writeFileSync('project-list.txt', ''); 
console.log('TASK 5');

for (let i = 0; i < files.length; i++) {
  fs.appendFileSync('project-list.txt', files[i] + '\n');
}

console.log('File names written to project-list.txt');
console.log('TASK 6');
const path = require('path');
const { Console } = require('console');
if (!fs.existsSync('backup')) {
  fs.mkdirSync('backup');
}
const allFiles = fs.readdirSync('.');
for (let i = 0; i < allFiles.length; i++) {
  if (path.extname(allFiles[i]) === '.txt') {
    fs.copyFileSync(allFiles[i], path.join('backup', allFiles[i]));
  }
}

console.log('All .txt files copied to backup folder');

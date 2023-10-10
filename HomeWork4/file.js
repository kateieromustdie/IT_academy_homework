const fs = require('fs-extra');

fs.ensureDir('folder1');
fs.ensureFileSync('folder4/file1.txt');
fs.ensureDir('folder2');
fs.moveSync('folder1/file1.txt', 'folder2/file1.txt');
fs.ensureDir('folder3');
fs.copySync('folder2/file1.txt', 'folder3/file1.txt');
fs.removeSync('folder2/file1.txt');
fs.removeSync('folder3/file1.txt');
fs.removeSync('folder1');
fs.removeSync('folder2');
fs.removeSync('folder3');
const fs = require("fs");
const path = require("path");
const base = path.dirname(process.mainModule.filename);

function read (filePath) {
	return fs.readFileSync(path.resolve(base, filePath));
}

function write (filePath, buf) {
	return fs.writeFileSync(path.resolve(base, filePath), buf);
}

function exists (filePath) {
	return fs.existsSync(path.resolve(base, filePath));
}

function remove (filePath) {
	return fs.unlinkSync(path.resolve(base, filePath));
}

function readDir (dirPath) {
	return fs.readdirSync(path.resolve(base, dirPath));
}

module.exports = { read, write, exists, remove, readDir };

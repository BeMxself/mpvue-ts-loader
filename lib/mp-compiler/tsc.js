const ts = require('typescript');
const strip = require('strip-json-comments');
const fs = require('fs');
const path = require('path');

function tsc(content) {
  const configPath = path.resolve(process.cwd(), 'tsconfig.json');
  if (!fs.existsSync(configPath)) {
    throw new Error('tsconfig.json is not existed on the project root path');
  }
  const tsOptions = JSON.parse(strip(fs.readFileSync(configPath).toString()))
    .compilerOptions;
  return ts.transpile(content, tsOptions);
}

module.exports = tsc;

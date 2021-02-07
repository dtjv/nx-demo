module.exports = {
  // type-check typescript files
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --pretty --noEmit',

  // format & lint all
  '**/*.(ts|js)?(x)': (filenames) => [
    `eslint ${filenames.join(' ')}`,
    ...filenames.map((filename) => `prettier --write '${filename}'`),
  ],
}

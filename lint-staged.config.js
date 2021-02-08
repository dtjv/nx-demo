module.exports = {
  // format all files
  '**/*': (filenames) =>
    filenames.map(
      (filename) =>
        `prettier --config ./.prettierrc.js --write '${filename}' --ignore-unknown`
    ),

  // lint all code
  '**/*.(ts|js)?(x)': (filenames) => `eslint ${filenames.join(' ')}`,

  // type-check typescript files
  '**/*.ts?(x)': () => 'tsc --pretty --noEmit',
}

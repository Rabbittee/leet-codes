const pathReducer = (acc, locator) => {
  if (locator === '' || locator === '.') return acc
  if (locator === '..') return acc.slice(0, -1)
  return [...acc, locator]
}

/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  return '/' + path.split('/').reduce(pathReducer, []).join('/')
}

function simplifyPath(path: string): string {
  let paths = path.split('/');
  let pathStack: string[] = new Array();
  for (let i = 0; i < paths.length; i++) {
    if (paths[i] === '..') {
      pathStack.pop();
      continue;
    }
    if (paths[i] !== '' && paths[i] !== '.') pathStack.push(paths[i]);
  }

  const root = '/';
  return root + pathStack.join('/');
};
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const simplePath = [];

  path.split('/').forEach((subpath) => {
    if (!subpath.length || subpath === '.') return;

    subpath === '..' ? simplePath.pop() : simplePath.push(subpath);
  });

  return '/' + simplePath.join('/');
};

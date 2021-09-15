/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  return "/" + path.split("/").reduce(process, []).join("/");
}

function process(result, token) {
  if (!token || token === ".") return result;

  if (token === "..") return result.slice(0, -1);

  return result.concat(token);
}

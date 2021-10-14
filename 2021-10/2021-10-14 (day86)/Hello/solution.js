function format(array) {
  return array.map(({ val }) => String(val)).join("->");
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root, result = [root]) {
  if (!root.left && !root.right) {
    return [format(result)];
  }

  return (
    [root.left, root.right]
      //
      .filter(Boolean)
      .flatMap((node) => binaryTreePaths(node, [...result, node]))
  );
}

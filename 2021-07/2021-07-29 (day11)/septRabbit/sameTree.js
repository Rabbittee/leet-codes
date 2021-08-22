var isSameTree = function (p, q) {
  //if both p and q are null, then they are same tree
  if (p === null && q === null) return true;

  //if both p and q are not null
  if (p !== null && q !== null) {
    //check if value of q and value of q is hte same, if yes, check right nextnode and left nextnode
    if (p.val === q.val)
      return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
  }
  return false;
};


int maxDepth(char *s) {
  int stack_len = 0;
  int max_depth = 0;

  for (; *s != '\0'; s++) {
    if (*s == '(') {
      stack_len += 1;

      if (stack_len > max_depth) {
        max_depth = stack_len;
      }
    }
    //
    else if (*s == ')') {
      stack_len -= 1;
    }
  }

  return max_depth;
}

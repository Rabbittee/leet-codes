#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

// === stack ===
typedef struct {
  int *array;
  int top;
} stack;

bool is_empty(stack *s) { return s->top < 0; }

int pop(stack *s) {
  int item = s->array[s->top];
  s->top -= 1;
  return item;
}

void push(stack *s, int item) {
  s->top += 1;
  s->array[s->top] = item;
}

int get_top(stack *s) { return s->array[s->top]; }

void clear(stack *s) {
  free(s->array);
  s->top = -1;
}

// === helper ===
int *create_array(int size) {
  int *res = malloc(sizeof(int) * size);
  for (int i = 0; i < size; i++) {
    res[i] = 0;
  }
  return res;
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *dailyTemperatures(int *temperatures, int temperaturesSize,
                       int *returnSize) {
  int *res = create_array(temperaturesSize);
  *returnSize = temperaturesSize;

  stack s = {.array = create_array(temperaturesSize), .top = -1};

  for (int i = 0; i < temperaturesSize; i++) {
    while (!is_empty(&s) && temperatures[i] > temperatures[get_top(&s)]) {
      int prev = pop(&s);
      res[prev] = i - prev;
    }

    push(&s, i);
  }

  clear(&s);

  return res;
}

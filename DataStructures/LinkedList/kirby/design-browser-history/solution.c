#include <stdlib.h>

typedef struct node {
  char *val;
  struct node *next;
  struct node *prev;
} node;

typedef struct {
  node *head;
  node *current;
} BrowserHistory;

node *create_node(char *val, node *prev, node *next) {
  node *current = malloc(sizeof(node));

  current->val = val;
  current->prev = prev;
  current->next = next;

  if (prev != NULL) {
    prev->next = current;
  }

  return current;
}

BrowserHistory *browserHistoryCreate(char *homepage) {
  BrowserHistory *history = malloc(sizeof(BrowserHistory));

  history->current = create_node(homepage, NULL, NULL);
  history->head = history->current;

  return history;
}

void browserHistoryVisit(BrowserHistory *obj, char *url) {
  obj->current = create_node(url, obj->current, NULL);
}

char *browserHistoryBack(BrowserHistory *obj, int steps) {
  while (steps > 0 && obj->current->prev) {
    obj->current = obj->current->prev;
    steps -= 1;
  }

  return obj->current->val;
}

char *browserHistoryForward(BrowserHistory *obj, int steps) {
  while (steps > 0 && obj->current->next) {
    obj->current = obj->current->next;
    steps -= 1;
  }

  return obj->current->val;
}

void browserHistoryFree(BrowserHistory *obj) {
  node *current = obj->head;
  while (current != NULL) {
    node *temp = current->next;
    free(current);
    current = temp;
  }

  free(obj);
}

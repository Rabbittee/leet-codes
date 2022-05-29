

int timeRequiredToBuy(int *tickets, int ticketsSize, int k) {
  int times = 0;
  int head = 0;

  while (tickets[k] > 0) {
    int *element = &tickets[head];
    if (*element > 0) {
      *element -= 1;
      times += 1;
    }

    head = (head + 1) % ticketsSize;
  }

  return times;
}

import { assertEquals } from "https://deno.land/std@0.103.0/testing/asserts.ts";

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  if (!head) return head;

  let cursor = head;

  while (cursor.next) {
    if (cursor.val === cursor.next.val) {
      cursor.next = cursor.next.next;
    } else {
      cursor = cursor.next;
    }
  }

  return head;
}

// === tools ===

/**
 * @param {number[]} arr
 */
function toListNode(arr) {
  return arr.reduceRight((next, val) => new ListNode(val, next), null);
}

/**
 * @param {ListNode} head
 */
function toArray(head, result = []) {
  if (!head) return result;

  return toArray(head.next, [...result, head.val]);
}

// === test ===
Deno.test("Test deleteDuplicates", () => {
  [
    { actual: [], expected: [] },
    { actual: [1, 2, 3], expected: [1, 2, 3] },
    { actual: [1, 1, 2], expected: [1, 2] },
    { actual: [1, 1, 2, 3, 3], expected: [1, 2, 3] },
  ]
    .map(({ actual, expected }) => ({
      actual: toListNode(actual),
      expected: toListNode(expected),
    }))
    .forEach(({ actual, expected }) => {
      // execute
      actual = toArray(deleteDuplicates(actual));
      expected = toArray(expected);

      assertEquals(
        actual,
        expected,
        `actual: ${actual} expected to be: ${expected}`
      );
    });
});

# 800. Letter Case Permutation

`Medium`

## Description

<p>Given a string <code>s</code>, we can transform every letter individually to be lowercase or uppercase to create another string.</p>

<p>Return <em>a list of all possible strings we could create</em>. You can return the output&nbsp;in <strong>any order</strong>.</p>

<p>&nbsp;</p>

## My Thought

literal from head of string,
if meet a letter, go into backtrack with 2 times.
Uppercase and lower case of the letter and literal rest possible permutation.

## O(n^2)
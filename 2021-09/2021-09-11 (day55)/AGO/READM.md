# 150. Evaluate Reverse Polish Notation

`Medium`

## Description

<p>Evaluate the value of an arithmetic expression in <a href="http://en.wikipedia.org/wiki/Reverse_Polish_notation" target="_blank">Reverse Polish Notation</a>.</p>

<p>Valid operators are <code>+</code>, <code>-</code>, <code>*</code>, and <code>/</code>. Each operand may be an integer or another expression.</p>

## Solution

Pick up one element in tokens, if it can be a number. Push into stack, if it is an operator, pop 2 elements from stack and do caculate.

Put result into stack.
Finally answer is stack.

## O(n)